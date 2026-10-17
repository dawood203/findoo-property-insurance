# Findoo Website — Implementation and QA

**Date:** 17 October 2026  
**Scope:** Separately authorized customer-facing course concept in `website/`. No workflow gate execution or status change.

## Inputs reviewed

The existing process HTML, BRD v0.1, orchestration workflow, and supplied `skills/material-design-3/SKILL.md` informed the implementation. The Tata AIG reference URL was attempted but could not be retrieved. The user-provided colour direction was used for an original layout and original SVG assets; competitor wording, branding and proprietary layouts were not reproduced.

## Coverage and traceability

| Website area | Source | Implementation |
|---|---|---|
| Header/hero/about/why | Explicit website brief; BRD §§1, 3, 5 | Ten requested sections with clear concept labels and working navigation. |
| How it works / coverage | Explicit website brief; BRD-001, BRD-007–BRD-012 | Conceptual categories and an educational dialog; no unverified quote, policy or coverage claims. |
| Policy/claims/support benefit descriptions | BRD-011, BRD-013–BRD-023 | Clearly stated proposed capabilities; no live operational service is represented. |
| Testimonials | Explicit website brief | Three fictional examples, labelled at section and individual level; no ratings or verified-review claims. |
| Contact form | Explicit website brief; BRD-005, BRD-027 | Labelled controls, validation, associated error messages, local demo confirmation, no data transmission/storage. |
| Accessibility/responsiveness | BRD-025, BRD-026; supplied M3/WCAG direction | Keyboard controls, focus visibility, skip link, native details/dialog semantics, meaningful structure and adaptive CSS. |
| Privacy/concept disclaimer | Explicit website brief; BRD §1, §10 | No real insurance availability, purchase, approval, payment or timing promises. |

This website illustrates a subset of the product direction. It does not implement or satisfy all 31 BRD requirements, authentication, pricing, policy servicing or real claims operations.

## Checks performed

| Check | Result | Method / scope |
|---|---|---|
| JavaScript syntax | PASS | Compiled `main.js` with Node VM. |
| IDs and navigation | PASS | 39 unique HTML IDs; all fragment-link targets exist. |
| Local assets | PASS | CSS, JS and SVG references resolve on disk. |
| Contact labels | PASS | All four controls have explicit matching label targets; help/errors linked with `aria-describedby`. |
| No backend/storage calls | PASS, source inspection | No fetch, XHR, beacon, cookies or browser storage calls; CSP forbids connections and form submission. |
| Mobile navigation | PASS, simulation | Toggle, Escape close and desktop resize exercised against simulated DOM elements. |
| Quote dialog | PASS, simulation | Open, selected category, close and trigger focus behaviour exercised. Native browser focus containment requires browser verification. |
| Form validation | PASS, simulation | Prevented submission; missing required values, malformed email and invalid optional phone rejected; valid dummy data produces confirmation and resets fields. |
| Responsive implementation | Reviewed in source | Desktop layout, tablet two-column grids, narrow single-column sections/form, wrapping buttons, scalable art and content-driven navigation collapse. No rendered viewport test completed. |
| Motion preference | Present | Smooth scrolling and transitions disabled under reduced-motion preference. |

## Contrast calculations

WCAG relative-luminance calculations on selected foreground/background pairs:

| Pair | Ratio |
|---|---:|
| Primary blue #1559b7 / white | 6.68:1 |
| Navy #102b50 / white | 14.16:1 |
| Secondary text #4d6077 / white | 6.45:1 |
| Red #b72d3b / white | 6.08:1 |
| Error text #a62030 / #fff0f1 | 6.61:1 |
| Light text #d0dbeb / navy | 10.12:1 |
| Footer text #c2cfe0 / #0b203b | 10.35:1 |
| Secondary text #4d6077 / #f5f7fb | 6.02:1 |
| Field outline #6b7b90 / white | 4.32:1 |

Text pairs exceed 4.5:1; the field outline exceeds the 3:1 non-text target. This sample does not replace a full rendered accessibility audit.

## Remaining review

- Browser automation libraries were unavailable in the available test runtime. Keyboard behaviour, native dialog focus trapping, screen-reader announcements, text zoom, content clipping and viewport reflow require testing in current browsers.
- Verify at 320/390/768/1024/1440 CSS pixels and at 200% text zoom/400% reflow. Responsive checks above are structural, not visual certification.
- Proposed theme values and content need human design review; real insurer wording and operating services remain outside this course demo.
- Phone validation checks format only, not a country's telephone rules. No actual customer data should be used.
- Full WCAG 2.2 AA conformance and M3 component conformance are not asserted.

## Preservation

Before and after implementation, SHA-256 checksums matched:

- `state/workflow-state.json`: `7b001382c7eac3a8e6b7989a4829d96254a11b8b5f3a5f22df4912d5e03b6b58`
- `presentation/findoo-project-process.html`: `6edbdbbcede44929f7faaff9fb066b16edf1baa1bfa2ff821fcf564cf53a5573`
