# BRD: Transparent Property Insurance & Easy Claims

**Status:** Draft for stakeholder review  
**Version:** 0.1  
**Date:** 14 October 2026  
**Product scope:** Digital property-insurance experience

## 1. Executive Summary

This product will make property insurance easier to understand, purchase, manage, and claim. Its primary goal is a simple, transparent claims journey that helps policyholders start, track, and progress a claim during a stressful event.

The experience may reduce friction and make eligible choices clearer, but it must not promise a particular premium, underwriting decision, coverage outcome, claim payment, payment amount, or timeline. Those outcomes remain subject to approved policy terms, evidence, underwriting, insurer/claims decisions, and applicable law.

**Source basis:** the user-supplied problem statement; the supplied Fintech Smart Expense Tracker BRD (structure reference); and supplied property-insurance background notes. The background notes describe possible industry issues; they are not validation of a particular market, user, carrier, or legal requirement.

## 2. Business Problem

Customers report that property insurance is unaffordable, difficult to apply for, hard to claim, and poorly supported. They may also distrust a distribution model with many intermediaries and unclear commissions. These issues can cause application abandonment, inadequate cover, late/incomplete claims, repeated support contact, reduced trust, and churn. For an insurer or distribution partner, manual forms and handoffs can increase acquisition and servicing costs.

| ID | Problem | Impact | Evidence status |
|---|---|---|---|
| P-01 | Customers perceive premiums as unaffordable. | Abandonment, underinsurance, lapse, or price shopping. | User-supplied statement |
| P-02 | Claims involve too many steps and payment progress/outcome is unclear. | Stress, delay, distrust, and repeat contacts. | User-supplied statement |
| P-03 | Customer-care support is not adequate or timely. | Unresolved problems and lower confidence. | User-supplied statement |
| P-04 | Insurance applications are complicated and request difficult property details. | Form abandonment, errors, and slower underwriting. | User statement and background notes |
| P-05 | Customers perceive too many mediators and high commissions. | Low trust in pricing and distribution. | User statement; commercial validation required |
| P-06 | A sixth problem was not supplied. | Scope may be incomplete. | Open question |

## 3. Product Goal and Objectives

### Primary goal

Enable a policyholder to access and progress a property-insurance claim through an easy, guided, and transparent digital journey.

### Supporting objectives

- Explain cover, exclusions, deductible, and key choices in plain language before purchase.
- Reduce avoidable application effort without hiding underwriting requirements.
- Show verified, eligible policy options in a comparable format.
- Make claim status, next action, owner, and human support route visible.
- Reduce unnecessary manual data entry and support contacts while retaining accessible human help.

### Candidate measures

Targets and baselines require product analytics and stakeholder agreement.

| Outcome | Candidate measure |
|---|---|
| Easier claims | Claim-start completion rate; time to submit a complete claim; claims with a visible next step |
| Transparent progress | Claim-status comprehension; update-delivery rate; contacts per active claim |
| Simpler application | Quote/application completion rate; median completion time; field-level abandonment |
| Affordability support | Eligible users shown alternatives/discounts; conversion by approved option |
| Better support | First-response time; resolution rate; post-contact satisfaction; successful human handoff |
| Sustainable operations | Manual-review and rework rate; monitored accuracy/fairness of any automation |

## 4. Target Users

These are provisional segments, not validated personas.

1. **Residential policy shopper:** homeowner or renter seeking understandable protection at a manageable cost.
2. **Active claimant:** policyholder reporting property damage who needs emergency guidance, document capture, clear updates, and human support.
3. **Existing policyholder:** customer viewing policy details, updating property information, renewing, or getting help.
4. **Support and claims operations user:** authorized staff needing a concise case history and reliable handoff. Internal tooling is out of MVP unless separately approved.

## 5. Product Principles

- **Plain before persuasive:** present approved coverage explanations and material exclusions clearly.
- **Progress in a crisis:** every claim status explains the current stage, next action, owner, and expected update window when known.
- **Digital with a human escape hatch:** self-service cannot prevent customers from reaching support.
- **Ask only what is needed:** prefill only from permitted sources; show the source, allow corrections, and preserve manual entry.
- **Transparent, not misleading:** disclose only verified price components, fees, discounts, and distribution information.
- **Secure by design:** collect the minimum data necessary and protect personal information and claim media.

## 6. Proposed Solution

Create a mobile-first web and/or app experience with five connected areas:

1. **Explore and quote** — plain-language policy overview, required information, save/resume, and approved quote routing.
2. **Coverage comparison** — consistent display of verified premium, deductible, limits, material exclusions, payment options, and applicable disclosures.
3. **Policy hub** — authenticated policy summary, documents, renewal/update prompts, and approved servicing actions.
4. **Guided claims** — emergency guidance, incident capture, evidence upload, status tracking, requests for information, documented decisions, and escalation.
5. **Customer care** — contextual help, case-aware messaging or callback, escalation, and service history.

### MVP recommendation

Start with a customer-facing residential claims journey plus a simplified quote/application flow. Launch only with approved policy wording, verified carrier/partner integration, a staffed support model, and required compliance reviews. Defer advanced property-data enrichment, automated damage assessment, proactive risk alerts, and internal operational tooling until their data, fairness, security, and regulatory conditions are validated.

## 7. Functional Requirements

### 7.1 Quote and application

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Explain intended protection, key terms, deductible, and material exclusions using approved plain-language content with full policy wording available. | Must |
| FR-02 | Let customers start, save, resume, and review an application. | Must |
| FR-03 | Ask only information required by the approved underwriting workflow and explain why unfamiliar or sensitive data is needed. | Must |
| FR-04 | Where permitted, prefill property data from an approved source, identify the source, and allow customer correction. | Should |
| FR-05 | Validate inputs and provide specific, accessible error recovery. | Must |
| FR-06 | Route manual-underwriting cases without presenting an unsupported instant decision. | Must |

### 7.2 Policy choice and servicing

| ID | Requirement | Priority |
|---|---|---|
| FR-07 | Show only verified, eligible quote options returned by the approved pricing/underwriting source. | Must |
| FR-08 | Display approved premium, payment frequency, deductible, limits, exclusions, effective-date rules, and material fees/distribution disclosures for each option. | Must |
| FR-09 | Explain the consequence of changing deductible, limit, or optional cover before selection. | Must |
| FR-10 | Show applicable discounts or cost-reduction options only when eligibility and terms are verified. | Should |
| FR-11 | Provide authenticated access to policy summary, documents, coverage dates, deductible, contact channels, and approved servicing actions. | Must |
| FR-12 | Never claim that a policy is cheapest, best, or guaranteed to be approved unless the claim is legally approved, substantiated, and valid for the comparison set. | Must |

### 7.3 Claims

| ID | Requirement | Priority |
|---|---|---|
| FR-13 | Provide a discoverable “Start a claim” path for authenticated policyholders and an approved alternate verification path where required. | Must |
| FR-14 | Present emergency guidance and distinguish emergency services from insurance support before submission. | Must |
| FR-15 | Guide claimants through incident details, safety-relevant information, approved evidence capture, and required declarations. | Must |
| FR-16 | Support save/resume and identify evidence as mandatory, optional, or requested later. | Must |
| FR-17 | Confirm a submission with a claim reference, current stage, next action, responsible party, and expected update window when known. | Must |
| FR-18 | Enable evidence upload, responses to information requests, and access to time-stamped claim communications. | Must |
| FR-19 | Display an approved decision explanation, payment status when available, and approved appeal/escalation route; do not guarantee an amount before a verified decision. | Must |
| FR-20 | Notify customers of material status changes through consented channels and retain an in-app record. | Should |

### 7.4 Customer care

| ID | Requirement | Priority |
|---|---|---|
| FR-21 | Provide approved support channels, service hours, accessibility accommodations, and a clear escalation route. | Must |
| FR-22 | Give customers a context-aware reference or summary for quote/claim support where authorized. | Should |
| FR-23 | Offer callback or case submission when real-time support is unavailable. | Must |
| FR-24 | Capture service feedback without blocking task completion. | Could |

## 8. Key User Journeys and Acceptance Outcomes

### A. Obtain understandable cover

The customer selects a need, reads a plain-language overview, completes/corrects required details, receives a verified quote or manual-review route, compares material differences, and saves, gets help, or proceeds through the approved purchase flow.

**Acceptance outcome:** A customer can understand the material difference between eligible options and proceed, save, or ask for help without losing work.

### B. Start and progress a claim

The policyholder selects “Start a claim,” receives safety guidance, reports the incident, submits available evidence, receives a reference number, sees the next action, tracks updates, answers requests, contacts support, and sees a documented decision when issued.

**Acceptance outcome:** A claimant can submit a complete or clearly incomplete package, identify the owner and next action, and obtain human help without restarting.

### C. Resolve a support issue

The customer opens contextual help, selects a channel or callback/case request, receives a reference and expected response information when available, and can see the interaction history and escalation route.

**Acceptance outcome:** A customer knows how to reach the correct team and need not repeat unnecessary details.

## 9. Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-01 | Meet applicable accessibility and legal requirements for the approved target market; the exact target standard must be confirmed. |
| NFR-02 | Support approved mobile and desktop devices and preserve progress on supported interruption/recovery paths. |
| NFR-03 | Protect personal, policy, payment, and claim-media data through approved authentication, authorization, encryption, logging, retention, and deletion controls. |
| NFR-04 | Make jurisdiction-specific eligibility, underwriting, disclosures, and claims rules configurable or otherwise approved before launch. |
| NFR-05 | Surface delayed/unavailable integration status clearly and prevent duplicate submissions across policy, pricing, claims, and support systems. |
| NFR-06 | Validate automated recommendations, fraud signals, or damage-assessment support for accuracy, privacy, fairness, appealability, and human-review controls before production use. |
| NFR-07 | Trace content, policy wording, prices, decisions, and support commitments to approved versions/sources. |

## 10. Out of Scope for MVP

- Guarantees of lowest premium, policy approval, claim payment, claim amount, or payment timing.
- Replacement of emergency services, licensed advice, claims adjusters, or required human review.
- Unverified automated settlement, AI damage decisions, blockchain verification, or fraud decisions.
- Full internal underwriting, adjuster, or contact-centre tooling.
- Unapproved jurisdictions, property types, carriers, languages, or channels.

## 11. Dependencies and Risks

| ID | Dependency / risk | Required action |
|---|---|---|
| R-01 | Carrier, broker, or direct-distribution model is unknown. | Confirm operating model and accountable legal/compliance owner. |
| R-02 | Target geography and property segment are unknown. | Confirm launch market and homeowners/renters/commercial scope. |
| R-03 | Policy, pricing, claims, or CRM integrations may be unavailable/unreliable. | Define interface contracts, fallback states, reconciliation, and service expectations. |
| R-04 | Enriched property data may be incomplete/wrong. | Identify source, allow correction, retain manual entry, and validate before underwriting. |
| R-05 | Claim media and personal information are sensitive. | Complete security/privacy review and define access/retention controls. |
| R-06 | Users could mistake illustrative information for a guarantee. | Use approved content, disclosures, and confirmation screens. |
| R-07 | Support may lack staffing or case context. | Define ownership, hours, routing, SLAs, escalation, and staff tooling before launch. |

## 12. Open Questions

| ID | Question | Needed owner |
|---|---|---|
| OQ-01 | Is the product B2C, B2B, or hybrid? | Product sponsor |
| OQ-02 | Are homeowners, renters, commercial properties, or multiple segments in scope? | Product sponsor |
| OQ-03 | Which country/state/region, insurers, and policy types are in scope? | Business and compliance |
| OQ-04 | What is the missing sixth user problem? | Requestor |
| OQ-05 | Which channels and languages are available at launch? | Product and operations |
| OQ-06 | What support service level and accessibility accommodations are promised? | Operations |
| OQ-07 | What systems are the source of truth for price, policy, claim, decision, and payment data? | Technology and insurance operations |
| OQ-08 | What constitutes a complete claim, decision, and approved escalation path in each target jurisdiction? | Claims and legal/compliance |
| OQ-09 | What baselines and targets should be used for success measures? | Analytics and product |

## 13. Required Review

This is a proposed product direction, not proof of legal, insurance, privacy, pricing, or claims approval. Before implementation, document review from the product owner, insurance/claims owner, legal/compliance, privacy/security, accessibility, engineering, and customer-support owners.

| Reviewer role | Focus | Status |
|---|---|---|
| Product owner | Scope, priorities, outcomes | Pending |
| Insurance / claims owner | Workflow, policy, escalation | Pending |
| Legal / compliance | Licensing, disclosures, jurisdiction rules | Pending |
| Privacy / security | Data, consent, media, access, retention | Pending |
| Engineering | Integration and delivery feasibility | Pending |
| Customer support | Channels, SLAs, operational handoff | Pending |
| Accessibility | Inclusion and validation plan | Pending |
