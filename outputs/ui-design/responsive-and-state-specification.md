# UI Design — Responsive and State Specification

**Constraint:** No approved device matrix or breakpoints are available. This is a behavior specification, not a device-support claim.

| Context | Required behavior | Requirements |
|---|---|---|
| Narrow viewport | Stack comparison/content groups in meaningful reading order; preserve labels, disclosures, save/resume and primary action visibility without horizontal-only dependency. | BRD-001, BRD-002, BRD-008, BRD-026 |
| Wide viewport | May place related comparison fields side by side only if every option retains equivalent content and keyboard/screen-reader order. | BRD-007–BRD-009, BRD-025 |
| Keyboard/focus | Provide logical sequential focus, visible focus using approved token, focus movement to error summary/field where appropriate, and no keyboard trap. | BRD-005, BRD-025 |
| Interruption | Preserve supported progress, show recovery/saved state and never duplicate a policy/claim/support submission. | BRD-002, BRD-016, BRD-026, BRD-029 |
| Integration delay | Replace unavailable data/action with explicit status, safe retry/recovery and support route rather than stale or invented information. | BRD-029, BRD-031 |
| Sensitive content | Require authorized access before policy/claim information and minimize data shown in contextual support. | BRD-011, BRD-022, BRD-027 |

