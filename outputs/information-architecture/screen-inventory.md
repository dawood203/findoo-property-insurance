# Information Architecture — Conceptual Screen Inventory

**Status:** Proposed information nodes, not visual screens or approved labels. Names are working identifiers for traceability.

| ID | Conceptual screen/node | Primary purpose | Entry | Exit / next state |
|---|---|---|---|---|
| IA-01 | Explore landing / need selection | Direct users to cover explanation or application. | Direct, campaign or primary nav. | IA-02 or IA-03. |
| IA-02 | Cover explanation and wording | Present approved plain-language content, material exclusions and full wording access. | IA-01, IA-06. | IA-03, help, exit. |
| IA-03 | Application workspace | Collect approved data, explain sensitive requests, validate and save/resume. | IA-01, resume link. | IA-04, IA-05, save/exit, support. |
| IA-04 | Application review / manual route | Review submission or explain manual-underwriting route without instant-decision claim. | IA-03. | IA-05, saved state, support. |
| IA-05 | Verified option comparison | Compare eligible options, disclosures and qualified cost information. | IA-04. | IA-06, approved purchase handoff, help. |
| IA-06 | Option detail / choice consequence | Explain impacts before optional cover, deductible or limit change. | IA-05. | IA-05, approved purchase handoff. |
| IA-07 | Authentication / alternate verification | Authenticate policy access or approved claim-start verification. | Policy/claim entry. | IA-08, IA-10, recovery/support. |
| IA-08 | Policy hub | View summary, documents, dates, deductible and approved actions. | IA-07. | IA-09, IA-16, help. |
| IA-09 | Policy document / servicing detail | View document or execute approved servicing action. | IA-08. | IA-08, support. |
| IA-10 | Claim start and emergency guidance | Distinguish emergency services and route to incident reporting. | Primary claim entry, IA-08. | IA-11, emergency exit, support. |
| IA-11 | Incident and declaration workspace | Capture incident/safety details and declarations. | IA-10, saved claim. | IA-12, save/exit, support. |
| IA-12 | Evidence workspace | Capture/upload evidence and label mandatory/optional/later requested items. | IA-11, information request. | IA-13, IA-15, save/exit. |
| IA-13 | Claim submission confirmation | Present reference, stage, owner, next action and update window when known. | IA-11/IA-12 submission. | IA-14, support. |
| IA-14 | Claim detail / status timeline | Show status, communication history, next action and material update record. | IA-13, notifications, policy hub. | IA-12, IA-15, IA-16. |
| IA-15 | Information request response | Respond to claim request and upload evidence. | IA-14 / notification. | IA-14, recovery/support. |
| IA-16 | Decision, payment and escalation | Show approved explanation, payment status when available, appeal/escalation. | IA-14 when decision issued. | IA-17, help, claim timeline. |
| IA-17 | Help and support centre | Show approved channels, hours, accommodations, escalation and contextual reference. | Global/task contextual link. | IA-18, IA-19, task return. |
| IA-18 | Callback / case submission | Submit callback or case when real-time support unavailable. | IA-17. | IA-19 confirmation/history. |
| IA-19 | Service / interaction history | View authorized support and claim interaction record; collect optional feedback. | IA-17, IA-18, IA-14. | Return, IA-17. |
| IA-20 | System recovery state | Communicate validation, interruption, integration-unavailable or duplicate-submission state. | Any affected node. | Retry, saved state, support, safe exit. |

