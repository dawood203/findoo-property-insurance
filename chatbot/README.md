# Findoo website FAQ chatbot

Open `website/index.html` and select **Ask Findoo** at the bottom right. The widget runs on direct `file://` pages and normal static hosting without an API key or backend.

## Knowledge base

The active source is `chatbot/findoo_property_insurance_faq.json`, imported from the user's uploaded file. All **46 original FAQs**, metadata, categories and suggested questions are preserved as JSON data.

The earlier `chatbot/findoo_faq.json` remains available for historical prompts, but no longer powers the website widget.

## Experience

- Eight topic categories with an **All topics** option.
- An expandable question browser with every original question.
- Free-text questions with normalized tokens, keyword overlap, synonym aliases and ambiguity fallback.
- Follow-up buttons taken directly from each matched FAQ's `suggested_questions`.
- The exact original answer, its FAQ ID and category; no generated coverage, price or policy terms.
- Educational disclaimer, no-match guidance and explicit limitations for private-data, account-specific or emergency requests.
- Labelled question input, polite conversation log, visible focus, close/Escape and clear-chat controls.
- Up to 30 questions in page memory, with no network calls, cookies, analytics or browser storage. Closing the panel keeps this page-memory conversation; clearing or reloading removes it.

This is a deterministic FAQ knowledge assistant, not a generative LLM or a live insurer support service. Natural-language matching is English keyword/synonym retrieval and can miss ambiguous paraphrases. The supplied educational answers are not independently verified legal/insurance advice, binding terms, real quotes or guarantees. No live handoff occurs.

## Files

- `website/js/faq-data.js`: generated browser snapshot; avoids local-file JSON fetch restrictions.
- `website/js/faq-engine.js`: dataset validation, retrieval, category enumeration and fallback.
- `website/js/chatbot.js`: floating widget, categories, question browser and follow-ups.
- `website/css/chatbot.css`: responsive M3-themed styling using existing website roles.
- `website/scripts/build-faq.cjs`: regenerates the snapshot from the active JSON.
- `website/tests/chatbot.test.cjs`: regression checks.

The separate Angular and CrewAI prompts remain future implementation briefs and are not required for this website integration.

## Update and test

After editing the active source JSON, run with a supported Node.js runtime from the repository root:

```sh
node website/scripts/build-faq.cjs
node website/tests/chatbot.test.cjs
```

Then reload the website. Source and browser snapshot must remain synchronized. Every suggested question must exist in the FAQ dataset; missing links, duplicates and invalid records are rejected.

## Validation evidence

The suite was executed in the available embedded Node runtime. Checks passed for:

- All 46 exact questions returning original answer text.
- Eight categories and all follow-up references.
- Eight natural-language paraphrases.
- No-match, category filtering, emergency/credential/guarantee responses, input bounds and invalid datasets.
- Source/snapshot equality, JS syntax, HTML IDs and anchors.

A DOM simulation passed 46 question buttons, eight generated category options, the six-question claims category, follow-up display/click, reset and Escape.

Browser viewport, zoom, keyboard traversal and screen-reader behaviour remain to be verified in actual browsers. The widget is a modeless region; users may tab back to the page. No complete WCAG conformance or generative-AI capability is claimed. Existing website main.js, base styles and UX gate states were preserved.
