# Assumptions and Risks

## Assumptions

| Assumption | Status | Rationale / source |
|---|---|---|
| The four target-user segments are provisional. | Documented | BRD §4 says they are not validated personas. |
| Residential customer claims plus simplified quote/application is the recommended MVP direction. | Documented recommendation, not approved scope | BRD §6. |
| BRD IDs BRD-001–BRD-031 remain the research traceability identifiers. | Project control | `orchestration/traceability-rules.md`; existing matrix. |
| Stakeholder discussions and competitor evidence have not occurred/provided in this project input set. | Evidence-bound observation | No records or source material supplied in repository inputs. |

## Risks and dependencies

| ID | Documented risk/dependency | Consequence | Required action in BRD |
|---|---|---|---|
| R-01 | Carrier/broker/direct operating model unknown. | Governance, licensing and accountability uncertainty. | Confirm model and legal/compliance owner. |
| R-02 | Geography and property segment unknown. | Product and jurisdiction scope uncertain. | Confirm launch market and segment. |
| R-03 | Policy/pricing/claims/CRM integration may be unavailable or unreliable. | Service interruptions, stale data or duplicate submissions. | Define contracts, fallbacks, reconciliation and service expectations. |
| R-04 | Enriched property data may be incomplete/wrong. | Incorrect application data or underwriting impact. | Identify source, allow correction/manual entry and validate. |
| R-05 | Claim media and personal information are sensitive. | Privacy/security exposure. | Complete review and define access/retention controls. |
| R-06 | Illustrative information may be mistaken for a guarantee. | Misleading expectation/compliance risk. | Use approved content, disclosures and confirmation screens. |
| R-07 | Support staffing or context may be insufficient. | Delayed/unresolved customer support. | Define ownership, hours, routing, SLAs, escalation and tooling. |

