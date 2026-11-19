---
title: AGENTS.md
description: A shared, version-controlled starting point for coding-agent instructions.
author: detailobsessed
source: https://github.com/agentsmd/agents.md
weight: 4
---

AGENTS.md is a plain Markdown convention for repository instructions to coding
agents. It is useful when a team wants the same small set of project constraints
available without pasting them into every prompt.

Curated for Awesome Devin. Sources: [agents.md](https://agents.md),
[AGENTS.md for Devin](https://docs.devin.ai/onboard-devin/agents-md), and
[CLI rules](https://docs.devin.ai/cli/extensibility/rules).

## What it does

The file keeps project context with the code rather than in one person's chat
history. Devin and Devin CLI document support; check the relevant surface's
rules before relying on nesting, precedence, or automatic loading behavior.

## Installation

Create `AGENTS.md` at the repository root. No package installation is needed.
For a small starting point:

```markdown
# Project instructions

- Read the repository's contribution guide before changing code.
- Use the dependency manager already selected by the project lockfile.
- Run the checks covering changed behavior and report their actual output.
- If a check cannot run, say why instead of reporting success.
```

Replace generic instructions with your project's verified commands as you learn
them, then commit the file. Do not include credentials or personal access tokens.

## When to use it

Use it for short constraints that apply across tasks and agents. Put a detailed,
occasional procedure in a [skill](../agent-skills) instead of expanding the file
into a second manual.

## Limitations

The convention is not an enforcement mechanism. Different clients can interpret
scope differently, and long files risk truncation; Devin's linked guide documents
its automatic-injection limit. Keep critical guidance short and near the top,
and still inspect the agent's diff and test evidence.

## Maturity

- The [upstream repository](https://github.com/agentsmd/agents.md) had more than
  25,000 GitHub stars when checked for this entry.
- Both Cloud and CLI have current official documentation for the convention.
