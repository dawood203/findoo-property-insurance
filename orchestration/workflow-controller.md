# Workflow Controller

`workflow_controller.py` is the deterministic state controller. It does not execute UX activities; it evaluates configured file evidence, records an explicit approval, and permits only the next sequential state transition.

## State schema

The machine-readable state is [workflow-state.json](../state/workflow-state.json), governed by [workflow-state.schema.json](../state/workflow-state.schema.json). It contains:

- `current_phase`: the only phase that can be evaluated or approved.
- `phases`: phase status, the fingerprinted `deliverable_version`, and gate result.
- `approvals`: immutable approval records containing timestamp, phase, version, approver, decision and comment.
- `decision_history`: append-only controller events.
- `external_approvals` and `box_uploads`: evidence records that are never populated by inference.

Allowed controller statuses are `NOT_STARTED`, `READY_FOR_REVIEW`, `BLOCKED`, `CHANGES_REQUESTED`, and `APPROVED`. A current phase becomes `READY_FOR_REVIEW` only after deterministic checks pass. It remains there until an explicit approval command is supplied.

## Gate validation rules

The controller configuration mirrors the seven gate files:

1. Only `current_phase` may be evaluated or approved; all predecessor phases must be `APPROVED`.
2. Configured inputs and deliverable paths must exist as files.
3. Deliverables must be non-empty. Research additionally requires exactly 31 `BRD-###` rows in its matrix; later phase outputs require at least one `BRD-` trace reference.
4. The gate stores a SHA-256 fingerprint over configured deliverable files. Approval recomputes it, so changes after review invalidate that approval attempt.
5. The final validation gate rejects `UPLOADED` Box records and approved DPO/EO records that have no evidence reference. It does not generate, infer, or validate the authenticity of external evidence.
6. Programmatic success only means evidence is structurally ready for human review. Semantic, regulatory, accessibility and research-quality claims remain subject to the explicit human gate approval.

## Commands

All commands use the repository root by default. They do not run workflow activities.

```sh
python3 orchestration/workflow_controller.py status
python3 orchestration/workflow_controller.py evaluate
python3 orchestration/workflow_controller.py approve \
  --phase research \
  --version <sha256-from-evaluate> \
  --approver "Authorized User" \
  --decision APPROVE \
  --comment "Research gate approved"
```

To stop advancement and return work for revision, use the same evaluated phase/version with `--decision REQUEST_CHANGES`. This preserves the approval history and changes the phase to `CHANGES_REQUESTED`.

## Error handling

The controller returns exit code `2` and writes `ERROR: ...` to stderr for invalid state, missing inputs/outputs, failed gates, phase mismatch, missing evaluation, stale deliverables, invalid decision, or attempts to approve a non-current phase. Failed deterministic checks are saved as `BLOCKED` in state; no next phase is started. State writes are atomic via a temporary file replacement.

## Tests

Run from the repository root:

```sh
python3 -m unittest discover -s tests -v
```

The tests use temporary directories and do not modify the real workflow state or execute a UX phase.

