# UI Design — Detailed Specification

**Status:** Detailed design specification, not a Figma file or rendered screen set. No existing application screens, design-system tokens, brand assets or Figma integration were available.  
**Source basis:** Approved IA nodes IA-01–IA-20; BRD-001–BRD-031.  
**Design-system rule:** Use the existing approved system when supplied. Until then, semantic roles below are specifications—not invented token values, font names, colours or component names.

## Global layout and content hierarchy

| Area | Hierarchy | Layout / interaction rule | Requirements |
|---|---|---|---|
| Task frame | Task title → concise purpose/status → primary content/action → support/escape route. | Keep the customer’s current task and next action visible; never use a status label to imply an insurer decision. | BRD-001, BRD-017, BRD-021 |
| High-consequence choices | Explanation/disclosure → choice controls → consequence → confirmation/action. | Show approved material content before selection; link full wording in context. | BRD-001, BRD-008–BRD-012, BRD-031 |
| Progressive data entry | Task instruction → grouped fields → field-level explanation → validation → save/continue. | Preserve entered valid data on error/interruption; state why unfamiliar/sensitive data is needed. | BRD-002–BRD-005, BRD-016, BRD-026 |
| Claim crisis flow | Emergency distinction → safety/incident capture → evidence → confirmation → visible next action. | Emergency-services route is visually and semantically distinct from insurance support. | BRD-013–BRD-017 |
| Support | Context-aware summary → approved channels/options → escalation/callback/case. | Support remains reachable without discarding task progress. | BRD-021–BRD-023 |

## Semantic visual specification

| Design concern | Specification | Dependency / limitation |
|---|---|---|
| Typography | Use approved type styles for page title, section title, body, supporting text, form label, error and action. Keep labels and error text programmatically associated with controls. | Type scale/family/weights unavailable. |
| Colour | Use approved semantic roles for primary action, secondary action, informative status, warning, error, success, focus and text/background. Never rely on colour alone for claim/evidence/status meaning. | Palette/contrast tokens unavailable. |
| Spacing | Use the approved spacing scale for task groups, field groups, cards, status blocks and action areas; maintain consistent grouping between label, help, control and error. | Spacing scale unavailable. |
| Components | Reuse approved navigation, button/link, form field, select, file upload, alert, status, disclosure, card, timeline, dialog and feedback components when provided. | Component library unavailable. |
| Content | Render only approved wording/prices/disclosures/decision explanations and identify source/version where applicable. | Content approval and source system unavailable. |

## Screen and state specifications

| IA node(s) | Detailed design specification | Interactions / validation / responsive behavior | Requirements |
|---|---|---|---|
| IA-01, IA-02 | Present coverage purpose first, followed by key terms, deductible, exclusions and clear full-wording access. Show route to application and help. | Linear reading order; disclosure links remain available on small screens; no cheapest/best/guarantee claim. | BRD-001, BRD-012, BRD-025, BRD-031 |
| IA-03, IA-04 | Use grouped application sections with save/resume/review state, source-labelled permitted prefill and manual-underwriting outcome state. | Inline accessible errors; preserve values; explain data requests; responsive single-column progression where space is constrained. | BRD-002–BRD-006, BRD-026, BRD-029 |
| IA-05, IA-06 | Display verified eligible options in a consistent comparison structure: premium/payment frequency, deductible, limits, exclusions, effective-date rules and material fees/disclosures. Explain change consequences before commit. | Comparison can reflow from columns to stacked option cards; selection confirmation must preserve disclosures; unavailable data shows a source/system state rather than substitute values. | BRD-007–BRD-010, BRD-012, BRD-028–BRD-031 |
| IA-07–IA-09 | Present authentication/alternate verification only as approved, then policy summary, documents, dates, deductible, contact and approved servicing actions. | Authentication failure routes to approved recovery/support; sensitive information is not exposed before authorization. | BRD-011, BRD-013, BRD-027 |
| IA-10 | Place emergency-services distinction before insurance support and incident entry. | Emergency route leaves the insurance workflow; continued claim route is explicit and recoverable. | BRD-013–BRD-014 |
| IA-11, IA-12 | Sequence incident/safety details, declarations and evidence. Label evidence mandatory, optional or requested later. | Validate fields before progression; support save/resume; file upload needs type/size/failed-upload recovery once rules are supplied. | BRD-015–BRD-016, BRD-018, BRD-026–BRD-027 |
| IA-13, IA-14, IA-15 | Confirmation and status prioritize claim reference, current stage, next action, responsible party and update window when known. Timeline exposes communication history and requests. | Status updates retain in-app record; request response returns to status; unknown update windows must be stated as unavailable, not estimated. | BRD-017–BRD-018, BRD-020, BRD-029, BRD-031 |
| IA-16 | Separate approved decision explanation, payment status when available and appeal/escalation action. | Do not show amount/timing before verified decision; unavailable payment data uses recovery/support state. | BRD-019, BRD-029, BRD-031 |
| IA-17–IA-19 | Support centre shows approved channels/hours/accommodations, contextual reference, escalation, callback/case and optional feedback. | Callback/case appears when real-time support is unavailable; feedback never blocks return/task completion. | BRD-021–BRD-024, BRD-027 |
| IA-20 | Use a consistent recovery pattern for validation, interruption, integration delay/unavailability and duplicate-submission prevention. | Explain what happened, retained data, safe next action and support option; disable/reconcile repeat submit per approved integration behavior. | BRD-005, BRD-026, BRD-029 |

## Missing design dependencies

- Approved design-system tokens, components, typography, palette, spacing scale and responsive breakpoints.
- Existing application screens or patterns to maintain consistency.
- Brand assets, iconography, illustrations and approved content variants.
- Accessibility target standard, supported-device/browser matrix and assistive-technology scope.
- Actual authentication, upload, integration, content-source and support-operation contracts.

