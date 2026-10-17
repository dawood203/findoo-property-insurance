# Findoo Property Insurance

A conceptual property insurance website and UX case study created for an AI for Designers course. Findoo is not a licensed insurer or an active insurance product.

## Explore locally

- Open `website/index.html` for the customer-facing concept and the floating FAQ assistant.
- Open `presentation/findoo-project-process.html` for the seven-phase UX process story.
- Read `chatbot/README.md` for the 46-FAQ knowledge base and update instructions.

Keep the directory structure intact. The website works as static HTML, CSS and JavaScript; no backend or API key is required. Form and chat interactions stay in page memory.

## Deploy on Vercel

Import this GitHub repository. Select **Other** as the framework, use the repository root as Root Directory, skip the build command, and use `.` as the Output Directory. The root `vercel.json` redirects `/` to `/website/` so relative assets resolve correctly.

- Website: `/website/`
- Case study: `/presentation/findoo-project-process.html`

The static output includes repository documents intended for this educational project. Do not add secrets, real customer information or private artifacts to deployed folders.

## Update FAQ answers

Edit `chatbot/findoo_property_insurance_faq.json`, then run with Node.js:

```sh
node website/scripts/build-faq.cjs
node website/tests/chatbot.test.cjs
```

Commit the regenerated `website/js/faq-data.js` alongside the source changes. No generative model or paid service is used by the website chatbot.

## Project structure

- `website/`: responsive customer-facing concept, assets and chatbot.
- `presentation/`: standalone process story and website CTA.
- `chatbot/`: original FAQ datasets and documentation.
- `agents/`, `skills/`, `gates/`, `orchestration/`: UX workflow definitions and controller.
- `input/`, `inputs/`, `outputs/`, `state/`: sources, research/design artifacts and approval history.
- `prompts/`: optional future notebook and Angular/FastAPI implementation briefs.

The repository preserves existing UX approval records. Publication does not imply that UX gates passed, real usability studies occurred, accessibility is certified, or insurance is available.
