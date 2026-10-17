# Approval Policy

Every phase gate requires an explicit user approval recorded in the authoritative `state/workflow-state.json` with date, approver, phase, decision and deliverable version. `state/workflow-state.md` is a human-readable register/template only. Silence, a passing checklist, or creation of files is not approval.

## Gate decisions

- **Pass — pending user approval:** Evidence meets exit criteria; do not start the next phase.
- **Approved to start next phase:** User explicitly authorizes the named next phase after a pass.
- **Fail / blocked:** Exit criteria are not met; downstream work is prohibited until corrected and re-reviewed.

## External approvals

DPO and EO approvals are external. Record their decision in `state/external-approvals-log.md` with scope, conditions, date and durable evidence reference. Use `Not requested`, `Pending`, `Approved`, `Approved with conditions`, or `Rejected`; never infer an approval.

## Box evidence

Record a Box upload only when evidence is available: a verified URL, receipt/export, or explicit user confirmation. Otherwise state `Not evidenced`.

