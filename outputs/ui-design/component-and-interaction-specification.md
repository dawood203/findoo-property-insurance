# UI Design — Component and Interaction Specification

**Status:** Semantic component contract; exact component names and tokens await an approved design system.

| Component / pattern | Required behavior | States | Traceability |
|---|---|---|---|
| Primary/secondary action | Identify next action and safe non-destructive alternative; avoid promising insurance outcome. | Default, hover/focus where supported, disabled with reason, loading/submitted. | BRD-012, BRD-019, BRD-025 |
| Form field group | Bind label, help, sensitive-data rationale, control and error; preserve valid entry. | Empty, populated, prefilled/source-labelled, invalid, unavailable. | BRD-003–BRD-005 |
| Save/resume pattern | Make saved/recoverable state visible without implying universal persistence. | Unsaved, saving, saved, interrupted/recoverable, unavailable. | BRD-002, BRD-016, BRD-026 |
| Disclosure / wording link | Keep material terms and full wording available at decision point. | Collapsed/expanded; external/document handoff where approved. | BRD-001, BRD-008, BRD-031 |
| Option comparison | Present equivalent approved fields consistently across eligible options. | Loading, eligible, unavailable, changed selection, manual review. | BRD-007–BRD-010, BRD-029 |
| Status / timeline | Show current stage, next action, owner and update window only when known; maintain communication record. | Current, request awaiting customer, integration delayed, decision issued. | BRD-017–BRD-020 |
| Evidence upload | Identify required/optional/later-requested evidence and recovery from failed upload. | Empty, queued, uploaded, failed, requested later. | BRD-016, BRD-018, BRD-027 |
| Alert / recovery panel | Explain error/delay, retained data and safe next action. | Validation error, service unavailable, duplicate prevented, interruption recovered. | BRD-005, BRD-026, BRD-029 |
| Support handoff | Carry only authorized context to approved support channel/callback/case. | Available, unavailable, submitted, escalation route. | BRD-021–BRD-023, BRD-027 |
| Feedback prompt | Offer feedback after task outcome without blocking task. | Optional, dismissed, submitted. | BRD-024 |

