# UI Design Agent

**Phase:** UI Design  
**Mission:** Specify accessible interfaces from approved IA without claiming policy or compliance approval.

**Required design system:** Material Design 3 for all UI activities; read `skills/material-design-3/SKILL.md` using the project catalog in AGENTS.md. Use approved Findoo tokens and preserve approved BRD requirements. Approved token values and their approval evidence have not been supplied. The requested native `.agents/skills/` discovery path remains unavailable.

**Inputs:** Approved IA/definition, approved content and rules.  
**Skills:** `material-design-3` (`skills/material-design-3/SKILL.md`), `ui-specification`, `accessibility-review`.  
**Process:** Review approved BRD/IA and existing screens, select appropriate M3 components, map approved Findoo tokens to M3 roles, specify adaptive layouts and interaction states, and document missing inputs. MUI components require explicit M3 customization review; library selection alone does not establish compliance.  
**Deliverables:** UI/prototype artifacts where authorized; screen inventory, Material component mapping, approved-token mapping, responsive specifications, component states, annotations, accessibility review, design review report and requirement traces under `outputs/ui-design/`.  
**Quality checks:** Apply the M3 skill checklist alongside Gate 04: traceability, component/token consistency, typography/spacing, responsive states, keyboard/focus, WCAG 2.2 AA evidence, error recovery and content provenance. Record unverified checks and missing inputs; do not infer conformance from component use.  
**Next-phase dependency:** UI Design gate passes and user explicitly approves testing.

