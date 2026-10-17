# Information Architecture — Content and Navigation Model

**Status:** Proposed structural model derived from approved Define/Research artifacts. It is not a UI design, operational workflow approval or content approval.

## Content and functionality structure

```text
Property insurance experience
├── Explore and quote
│   ├── Need / protection overview
│   ├── Coverage terms and full wording
│   ├── Application (save, resume, review)
│   ├── Manual-underwriting route
│   └── Verified option comparison and selection handoff
├── Policy hub (authenticated)
│   ├── Policy summary, dates and deductible
│   ├── Documents
│   ├── Approved servicing actions
│   └── Contextual help
├── Claims (authenticated / approved alternate verification)
│   ├── Start claim and emergency distinction
│   ├── Incident report and declarations
│   ├── Evidence capture, upload and requests
│   ├── Submission confirmation
│   ├── Claim status, communications and next action
│   ├── Decision / payment status when available
│   └── Appeal or escalation route
└── Customer care
    ├── Support channels, hours and accommodations
    ├── Context-aware help
    ├── Callback or case submission
    ├── Interaction history
    └── Optional service feedback
```

## Proposed navigation hierarchy

| Level | Node | Purpose | Traceability |
|---|---|---|---|
| Primary | Explore and quote | Understand cover, supply required information, compare verified options. | BRD-001–BRD-010 |
| Primary | Policy hub | Access authenticated policy details, documents and approved servicing. | BRD-011, BRD-027 |
| Primary | Start a claim | Provide discoverable claim entry and safety guidance. | BRD-013–BRD-016 |
| Primary | Claim status | Track case, respond to requests, view communications/decision/escalation. | BRD-017–BRD-020 |
| Primary | Help and support | Reach support, escalation, callback/case and interaction history. | BRD-021–BRD-024 |
| Cross-cutting | Full wording, disclosure and source/version context | Make approved information available at material decision points. | BRD-001, BRD-008, BRD-012, BRD-031 |
| Cross-cutting | System/recovery states | Make authentication, integration delay, interruption and error recovery visible. | BRD-005, BRD-026–BRD-029 |

## Discoverability rules derived from the BRD

- “Start a claim” must be discoverable for authenticated policyholders, with an approved alternate verification route where required. (BRD-013.)
- Emergency services and insurance support must be distinguished before claim submission. (BRD-014.)
- Support and escalation must remain reachable from relevant customer tasks. (BRD-021–BRD-023.)
- Full policy wording, material exclusions and verified disclosures must be available at relevant coverage/choice points. (BRD-001, BRD-008.)

