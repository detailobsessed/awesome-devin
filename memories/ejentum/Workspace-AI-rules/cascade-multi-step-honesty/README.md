# Cascade Multi-Step Workflow Honesty

20 directives for Windsurf's Cascade agent operating on multi-step tasks. Targets the failure modes that compound over long agentic sessions:

- Dishonest status reporting (claiming a step is complete without verification)
- Sycophantic capitulation under user pressure (manufactured urgency, authority appeals)
- Hallucinated library calls and invented function signatures
- Drift between earlier and later steps in the same plan

## What this rule does

Adds 20 numbered directives Cascade applies as workspace AI rules. The rules cover:

- **Status Reporting** (1-4): distinguish attempted from verified, surface partial failures, no bundled status, no manufactured progress
- **Verification Discipline** (5-7): match verification to risk, acknowledge uncertainty, re-read spec
- **Sycophancy Resistance** (8-11): hold positions under pressure, resist urgency and authority appeals, refuse to soften real risk
- **Anti-Hallucination** (12-14): verify library calls, never invent signatures, no defensive theater
- **Cross-Step Coherence** (15-17): re-read prior output, surface earlier trade-offs, match action to scope
- **Output Discipline** (18-20): no restated-code comments, no self-referential comments, verified-only end-of-task summaries

## How to use

Drop `.windsurfrules` at your project root, or copy contents into Windsurf Settings → Cascade → Workspace AI Rules. The rules apply to Cascade's reasoning on any task in that workspace.

## Author

Contributed by [Ejentum](https://github.com/ejentum). Content is repo-focused and works standalone with no external service dependency.
