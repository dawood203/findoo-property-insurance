# UI Design — Accessibility Review

**Review type:** Specification-level review only. It is not accessibility certification, legal confirmation, screen-reader test evidence or a claim of conformance.

## Blocking limitation

The applicable accessibility standard, supported devices/browsers, component library, typography, palette and rendered screens are not provided. Formal conformance assessment is therefore **blocked** pending those inputs. (BRD-025, BRD-026.)

| Review area | Specification evidence | Status | Required follow-up |
|---|---|---|---|
| Structure and headings | UI specification requires task title/purpose/content/action hierarchy. | Proposed only | Validate rendered semantic heading structure. |
| Labels and errors | Form contract requires associated labels, help and specific accessible errors. | Proposed only | Test with target assistive technologies after standard is known. |
| Keyboard/focus | Responsive/state specification defines logical focus and no trap. | Proposed only | Test keyboard behavior in implemented screens. |
| Colour/contrast | Semantic roles specified; no token values exist. | Blocked | Supply palette/tokens and test contrast against confirmed standard. |
| Responsive/reflow | Stacking/reflow behavior specified; no breakpoints/device matrix exist. | Blocked | Supply supported-device matrix and test rendered layouts. |
| Media/upload | Evidence upload states specified; no media/file rules or implementation. | Blocked | Confirm file types, size limits, alternatives and error messages. |
| Emergency/support | Emergency distinction and human-support routes are structurally represented. | Proposed only | Validate approved wording, localized emergency information and support accommodations. |

## Accessibility dependencies

Accessibility owner, target standard, supported assistive technologies, device/browser matrix, brand/design tokens, content/localization and rendered prototypes are required before formal validation.

