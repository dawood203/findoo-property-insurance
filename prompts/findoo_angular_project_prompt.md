# Copy-ready Prompt: Findoo Angular + FastAPI FAQ Assistant

Use this prompt after creating and verifying the Findoo notebook. It defines a separate application build and preserves the existing static website and UX workflow.

```text
PROJECT: Findoo Property Insurance
ROLE: Full-stack developer, accessibility specialist and QA engineer.

Build a runnable, beginner-friendly Angular + FastAPI FAQ assistant from the Findoo notebook and source FAQ dataset. This is a conceptual AI for Designers course application, not an insurer or live support service.

READ FIRST

- AGENTS.md and existing orchestration/approval instructions
- chatbot/findoo_faq_assistant.ipynb
- chatbot/findoo_faq.json
- chatbot/README-notebook.md and recorded notebook verification results
- input/brd/property-insurance-brd.md
- skills/material-design-3/SKILL.md
- skills/ui-specification.md and skills/accessibility-review.md
- website/index.html, website/css/styles.css and presentation/findoo-project-process.html

Do not assume the notebook exists or is tested. Verify prerequisites. If unavailable, report precisely what must be completed before porting its logic; do not invent a tested notebook or claim this phase succeeded.

PROJECT BOUNDARIES

Use the selected existing repository root; no hardcoded usernames, home directories or drive letters. Create a new faq-assistant/ subdirectory. Do not overwrite the static website, FAQ source, notebook, agents, skills, outputs, process HTML or state. Do not change gate approvals. The four FAQ agent roles are separate from the seven UX phase agents.

TARGET STRUCTURE

faq-assistant/
  frontend/
    src/app/
      app.component.ts
      app.component.html
      app.component.scss
      chat.models.ts
      chat.service.ts
      chat.service.spec.ts
      app.component.spec.ts
    src/environments/
      environment.ts
      environment.production.ts
    src/index.html
    src/main.ts
    src/styles.scss
    package.json
    package-lock.json
    angular.json
    tsconfig.json
    .nvmrc
  backend/
    app/
      __init__.py
      main.py
      config.py
      schemas.py
      faq_data.py
      tools.py
      workflow.py
      service.py
      data/faq_dataset.json
    tests/
    requirements.txt
  .env.example
  .gitignore
  README.md
  package-notes.md

This tree is a deliverable contract, not proof that files already exist.

COMPLETION CONTRACT

- Backend starts offline without a key or external network calls.
- Frontend builds and starts with the local Angular CLI.
- A browser request reaches the real local backend and receives a grounded answer.
- Backend/frontend tests execute successfully or precise external blockers are reported.
- Optional live CrewAI is disabled by default and never run during ordinary verification.
- No frontend secret, raw diagnostic rationale, or fake support-handoff claim.
- Do not claim the website is deployed or tested unless evidence exists.

1. ENVIRONMENT AND DEPENDENCIES

Detect OS, Python, Node and npm. Select supported versions compatible with the chosen Angular, CrewAI, FastAPI and Pydantic releases using current official compatibility documentation. Do not blindly copy old version numbers. Record tested versions; write .nvmrc for the selected Node version and use an aligned local Angular CLI. Never require a global CLI, globally install Python packages, or use --force/--legacy-peer-deps to conceal incompatibilities.

Create backend/.venv. Install dependencies there, pin/bound compatible Python versions, and commit an npm lockfile. If tools, network or permissions are missing, report exact failures and remediation; do not invent successful build/test results.

2. DATA AND SCHEMAS

Copy chatbot/findoo_faq.json to backend/app/data/faq_dataset.json; verify byte-for-byte equality and hashes. Validate at startup. Never fetch FAQ business facts externally or load the full dataset in the frontend.

Preserve this actual root structure:
  schema_version, project, language, disclaimer,
  welcome_message, fallback_message, faqs

FAQ entries contain:
  id, category, question, keywords, answer, source, requirement_references

Use strict Pydantic FAQEntry/FAQDataset models, extra='forbid', nonempty required fields, unique IDs and valid BRD-reference syntax. Preserve supplied metadata and answer text. Fail safely on missing/malformed data. Relative source paths are provenance; do not invent public URLs for them.

Define typed models:
  ChatRequest, FAQEntry, FAQDataset, GuardrailOutput, LookupOutput,
  ClassificationOutput, RetrievalOutput, DraftOutput, DecisionOutput,
  FinalOutput and a separate internal diagnostic model.

ChatRequest:
  message: bounded nonempty string
  session_id: optional bounded non-sensitive identifier

Public API response, with exactly these fields:
  {
    "final_response": "string",
    "category": "string",
    "confidence": "high | medium | low | none",
    "review_needed": false,
    "handoff_status": "not_available_in_demo",
    "lead_capture_requested": false,
    "matched_faq_id": null
  }

Use literal/enumerated values, not unrestricted strings for fixed states. Never return internal_note, rationale, prompts, stack traces, raw tool payloads or credentials. review_needed describes a limitation; it does not mean a ticket or handoff happened.

3. BACKEND CONFIGURATION

Create config.py and a safe .env.example:
  OPENAI_API_KEY=
  MODEL_NAME=
  RUN_LIVE_CREWAI=false
  ALLOWED_ORIGINS=http://localhost:4200

Load configuration from a known backend-local .env location for local work; document that location clearly. A root example may be copied to backend/.env. Do not create or overwrite a real credential-bearing file. Missing keys/model must not prevent offline startup. Live mode requires explicit opt-in, configured compatible model and server-side credentials. Do not log their values.

4. DETERMINISTIC FAQ TOOLS

Port tested notebook logic into maintainable modules; do not execute the notebook in production.

faq_lookup(message, category=None): validated in-memory FAQ data only; transparent token/keyword matching, thresholds, ambiguity handling and honest no-match. No RAG, embeddings, web search or external business source.

guardrail_check(message): detect credentials, prompt injection, other-customer data and unsupported guarantees/advice. Recognize emergencies. Avoid blanket refusal of ordinary coverage, premium, privacy or claims questions that have FAQ answers.

escalation_decision(...): flag uncertain/account-specific/personalized requests for external review, always keep lead_capture_requested false, and never imply a Findoo team was notified. No contact collection or claim submission.

5. FOUR-ROLE WORKFLOW

Default offline path:
  Classification Agent → Knowledge Agent → Drafting Agent → Escalation Agent
  → deterministic finalizer

Run local Python equivalents sequentially, validating every handoff. No model instantiation or network request on this path. Label it a deterministic role simulation rather than actual LLM execution.

Optional live function:
- Exactly four named CrewAI agents and four sequential tasks.
- Agent, Task, Crew, Process.sequential and output_pydantic handoffs.
- Tools restricted to validated local lookup and deterministic decisions.
- No delegation, outside research, unsupported facts or autonomous external actions.
- Only invoked when RUN_LIVE_CREWAI=true with valid configuration.

Finalizer is authoritative in both modes. Verify matched ID/content against FAQ, use source answer text for facts, and reject ungrounded LLM additions. Credentials/private-data requests receive a concise refusal. No-match receives the honest limitation/concept disclaimer. Emergency messages direct to appropriate local emergency services without guessing phone numbers. Personalized coverage/claim/payment advice or guarantees must not be invented.

An actual insurer/licensed professional may be identified as an external next step; never promise that the nonexistent demo Findoo support team will respond.

6. FASTAPI ENDPOINTS

GET /health → {"status":"ok"}
POST /api/chat → validated public FinalOutput only

Use explicit local CORS origins and configurable production origins; no wildcard origin. Bound input size and provide safe validation errors without echoing raw input or exception details. No query text or personal data in logs. Unexpected errors return a generic safe response. No database, persistent chat logs or browser credential storage. Optional session state must be bounded and in memory only; default to stateless.

7. ANGULAR FRONTEND

Use standalone components, TypeScript strict mode, HttpClient and SCSS. Read and apply the existing material-design-3 skill. Use accessible M3 patterns and the user's blue/navy/red/white concept direction. Existing website token values are proposals, not approved production tokens; preserve that distinction. Angular Material component use alone does not establish M3 or WCAG conformance. Verify supported theming APIs for installed versions.

Title: Findoo FAQ Assistant
Subtitle: Explore the property insurance concept. No real quotes, policies or claims processing.

Include:
- Visible concept disclaimer and “Do not share personal, policy, payment or claim details.”
- Suggested questions drawn from FAQ: What is Findoo? Can I get a real quote? What coverage categories are shown? How would claims work?
- Labelled question input, Send button and in-memory chat history.
- Distinct user/assistant text bubbles; render plain text, never unsanitized innerHTML.
- Accessible loading and error status; prevent duplicate sends while loading.
- Clear/reset conversation control that clears page-memory history.
- Keyboard-operable controls, visible focus, readable contrast and responsive layout.
- On review_needed, explain that the demo cannot resolve the request and no handoff has been made.
- No lead form, actual support ticket, guarantee, quote generation or silent data collection.

Do not load FAQ JSON, execute CrewAI, call an LLM provider, expose keys or show internal diagnostics in the frontend. Do not persist conversation or identifiers in localStorage. A session identifier is optional; if needed, create an opaque in-memory random value.

ChatService must POST typed message/session data to the configured backend /api/chat. Use http://localhost:8000 in development with matching allowed frontend origin. Configure production through a documented validated deployment setting; do not ship a fake working hostname or silently fall back to a public service. Keep live chat deployment outside this local-build authorization.

8. TESTS

Backend:
- Real schema validation, duplicate IDs and missing dataset.
- Exact questions/paraphrases and intentional no-match/ambiguous matches.
- Ordinary coverage FAQ succeeds without unsupported specificity.
- Guarantees and personalized claim/coverage requests produce safe limitations.
- Credentials, other-customer data and injection do not leak information.
- Emergency request gives appropriate external direction; no invented contact number.
- No lead capture and no fake handoff for any response.
- Public API contains exactly the seven response fields, with no internal diagnostics.
- Health, grounded offline chat, empty/oversized/malformed requests and safe unexpected errors.
- Offline network calls are denied/mocked; optional live mode cannot bypass finalizer.

Frontend:
- Typed POST through HttpClient with the configured URL.
- Disabled send/loading status while awaiting a response.
- Safe final_response rendering and no innerHTML injection.
- Review-needed message never claims a completed support handoff.
- Network failures are understandable and allow retry.
- Keyboard submission, conversation clear and responsive controls.

Integration:
Run backend and frontend locally, issue a real browser request, verify CORS and observe the displayed grounded answer. Confirm no key or diagnostic content reaches browser bundles, network responses or logs. Record actual evidence; mocks are not proof of a running end-to-end application.

9. BUILD AND LOCAL VERIFICATION

Document commands matching the generated scripts and actual runtime. Typical local commands after environment setup:

Backend, from backend/:
  .venv/bin/python -m pytest tests
  .venv/bin/python -m uvicorn app.main:app --host 127.0.0.1 --port 8000
Windows equivalents must use .venv\Scripts\python.exe.

Frontend, from frontend/:
  npm ci
  npm run build
  npm test -- --watch=false
  npm start

Use the actual test runner's supported flags rather than copying incompatible commands. Verify GET http://localhost:8000/health and POST /api/chat with {"message":"What is Findoo Property Insurance?"}. Then verify the browser path from http://localhost:4200. Start/stop only owned test processes. Diagnose failures and rerun appropriate checks; do not hide external prerequisites.

10. DOCUMENTATION AND HANDOFF

Merge safe .gitignore entries for .env, local venvs, caches, node_modules, build outputs and notebook checkpoints; retain .env.example. Never commit keys.

README must explain architecture, the four FAQ roles versus seven UX phase agents, offline/live distinction, source dataset provenance, verified OS-specific setup/run/test commands, CORS/API configuration and concept limitations. package-notes.md must list tested package/runtime versions and the reason for local environments/offline mode.

Do not publish to Render/Vercel or connect the existing website automatically. Deployment or embedding may be documented as future work but requires a separate user request. If later integrating the static website, its current connect-src 'none' CSP must be deliberately reviewed for the actual API origin rather than disabled broadly.

FINAL REPORT

Report created files, local URLs actually verified, test/build results, FAQ integrity hash, offline network verification, optional live status, unmet prerequisites and exact rerun commands. Confirm existing website/process HTML and authoritative UX workflow state were preserved. Never claim real insurance, live support, deployment or gate approval.
```
