# Information Architecture — Error and Exception Flows

| Exception | Proposed recovery structure | Traceability | Unresolved decision |
|---|---|---|---|
| Invalid/missing input | Specific accessible error, preserve valid entered data, explain correction and return to relevant field/state. | BRD-005 | Accessibility standard and field-level rules. |
| Interrupted application/claim | Persist progress on supported recovery paths; offer resume or safe exit. | BRD-002, BRD-016, BRD-026 | Recovery duration and cross-device behavior. |
| Manual underwriting required | Explain review route without unsupported instant decision; preserve/support next step. | BRD-006 | Routing, customer communication and timing. |
| Property prefill incomplete/wrong | Identify source, permit correction/manual entry and validate before underwriting. | BRD-004 | Sources, consent and validation rules. |
| Authentication/verification unavailable | Offer only approved alternate verification or support route. | BRD-013, BRD-027 | Approved verification method. |
| Emergency condition | Clearly route to emergency services separately from insurance support. | BRD-014 | Jurisdiction-specific guidance/contact details. |
| Claim evidence unavailable now | Mark as requested later where approved; preserve incomplete state. | BRD-016 | Complete-claim rule by jurisdiction. |
| Integration delayed/unavailable | Surface status, prevent duplicate submission, retain/reconcile safe state and provide support route. | BRD-029 | Interface contracts, service expectations and reconciliation. |
| Payment/decision unavailable | Show payment status only when available; do not guarantee amount/timing; preserve escalation route. | BRD-019 | Source/system availability and escalation process. |
| Real-time support unavailable | Offer callback or case submission and show approved response information when available. | BRD-021, BRD-023 | Staffing, hours and SLA. |

