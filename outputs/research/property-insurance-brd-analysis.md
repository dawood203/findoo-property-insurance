# Property Insurance BRD Analysis

**Source reviewed:** `input/brd/property-insurance-brd.md` (v0.1, 14 October 2026)  
**Analysis status:** Research complete — awaiting human review  
**Scope boundary:** Research only. No Define-phase or UI-design work has been performed.

## Evidence convention

- **Documented fact** — stated in the BRD.
- **Assumption** — an analysis interpretation, not a BRD requirement.
- **Open item** — information the BRD says is unknown, provisional, or requires confirmation.

## 1. Business objectives

Documented objectives:

- Make property insurance easier to understand, purchase, manage, and claim.
- Enable policyholders to access and progress a property-insurance claim through an easy, guided, transparent digital journey.
- Explain cover, exclusions, deductibles, and key choices in plain language before purchase.
- Reduce avoidable application effort without concealing underwriting requirements.
- Present verified, eligible policy options comparably.
- Make claim status, next action, owner, and human-support route visible.
- Reduce unnecessary manual entry and support contacts while retaining accessible human help.

Candidate measures are proposed only; their baselines and targets require analytics and stakeholder agreement.

## 2. Business problem statement

**Documented fact:** Customers report that property insurance can feel unaffordable, difficult to apply for, difficult to claim, and poorly supported. They may distrust opaque distribution and commission structures. The stated effects include abandonment, inadequate cover, late or incomplete claims, repeat support contacts, lower trust, churn, and increased acquisition/servicing cost from manual forms and handoffs.

**Open item:** The BRD records a missing sixth problem (P-06), so the problem scope may be incomplete.

## 3. Business stakeholders

| Stakeholder / role | Documented responsibility or interest |
|---|---|
| Product owner / product sponsor | Scope, priorities, outcomes; confirms operating model and segments. |
| Insurance / claims owner | Claim workflow, policy and escalation review. |
| Legal / compliance | Licensing, disclosures, jurisdiction rules; accountable owner to confirm. |
| Privacy / security | Data, consent, claim media, access and retention review. |
| Engineering / technology | Integration and delivery feasibility; interface and fallback design. |
| Customer support / operations | Support channels, SLAs, routing, escalation, case context and staffing. |
| Accessibility owner | Inclusion and validation plan. |
| Analytics | Success-measure baselines and targets. |
| Carrier, broker, or direct-distribution partner | Operating model and verified pricing/underwriting/policy dependencies (identity currently unknown). |

## 4. User groups

All segments are **provisional, not validated personas**:

| User group | Need stated in BRD |
|---|---|
| Residential policy shopper | Understandable protection at a manageable cost. |
| Active claimant | Emergency guidance, evidence capture, clear updates and human support after property damage. |
| Existing policyholder | View details, update property information, renew or obtain help. |
| Support and claims operations user | Concise case history and reliable handoff; internal tooling is outside MVP unless separately approved. |

## 5. Functional requirements

The documented functional requirements are BRD-001 through BRD-024. See the [requirements traceability matrix](requirements-traceability-matrix.md) for the authoritative requirement-level record.

- Quote/application: approved plain-language explanation, save/resume/review, required-data rationale, permitted prefill with correction, accessible validation/recovery, and manual-underwriting routing.
- Policy choice/servicing: verified eligible options, approved comparison information, consequences of choice changes, verified discounts, authenticated policy access, and substantiation limits on comparative claims.
- Claims: discoverable start route, emergency distinction, guided incident/evidence/declarations, save/resume, meaningful confirmation, evidence and communications access, decision/payment/escalation presentation, and consented material-change notifications.
- Customer care: approved channels/hours/accommodations/escalation, authorized contextual support references, callback/case alternative, and non-blocking feedback.

## 6. Non-functional requirements

The documented non-functional requirements are BRD-025 through BRD-031. They cover target-market accessibility/legal compliance; supported-device recovery; security and data lifecycle controls; configurable/approved jurisdiction rules; integration failure and duplicate-submission handling; pre-production validation of automated support; and source/version traceability. See the matrix for detail.

## 7. Business rules

The following are documented guardrails, not new requirements:

| Rule | BRD basis |
|---|---|
| Do not promise a premium, underwriting decision, coverage outcome, claim payment, payment amount, or timeline; these remain subject to approved terms, evidence, decisions and law. | Executive Summary |
| Show only verified eligible options returned by an approved pricing/underwriting source. | FR-07 |
| Display discounts/cost-reduction options only when eligibility and terms are verified. | FR-10 |
| Do not state that a policy is cheapest, best or guaranteed approved unless the claim is legally approved, substantiated and valid for the comparison set. | FR-12 |
| Clearly distinguish emergency services from insurance support. | FR-14 |
| Do not guarantee an amount before a verified claim decision. | FR-19 |
| Prefill only from permitted sources; identify the source, permit corrections and preserve manual entry. | Product principles; FR-04 |
| Disclose only verified price components, fees, discounts and distribution information. | Product principles |
| MVP excludes guarantees, replacement of qualified/emergency roles, unverified automated settlement/AI/fraud decisions, full internal operational tooling, and unapproved markets/channels. | Out of Scope for MVP |

## 8. Existing application constraints

**Documented facts:**

- The intended experience is mobile-first web and/or app, but the launch channel is not fixed.
- MVP is customer-facing residential claims plus a simplified quote/application flow.
- Internal underwriting, adjuster and contact-centre tooling are out of MVP unless separately approved.
- Launch depends on approved wording, verified carrier/partner integration, staffed support, and required compliance reviews.
- The product must not replace emergency services, licensed advice, adjusters or required human review.
- Unapproved jurisdictions, property types, carriers, languages and channels are out of scope.

**Open item:** The BRD describes a proposed product direction, not a current application or technical architecture. No existing-system constraints beyond the integration risks and MVP boundaries are documented.

## 9. User journeys implied by the requirements

| Journey | Documented flow | Key outcome |
|---|---|---|
| Obtain understandable cover | Select need → read overview → complete/correct details → receive verified quote or manual-review route → compare material differences → save, get help or enter approved purchase flow. | Understand choices and proceed, save or ask for help without losing work. |
| Start and progress a claim | Start claim → safety guidance → incident report → submit available evidence → reference and next action → track updates → answer requests/contact support → documented decision when issued. | Submit a complete or clearly incomplete package; identify owner/next action; obtain human help without restarting. |
| Resolve a support issue | Open contextual help → choose channel or callback/case request → receive reference and expected-response information when available → view history and escalation route. | Reach the correct team without repeating unnecessary details. |

## 10. Dependencies and integrations

| Dependency / integration | Documented dependency or uncertainty |
|---|---|
| Carrier/broker/direct model | Model and accountable legal/compliance owner are unknown. |
| Pricing and underwriting source | Supplies verified eligible quotes/options and manual-review routing. |
| Policy system | Likely source for authenticated summary, documents, dates, deductible and servicing data; source of truth is not confirmed. |
| Claims system | Likely source for claim status, information requests, decision and payment status; source of truth is not confirmed. |
| CRM/support system | Needed for contextual support/case history; availability and reliability are uncertain. |
| Approved property-data source | Optional permitted prefill; data may be incomplete or wrong and requires correction/manual entry. |
| Notification channels | Must be consented and retain an in-app record; channels are unknown. |
| Identity/authentication | Required for policy access and claim start, with an alternate verification path where required. |
| Compliance, privacy, security and accessibility approvals | Required before launch. |

## 11. Assumptions

These are analysis assumptions only and must not be implemented as requirements:

- “Property insurance” is the product category; the precise policy types and target geography remain unknown.
- The three journeys named in the BRD are the minimum customer journey set for research; purchase completion is explicitly delegated to an approved purchase flow and is not specified.
- Requirement IDs BRD-001–BRD-031 are traceability identifiers assigned for this analysis; they do not replace the BRD’s FR/NFR labels.
- Confidence is high where the BRD directly states an item, and lower only where dependencies or target-market details remain unresolved.

## 12. Missing information

Documented missing or unconfirmed information:

- B2C, B2B or hybrid model.
- Property segments, launch geography/jurisdiction, insurers and policy types.
- Sixth user problem.
- Launch channels and languages.
- Support SLAs and specific accessibility accommodations.
- Sources of truth for price, policy, claim, decision and payment data.
- Jurisdiction-specific definition of complete claim, decision and escalation route.
- Analytics baselines and success targets.
- Applicable accessibility target standard and supported device/browser set.
- Carrier/partner, interface contracts, fallback/reconciliation and service expectations.
- Staffing, ownership, hours, routing and staff tooling.

## 13. Contradictions

No direct contradiction is documented within the BRD.

Potential implementation tensions requiring resolution (not contradictions):

- The proposed experience is “mobile-first web and/or app,” while launch channels remain unconfirmed.
- The MVP recommends residential claims, while the target-user scope remains open for homeowners, renters, commercial properties, or multiple segments.
- The BRD calls for expected update windows “when known,” but support SLA commitments are not defined.
- The goal includes purchase, yet the stated MVP centers on claims plus a simplified quote/application flow and only references an approved purchase flow.

## 14. Questions requiring stakeholder clarification

1. Is the operating model B2C, B2B or hybrid, and who is the accountable legal/compliance owner?
2. Which property segments, geography/jurisdictions, insurers and policy types launch first?
3. What is the missing sixth customer problem, and does it alter MVP scope or priority?
4. Which web/app channels and languages are committed for launch?
5. What support hours, response commitments, accommodations, routing and escalation commitments can be displayed?
6. Which systems are authoritative for quote/pricing, policy, claim, decision, payment and support data?
7. What qualifies as a complete claim, decision and approved escalation path in every launch jurisdiction?
8. What accessibility standard and supported device/browser matrix apply?
9. Which property-data sources are permitted, and what consent, correction and validation rules govern them?
10. What are the integration contracts, availability expectations, reconciliation process and user-facing fallback states?
11. Are notifications available by which consented channels, and what consent/record-retention rules apply?
12. What success-measure baselines and targets will determine whether the objectives are met?

## 15. UX implications

These implications are derived from documented requirements; they are not UI designs.

- Content must favor clear, approved explanations over persuasive claims, and must keep full policy wording available.
- Quote comparison needs consistent presentation of price, payment frequency, deductible, limits, exclusions, effective-date rules and material disclosures, with consequences explained before a choice changes.
- Long-form application and claim flows need save/resume, interruption recovery, explicit mandatory/optional/later evidence labels, accessible specific error recovery, and no loss of entered work.
- Claims must foreground safety and emergency separation, then continuously expose stage, next action, owner and an update window only when known.
- Human help needs to remain reachable throughout self-service and preserve authorized context so customers do not repeat unnecessary details.
- Trust depends on visible source/approval boundaries: verified eligibility, permitted prefill source, correction controls, status of delayed integrations, and no false guarantees.
- Sensitive information and media require privacy-conscious states, authentication/authorization, consent-aware communications and an in-app communication record.
- Unresolved market, channel, language, SLA and accessibility decisions prevent final content, interaction, and service-design specification.

## 16. Requirements traceability matrix

The complete requirement-by-requirement matrix is saved separately at [requirements-traceability-matrix.md](requirements-traceability-matrix.md). It assigns BRD-001 through BRD-031 to every explicitly listed FR and NFR and records the requested source, type, priority, UX impact, dependency, confidence and open questions.

