#!/usr/bin/env python3
"""Deterministic state controller for the Property Insurance UX workflow.

This controller validates only evidence it can inspect (files, fingerprints and
record integrity). It never runs UX work, infers human approval, or treats
natural-language claims as proof of DPO/EO approval or a Box upload.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

PHASES = [
    "research",
    "define",
    "information-architecture",
    "ui-design",
    "usability-testing",
    "iteration",
    "ux-validation-approval",
]

GATES: dict[str, dict[str, Any]] = {
    "research": {
        "inputs": ["input/brd/property-insurance-brd.md"],
        "outputs": [
            "outputs/research/property-insurance-brd-analysis.md",
            "outputs/research/requirements-traceability-matrix.md",
            "outputs/research/workflow-status.md",
        ],
        "checks": ["nonempty_outputs", "research_traceability"],
    },
    "define": {
        "inputs": [
            "outputs/research/property-insurance-brd-analysis.md",
            "outputs/research/requirements-traceability-matrix.md",
        ],
        "outputs": [
            "outputs/define/definition-brief.md",
            "outputs/define/scope-record.md",
            "outputs/define/success-measure-proposal.md",
        ],
        "checks": ["nonempty_outputs", "brd_traceability"],
    },
    "information-architecture": {
        "inputs": [
            "outputs/define/definition-brief.md",
            "outputs/research/requirements-traceability-matrix.md",
        ],
        "outputs": [
            "outputs/information-architecture/navigation-model.md",
            "outputs/information-architecture/task-flows.md",
            "outputs/information-architecture/content-state-inventory.md",
        ],
        "checks": ["nonempty_outputs", "brd_traceability"],
    },
    "ui-design": {
        "inputs": [
            "outputs/information-architecture/navigation-model.md",
            "outputs/information-architecture/task-flows.md",
        ],
        "outputs": [
            "outputs/ui-design/ui-specification.md",
            "outputs/ui-design/accessibility-review.md",
            "outputs/ui-design/trace-map.md",
        ],
        "checks": ["nonempty_outputs", "brd_traceability"],
    },
    "usability-testing": {
        "inputs": [
            "outputs/ui-design/ui-specification.md",
            "outputs/ui-design/accessibility-review.md",
        ],
        "outputs": [
            "outputs/usability-testing/test-plan.md",
            "outputs/usability-testing/observations.md",
            "outputs/usability-testing/findings-register.md",
        ],
        "checks": ["nonempty_outputs", "brd_traceability"],
    },
    "iteration": {
        "inputs": [
            "outputs/usability-testing/findings-register.md",
            "outputs/ui-design/ui-specification.md",
        ],
        "outputs": [
            "outputs/iteration/change-log.md",
            "outputs/iteration/finding-disposition.md",
            "outputs/iteration/retest-plan.md",
        ],
        "checks": ["nonempty_outputs", "brd_traceability"],
    },
    "ux-validation-approval": {
        "inputs": [
            "outputs/iteration/change-log.md",
            "outputs/iteration/finding-disposition.md",
        ],
        "outputs": [
            "outputs/ux-validation-approval/validation-report.md",
            "outputs/ux-validation-approval/approval-pack-index.md",
            "outputs/ux-validation-approval/residual-risk-register.md",
            "presentation/ux-validation-review-pack.md",
        ],
        "checks": ["nonempty_outputs", "brd_traceability", "external_evidence_integrity"],
    },
}


class ControllerError(Exception):
    """An expected command or state validation failure."""


def timestamp() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def fingerprint(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def initial_state() -> dict[str, Any]:
    return {
        "schema_version": "1.0",
        "current_phase": "research",
        "phases": {phase: {"status": "NOT_STARTED", "deliverable_version": None,
                             "gate": {"status": "NOT_EVALUATED", "checks": []}}
                   for phase in PHASES},
        "approvals": [],
        "decision_history": [],
        "external_approvals": [],
        "box_uploads": [],
    }


def load_state(path: Path) -> dict[str, Any]:
    if not path.exists():
        raise ControllerError(f"State file does not exist: {path}")
    try:
        state = json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        raise ControllerError(f"Invalid state JSON: {error.msg}") from error
    validate_state_shape(state)
    return state


def validate_state_shape(state: dict[str, Any]) -> None:
    if state.get("schema_version") != "1.0":
        raise ControllerError("Unsupported or missing schema_version")
    if state.get("current_phase") not in PHASES + [None]:
        raise ControllerError("current_phase is invalid")
    if set(state.get("phases", {})) != set(PHASES):
        raise ControllerError("State must contain exactly the configured phases")
    for collection in ("approvals", "decision_history", "external_approvals", "box_uploads"):
        if not isinstance(state.get(collection), list):
            raise ControllerError(f"{collection} must be an array")


def save_state(path: Path, state: dict[str, Any]) -> None:
    validate_state_shape(state)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    temporary.replace(path)


def event(state: dict[str, Any], action: str, phase: str, details: dict[str, Any]) -> None:
    state["decision_history"].append({"timestamp": timestamp(), "action": action,
                                      "phase": phase, "details": details})


def expected_phase(state: dict[str, Any]) -> str:
    phase = state["current_phase"]
    if phase is None:
        raise ControllerError("Workflow is complete; there is no phase to approve")
    return phase


def prior_phase(phase: str) -> str | None:
    index = PHASES.index(phase)
    return PHASES[index - 1] if index else None


def check_predecessor(state: dict[str, Any], phase: str) -> str | None:
    previous = prior_phase(phase)
    if previous and state["phases"][previous]["status"] != "APPROVED":
        return f"Predecessor phase is not approved: {previous}"
    return None


def output_versions(root: Path, phase: str) -> tuple[str | None, list[str]]:
    paths = [root / item for item in GATES[phase]["outputs"]]
    missing = [str(item.relative_to(root)) for item in paths if not item.is_file()]
    if missing:
        return None, missing
    combined = "".join(f"{item.relative_to(root)}:{fingerprint(item)}\n" for item in paths)
    return hashlib.sha256(combined.encode("utf-8")).hexdigest(), []


def evaluate_gate(root: Path, state: dict[str, Any], phase: str) -> dict[str, Any]:
    if phase != expected_phase(state):
        raise ControllerError(f"Cannot evaluate {phase}; current phase is {expected_phase(state)}")
    failures: list[dict[str, str]] = []
    predecessor_failure = check_predecessor(state, phase)
    if predecessor_failure:
        failures.append({"check": "phase_sequence", "message": predecessor_failure})

    gate = GATES[phase]
    for source in gate["inputs"]:
        path = root / source
        if not path.is_file():
            failures.append({"check": "required_input", "message": f"Missing input: {source}"})
    version, missing_outputs = output_versions(root, phase)
    for item in missing_outputs:
        failures.append({"check": "required_output", "message": f"Missing output: {item}"})

    if not missing_outputs:
        paths = [root / item for item in gate["outputs"]]
        if "nonempty_outputs" in gate["checks"]:
            for path in paths:
                if not path.read_text(encoding="utf-8").strip():
                    failures.append({"check": "nonempty_outputs", "message": f"Empty output: {path.relative_to(root)}"})
        if "brd_traceability" in gate["checks"]:
            if not any("BRD-" in path.read_text(encoding="utf-8") for path in paths):
                failures.append({"check": "brd_traceability", "message": "No BRD trace ID in phase outputs"})
        if "research_traceability" in gate["checks"]:
            trace = root / "outputs/research/requirements-traceability-matrix.md"
            count = len(re.findall(r"\| BRD-\d{3} \|", trace.read_text(encoding="utf-8"))) if trace.is_file() else 0
            if count != 31:
                failures.append({"check": "research_traceability", "message": f"Expected 31 BRD trace rows; found {count}"})
        if "external_evidence_integrity" in gate["checks"]:
            failures.extend(external_evidence_failures(state))

    phase_state = state["phases"][phase]
    phase_state["deliverable_version"] = version
    phase_state["gate"] = {"status": "PASS" if not failures else "FAIL", "checks": failures,
                           "evaluated_at": timestamp()}
    phase_state["status"] = "READY_FOR_REVIEW" if not failures else "BLOCKED"
    event(state, "GATE_EVALUATED", phase, {"result": phase_state["gate"]["status"],
                                             "deliverable_version": version, "failures": failures})
    return {"phase": phase, "status": phase_state["status"], "version": version, "failures": failures}


def external_evidence_failures(state: dict[str, Any]) -> list[dict[str, str]]:
    failures: list[dict[str, str]] = []
    for record in state["external_approvals"]:
        if record.get("status") in {"APPROVED", "APPROVED_WITH_CONDITIONS"} and not record.get("evidence_reference"):
            failures.append({"check": "external_evidence", "message": "Approved DPO/EO record lacks evidence reference"})
    for record in state["box_uploads"]:
        if record.get("status") == "UPLOADED" and not record.get("evidence_reference"):
            failures.append({"check": "box_evidence", "message": "Box upload marked UPLOADED without evidence"})
    return failures


def record_approval(state: dict[str, Any], phase: str, version: str, approver: str,
                    decision: str, comment: str) -> dict[str, Any]:
    if phase != expected_phase(state):
        raise ControllerError(f"Approval phase mismatch: current phase is {expected_phase(state)}, not {phase}")
    if decision not in {"APPROVE", "REQUEST_CHANGES"}:
        raise ControllerError("decision must be APPROVE or REQUEST_CHANGES")
    current_version = state["phases"][phase].get("deliverable_version")
    if not current_version:
        raise ControllerError("No evaluated deliverable version exists for this phase")
    if version != current_version:
        raise ControllerError("Stale or incorrect approval: deliverable version does not match current gate evaluation")
    approval = {"timestamp": timestamp(), "phase": phase, "deliverable_version": version,
                "approver": approver, "decision": decision, "comment": comment}
    state["approvals"].append(approval)
    event(state, "APPROVAL_RECORDED", phase, approval)
    return approval


def apply_approval(root: Path, state: dict[str, Any], phase: str, version: str, approver: str,
                   decision: str, comment: str) -> dict[str, Any]:
    if phase != expected_phase(state):
        raise ControllerError(f"Approval phase mismatch: current phase is {expected_phase(state)}, not {phase}")
    phase_state = state["phases"][phase]
    if decision == "APPROVE" and phase_state["gate"].get("status") != "PASS":
        raise ControllerError("Cannot approve: gate has not passed")
    actual_version, missing = output_versions(root, phase)
    if missing:
        raise ControllerError("Deliverables changed after evaluation: required output is now missing")
    if actual_version != phase_state.get("deliverable_version"):
        raise ControllerError("Deliverables changed after evaluation; evaluate the gate again before approval")
    approval = record_approval(state, phase, version, approver, decision, comment)
    if decision == "REQUEST_CHANGES":
        phase_state["status"] = "CHANGES_REQUESTED"
        event(state, "CHANGES_REQUESTED", phase, {"approval_timestamp": approval["timestamp"]})
        return {"action": "STOP_FOR_CHANGES", "phase": phase}

    phase_state["status"] = "APPROVED"
    index = PHASES.index(phase)
    if index == len(PHASES) - 1:
        state["current_phase"] = None
        event(state, "WORKFLOW_COMPLETED", phase, {"approval_timestamp": approval["timestamp"]})
        return {"action": "WORKFLOW_COMPLETE", "phase": phase}
    next_phase = PHASES[index + 1]
    state["current_phase"] = next_phase
    state["phases"][next_phase]["status"] = "NOT_STARTED"
    event(state, "ADVANCED", phase, {"next_phase": next_phase, "approval_timestamp": approval["timestamp"]})
    return {"action": "ADVANCED", "phase": phase, "next_phase": next_phase}


def parser() -> argparse.ArgumentParser:
    command = argparse.ArgumentParser(description=__doc__)
    command.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    command.add_argument("--state", type=Path, default=Path("state/workflow-state.json"))
    sub = command.add_subparsers(dest="command", required=True)
    sub.add_parser("status")
    sub.add_parser("evaluate")
    approve = sub.add_parser("approve")
    approve.add_argument("--phase", required=True, choices=PHASES)
    approve.add_argument("--version", required=True)
    approve.add_argument("--approver", required=True)
    approve.add_argument("--decision", required=True, choices=["APPROVE", "REQUEST_CHANGES"])
    approve.add_argument("--comment", default="")
    return command


def main(argv: list[str] | None = None) -> int:
    args = parser().parse_args(argv)
    root = args.root.resolve()
    state_path = args.state if args.state.is_absolute() else root / args.state
    try:
        state = load_state(state_path)
        if args.command == "status":
            print(json.dumps(state, indent=2, sort_keys=True))
            return 0
        phase = expected_phase(state)
        if args.command == "evaluate":
            result = evaluate_gate(root, state, phase)
        else:
            result = apply_approval(root, state, args.phase, args.version, args.approver, args.decision, args.comment)
        save_state(state_path, state)
        print(json.dumps(result, indent=2, sort_keys=True))
        return 0
    except ControllerError as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())

