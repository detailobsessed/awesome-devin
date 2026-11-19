---
title: Agent Skills
description: Package a repeatable procedure in a version-controlled SKILL.md file.
author: detailobsessed
source: https://github.com/agentskills/agentskills
weight: 3
---

Agent Skills is an open format for packaging instructions and supporting files
for coding agents. It gives a repeated procedure a home of its own instead of
adding another long checklist to every task prompt.

Curated for Awesome Devin. Sources: [Agent Skills](https://agentskills.io/home),
the [specification](https://agentskills.io/specification), and [Devin Skills](https://docs.devin.ai/product-guides/skills).

## What it does

A skill has a name, a description of when it applies, and instructions in
`SKILL.md`. Devin documents repository discovery at the path below; use its
official guide for invocation and scope rather than assuming every compatible
agent loads skills the same way.

## Installation

Create `.agents/skills/review-test-plan/SKILL.md` in your repository with:

```markdown
---
name: review-test-plan
description: Review a proposed code change for missing tests before implementation.
---

1. Read the proposed change and the existing tests for the affected behavior.
2. List a normal case, an empty-input case where applicable, and an error case.
3. Identify which cases already have coverage and propose tests for the gaps.
4. Report the plan without claiming any tests have run.
```

Commit the file so teammates can review the procedure alongside code changes.
Adapt the checklist to your project instead of installing a large bundle of
unrelated skills.

## When to use it

Use it for repeatable tasks such as a test-planning review. For a single short
instruction that should apply to all work, [AGENTS.md](../agents-md) is simpler.

## Limitations

Skills are instructions, not enforced policy or an isolation boundary. Review
third-party scripts before including them, and verify actual results after a
skill runs; a checklist does not prove it was followed. Client-specific
extensions may not be portable even when the basic format is.

## Maturity

- The [reference repository](https://github.com/agentskills/agentskills) had
  more than 27,000 GitHub stars when checked for this entry.
- Current Devin documentation explicitly supports the open standard.
