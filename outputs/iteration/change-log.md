# Iteration — Change Log

**Status:** Proposed changes only. No approved UI specification was overwritten, no rendered screen was changed, and no change is validated with users or developers.

| Change ID | Linked issue | Affected screen / flow | Proposed design change | Requirement reference | Evidence / root-cause boundary | Retest requirement | Status |
|---|---|---|---|---|---|---|---|
| CHG-001 | H-001 | All visual screens / all flows | Apply the approved design system and render representative states before judging visual hierarchy or consistency. | BRD-025, BRD-026, BRD-031 | Root cause evidenced as missing system/screens/prototype, not observed user failure. | Compare rendered screens and execute TS-01–TS-07. | Pending dependency |
| CHG-002 | H-002 | IA-02, IA-05, IA-06, IA-16 | Insert approved jurisdiction-specific coverage, disclosure, decision and payment content with source/version context. | BRD-001, BRD-008–BRD-012, BRD-019, BRD-031 | Root cause evidenced as unavailable approved content. | Comprehension test in TS-01, TS-02, TS-05. | Pending dependency |
| CHG-003 | H-003 | All screens; form/error/recovery | Apply confirmed accessibility standard and token values; validate semantic structure, keyboard, screen reader, contrast and reflow in rendered screens. | BRD-005, BRD-025, BRD-026 | Root cause evidenced as absent standard/tokens/device scope/rendered artifacts. | Execute TS-01–TS-07 on agreed devices/assistive tech. | Pending dependency; formal validation blocked |
| CHG-004 | H-004 | IA-13–IA-19 | Populate approved claim stage, owner, update-window, support hours/SLA and escalation content; preserve “when known” condition. | BRD-017, BRD-019, BRD-021–BRD-023 | Root cause evidenced as unresolved operations/content decisions. | Test TS-05 and TS-06 with approved realistic scenarios. | Pending dependency |
| CHG-005 | H-005 | IA-03–IA-20 recovery | Implement approved integration error, retry, reconciliation and duplicate-prevention states; retain safe support route. | BRD-006, BRD-018, BRD-019, BRD-029 | Root cause evidenced as missing system contracts. | Simulate failure in TS-02, TS-04, TS-05, TS-07. | Pending dependency |
| CHG-006 | H-006 | IA-07, IA-10–IA-12 | Specify approved authentication/alternate verification and evidence file/retention/recovery behavior. | BRD-013, BRD-016, BRD-018, BRD-027 | Root cause evidenced as unresolved verification/privacy/upload rules. | Test TS-03, TS-04 and TS-07. | Pending dependency |
| CHG-007 | H-007 | IA-17–IA-19 | Populate approved channel, language, accommodation, callback/case and escalation information. | BRD-021–BRD-023, BRD-025, BRD-028 | Root cause evidenced as unknown service model/localization/accessibility commitments. | Test TS-06 across approved scope. | Pending dependency |

## Prioritization

1. **High — blocking test readiness:** CHG-001 through CHG-005. These affect testable screens, approved content, accessibility, claim/support status clarity or integration recovery.
2. **Medium — blocks affected tasks:** CHG-006 and CHG-007. These affect access/evidence and support flows.

Priority preserves the heuristic severity and user-impact assessment. It is not a build sequence, scope approval or risk acceptance.

