# Findoo Property Insurance website

A local, static course-project website built with HTML5, CSS3 and JavaScript. No build, installation, external fonts, analytics, backend or API keys are required.

## Open the website

Open `website/index.html` in a current browser. Keep `css/`, `js/` and `assets/` alongside it. It also works on an ordinary static web server, with `website/` as the served directory. No publication was performed.

## Files

- `index.html`: the ten requested sections, accessible FAQs, quote-preview dialog and contact form.
- `css/styles.css`: M3 semantic role mapping, typography, spacing, rounded components, focus states, Grid/Flexbox and adaptive layouts.
- `js/main.js`: adaptive navigation, dialog controls, local validation and demo confirmation.
- `assets/findoo-mark.svg`: original Findoo concept mark.
- `assets/home-illustration.svg`: original house illustration; no competitor assets used.
- `qa-report.md`: validation evidence, requirement links and remaining checks.

## Concept interactions

“Get a Quote”, “Preview the concept” and coverage-card actions open an informational dialog. They do not create quotes or request property information. “View how it works” returns to the journey section. Contact validation requires a name, valid-format email and sample message. Phone is optional; supplied values must use 7–15 digits with common formatting characters. Successful validation clears fields and explicitly confirms that nothing was submitted or saved. Use fictional information only.

## Visual decisions

The supplied blue/navy/red/white direction is applied through semantic M3 roles. Exact colour, shape and typography values are proposed for this concept and await approval as Findoo tokens. This uses custom HTML/CSS component patterns, rather than claiming an official Material component package or MUI implementation. Accessibility target: WCAG 2.2 AA; full conformance is not certified.

## Review in a browser

Check widths of 320, 390, 768, 1024 and 1440 CSS pixels; test text zoom and 400% reflow. Tab through navigation, dialog, FAQs and form, verify Escape and focus restoration, and run a screen-reader review. Use the browser network panel to confirm no outgoing form or analytics requests. The project process page and workflow state are unchanged.
