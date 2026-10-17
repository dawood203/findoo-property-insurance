# Property Insurance UX AI Orchestrator — Project Instructions

## Purpose

This repository governs a seven-phase, human-approved UX process for a property-insurance experience. It is an orchestration framework, not permission to build, publish, or operate an insurance product.

## Non-negotiable controls

- Do not start or advance a phase without explicit user approval recorded in the authoritative machine-readable `state/workflow-state.json`. `state/workflow-state.md` is a human-readable register/template and must not be treated as an approval substitute.
- A failed or incomplete gate blocks all downstream phase work. Never bypass a gate.
- Treat the BRD and approved decisions as sources of truth. Record missing information, assumptions, conflicts, and questions; do not invent facts, requirements, rules, policies, approvals, or test findings.
- Maintain requirement IDs from `outputs/research/requirements-traceability-matrix.md` (for example, BRD-001). Link derived outputs to those IDs where applicable.
- DPO and EO are external approvers. Record their decision, evidence reference, date, scope and conditions in `state/external-approvals-log.md`; do not imply their approval.
- Do not state that a Box upload occurred unless an evidence reference (URL, receipt, export, or user confirmation) is recorded in the decision log.
- Keep customer, policy, claim, payment and evidence data out of uncontrolled artifacts. Use only approved/sanitized inputs.

## Operating model

All Findoo UI design activities must use `material-design-3`, apply M3 foundations/components/responsive behavior/accessibility guidance, and preserve approved BRD requirements. Use only approved Findoo design tokens. If token values or approval evidence are missing, record that dependency and do not invent final values.

### Project skill catalog

- **material-design-3:** Apply Google Material Design 3 foundations, components, adaptive layouts and WCAG 2.2 AA guidance during Findoo UI design, component specification, design review and UI validation. Read `skills/material-design-3/SKILL.md` before those activities, alongside `skills/ui-specification.md` and `skills/accessibility-review.md`.

The catalog above provides explicit project instruction discovery. The requested native discovery path `.agents/skills/material-design-3/SKILL.md` is unavailable: creation in the protected directory was declined. Do not assume native runtime registration or duplicate the skill elsewhere without authorization.

Read `orchestration/orchestrator.md`, `orchestration/workflow.md`, the active phase agent, applicable skills, and its gate before performing phase work. Update the workflow state and decision log as evidence is produced. Stop for human review at every gate.

## Artifact locations

- Inputs: `inputs/` (new controlled sources) and the retained legacy `input/` source folder until an authorized migration occurs
- Phase outputs: `outputs/<phase>/`
- Presentation-ready material: `presentation/`
- State and approvals: `state/`
- Reusable skills: `skills/`
- Governance: `orchestration/` and `gates/`

