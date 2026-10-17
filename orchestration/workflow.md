# Seven-Phase Workflow

| Phase | Purpose | Agent | Gate | Advancement rule |
|---|---|---|---|---|
| 1. Research | Establish BRD-grounded evidence and uncertainty. | `agents/research-agent.md` | `gates/research-gate.md` | Passing gate + explicit user approval only. |
| 2. Define | Turn approved evidence into scope, requirements and success measures. | `agents/define-agent.md` | `gates/define-gate.md` | Passing gate + explicit user approval only. |
| 3. Information Architecture | Organize content, tasks and navigation. | `agents/information-architecture-agent.md` | `gates/information-architecture-gate.md` | Passing gate + explicit user approval only. |
| 4. UI Design | Produce accessible, traceable interface specifications. | `agents/ui-design-agent.md` | `gates/ui-design-gate.md` | Passing gate + explicit user approval only. |
| 5. Usability Testing | Test defined tasks with documented evidence. | `agents/usability-testing-agent.md` | `gates/usability-testing-gate.md` | Passing gate + explicit user approval only. |
| 6. Iteration | Prioritize and resolve validated findings. | `agents/iteration-agent.md` | `gates/iteration-gate.md` | Passing gate + explicit user approval only. |
| 7. UX Validation & Approval | Compile readiness evidence and obtain recorded approvals. | `agents/ux-validation-approval-agent.md` | `gates/ux-validation-approval-gate.md` | End state only; no automatic release claim. |

The detailed phase contract is in `orchestration/phase-controller.md`. A passing gate is necessary but never sufficient to advance; explicit user approval is also mandatory.

