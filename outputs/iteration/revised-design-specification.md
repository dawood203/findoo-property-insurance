# Iteration — Revised Design Specification

**Revision type:** Traceable change proposal. The approved Phase 4 UI specification remains unchanged because the proposed changes depend on approvals, content, system contracts and assets that are not available.

| Proposed revision area | Change reference | Required input before updating the approved UI specification | Affected requirements |
|---|---|---|---|
| Visual hierarchy and component use | CHG-001 | Approved design system, existing patterns and rendered prototype. | BRD-025, BRD-026, BRD-031 |
| Coverage/choice/decision content | CHG-002 | Approved jurisdiction-specific wording, disclosures and source/version rules. | BRD-001, BRD-008–BRD-012, BRD-019, BRD-031 |
| Accessibility and responsive behavior | CHG-003 | Target standard, tokens, device/browser matrix and assistive-tech scope. | BRD-005, BRD-025, BRD-026 |
| Claim/support status and escalation | CHG-004, CHG-007 | Claims/support operating decisions and approved service content. | BRD-017, BRD-019, BRD-021–BRD-023 |
| Recovery, verification and evidence | CHG-005, CHG-006 | Integration, identity, upload, privacy/retention and reconciliation contracts. | BRD-013, BRD-016, BRD-018, BRD-027, BRD-029 |

## Current design-state conclusion

No visual/layout/interaction specification is represented as revised or validated. This document records the precise updates required once dependencies are supplied and approved; it does not silently alter the Gate 04-approved deliverable.

## Revision 1 — Reviewable interaction annotations

These proposed annotations extend the Phase 4 specification within existing requirements. They are concrete specification updates for review; dependency-dependent values remain unresolved. The approved baseline in `outputs/ui-design/ui-specification.md` is preserved.

| Change / issue | Updated specification annotation | Expected effect and trade-off | Verification needed |
|---|---|---|---|
| CHG-001 / H-001 | For each IA-01–IA-20 node, document the approved component, text role, spacing role and responsive variant in a component mapping before rendering. Leave unresolved mappings explicitly pending; do not substitute new tokens. | Makes visual decisions reviewable; rendering remains dependent on the supplied system. | RT-01 |
| CHG-002 / H-002 | IA-02/05/06/16 must reference a content record containing approved version, jurisdiction, source and approval status. Keep policy terms, material exclusions, choice consequences and decision explanations adjacent to the relevant action. Unavailable verified content uses the existing recovery route. | Reduces unsupported or disconnected explanations; task completion depends on verified content. | RT-02 |
| CHG-003 / H-003 | Annotate each form field with label, help and error relationships; annotate each task transition with intended focus destination and reading order. Record contrast and reflow as unevaluated until tokens and rendered states are supplied. | Enables implementation review; annotations alone cannot establish accessibility conformance. | RT-03 |
| CHG-004 / H-004 | IA-13/14 present distinct labelled slots for reference, current stage, next action, responsible party and update window when known. IA-16/17 provide approved escalation separately from decision/payment explanation. No estimated commitment fills an unknown slot. | Makes operational information easier to locate; incomplete source data remains visible as a dependency. | RT-04 |
| CHG-005 / H-005 | IA-20 distinguishes a known failure from an unknown submission outcome. In the unknown-outcome state, do not invite a fresh submission until the approved reconciliation process establishes whether the first submission succeeded. Show retained information and the approved support route. | Addresses duplicate-submission risk under BRD-029; reconciliation behavior needs engineering confirmation. | RT-05 |
| CHG-006 / H-006 | IA-07 displays approved verification requirements before entry. IA-12 displays approved file constraints before selection, a per-file outcome after upload, and a recoverable failure tied to the relevant evidence request. Required/optional/later labels remain explicit. | Reduces avoidable access/upload errors; exact identity/file/retention rules remain pending. | RT-06 |
| CHG-007 / H-007 | IA-17/18 separates channel availability from response commitments. Present only confirmed hours, accommodations and callback/case expectations; include the authorized case context and task-return route. | Clarifies support expectations; localization and operational commitments require confirmation. | RT-07 |

All annotations remain proposed and untested. No requirement, service commitment, token value or production content is added by this revision.

