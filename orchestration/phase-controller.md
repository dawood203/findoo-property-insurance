# Phase Controller

## 1. Research

**Inputs:** BRD, prior approved decisions, supplied research evidence.  
**Skills:** `skills/brd-analysis.md`, `skills/requirements-traceability.md`.  
**Process:** Extract documented facts, requirements, constraints, dependencies, assumptions, contradictions and questions.  
**Deliverables:** BRD analysis, traceability matrix, research status.  
**Quality checks:** All explicit FR/NFRs have IDs; facts and assumptions are distinct; gaps are logged.  
**Next-phase dependency:** Approved research gate and user authorization.

## 2. Define

**Inputs:** Approved research outputs, BRD, approved decisions.  
**Skills:** `skills/problem-and-scope-definition.md`, `skills/requirements-traceability.md`.  
**Process:** Define problem framing, prioritized scope, measurable outcomes, assumptions, risks and unresolved decisions without creating new business rules.  
**Deliverables:** Definition brief, scope/in-out record, success-measure proposal, decision/questions update.  
**Quality checks:** Scope is traceable or marked as a proposal; success measures are not asserted as approved targets.  
**Next-phase dependency:** Approved definition gate and user authorization.

## 3. Information Architecture

**Inputs:** Approved definition brief, traceability matrix, content/policy constraints.  
**Skills:** `skills/information-architecture.md`, `skills/journey-mapping.md`.  
**Process:** Model tasks, content, navigation, states and service handoffs.  
**Deliverables:** Sitemap/navigation model, task flows, content inventory, state/error inventory.  
**Quality checks:** Each flow maps to approved requirements; emergency and human-support routes remain discoverable.  
**Next-phase dependency:** Approved IA gate and user authorization.

## 4. UI Design

**Inputs:** Approved IA and definition outputs, approved content/rules.  
**Skills:** `skills/material-design-3/SKILL.md`, `skills/ui-specification.md`, `skills/accessibility-review.md`.  
**Process:** Specify screens/states and annotated interaction behavior; do not claim legal/content approval.  
**Deliverables:** UI specifications/prototypes, annotation set, accessibility review.  
**Quality checks:** Traceability, accessible error/recovery, disclosure/content provenance, responsive states.  
**Next-phase dependency:** Approved UI-design gate and user authorization.

## 5. Usability Testing

**Inputs:** Approved test-ready UI, test plan, consent/participant approvals where needed.  
**Skills:** `skills/usability-testing.md`.  
**Process:** Plan and run only authorized research, distinguish evidence from interpretation, log findings.  
**Deliverables:** Test plan, anonymized observation record, findings and severity rationale.  
**Quality checks:** Tasks link to requirements; findings cite evidence; no fabricated participants/results.  
**Next-phase dependency:** Approved testing gate and user authorization.

## 6. Iteration

**Inputs:** Approved findings, UI/IA artifacts, decisions.  
**Skills:** `skills/iteration-management.md`, `skills/requirements-traceability.md`.  
**Process:** Prioritize validated findings, make traceable changes, record unresolved trade-offs and retest needs.  
**Deliverables:** Change log, updated artifacts, finding disposition, retest plan.  
**Quality checks:** No scope creep disguised as a finding fix; each change is traceable and reviewed.  
**Next-phase dependency:** Approved iteration gate and user authorization.

## 7. UX Validation & Approval

**Inputs:** Approved iteration artifacts, all gate evidence, traceability and approval records.  
**Skills:** `skills/ux-validation.md`, `skills/approval-evidence.md`, `skills/presentation-generation.md`.  
**Process:** Validate evidence completeness, residual risks and external approvals; prepare an approval pack and a decision-ready presentation.  
**Deliverables:** Validation report, approval pack, residual-risk register, final traceability status, and review presentation.  
**Quality checks:** DPO/EO decisions are evidence-backed external records; no release/Box claim without evidence.  
**Next-phase dependency:** End of workflow; explicit user acceptance is required for any subsequent action.

