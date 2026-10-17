# Usability Testing — Findings Register

**Evidence classification:** All findings below are AI heuristic findings from a review of proposed specifications and documented dependencies. They are not actual usability test findings or developer-review findings.

| Issue ID | Evidence class | Screen or flow | Description | Severity | User impact | Requirement reference | Recommendation | Retest requirement |
|---|---|---|---|---|---|---|---|---|
| H-001 | AI heuristic | All visual screens / all flows | No approved design system, existing screen set, brand assets or rendered prototype is available; visual hierarchy and consistency cannot be evaluated. | High | Users may encounter inconsistent hierarchy, controls or states when specifications are implemented. | BRD-025, BRD-026, BRD-031 | Obtain approved system/patterns and render representative task states before test. | Compare rendered screens to approved system and test TS-01–TS-07. |
| H-002 | AI heuristic | IA-02, IA-05, IA-06, IA-16 | Approved coverage, disclosure, decision and payment content is unavailable; clarity of material information cannot be evaluated. | High | Users could misunderstand choices, exclusions, decision/payment context or timing if content is unclear. | BRD-001, BRD-008–BRD-012, BRD-019, BRD-031 | Supply approved, jurisdiction-specific content and source/version rules. | Test comprehension with TS-01, TS-02 and TS-05. |
| H-003 | AI heuristic | All screens; form/error/recovery states | Accessibility standard, palette/tokens, device matrix and rendered screens are missing; formal accessibility assessment is blocked. | High | People using assistive technology or different devices may be unable to complete critical tasks. | BRD-005, BRD-025, BRD-026 | Confirm standard/scope and perform rendered keyboard, screen-reader, contrast and reflow testing. | Execute TS-01–TS-07 on confirmed devices/assistive technologies. |
| H-004 | AI heuristic | IA-13–IA-19 | Claim stage, owner, update-window, support hours/SLA and escalation definitions are unresolved. | High | Claimants may not receive understandable progress or know how to obtain help. | BRD-017, BRD-019, BRD-021–BRD-023 | Confirm claims/support operating model and approved content. | Test TS-05 and TS-06 using realistic approved scenarios. |
| H-005 | AI heuristic | IA-03–IA-20 recovery states | Integration contracts, availability expectations and reconciliation behavior are unspecified. | High | Users may receive unclear failures or duplicate submissions during quote, claim or support tasks. | BRD-006, BRD-018, BRD-019, BRD-029 | Define system behaviors and implement safe unavailable/duplicate recovery states. | Test TS-02, TS-04, TS-05 and TS-07 in simulated integration failures. |
| H-006 | AI heuristic | IA-07, IA-10–IA-12 | Authentication/alternate verification and evidence upload file/retention rules are unresolved. | Medium | Customers may be blocked from policy/claim access or unsure how to submit evidence. | BRD-013, BRD-016, BRD-018, BRD-027 | Confirm verification, file, privacy and recovery rules. | Test TS-03, TS-04 and TS-07 with approved rules. |
| H-007 | AI heuristic | IA-17–IA-19 | Channels, languages, accommodations and callback/case commitments are not known. | Medium | Support may be inaccessible or customer expectations may be misleading. | BRD-021–BRD-023, BRD-025, BRD-028 | Confirm service model and localized/accessibility content. | Test TS-06 across approved channel/language/accessibility scope. |

## Findings not available

- **Developer review findings:** None; no developer evidence was supplied.
- **Actual usability test findings:** None; no participant/session evidence was supplied.
- **Existing-versus-proposed differences:** None; no existing screens or rendered proposed screens were supplied.

