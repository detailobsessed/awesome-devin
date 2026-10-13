---
title: Subdirectory rules load lazily
description: An AGENTS.md in a subdirectory only applies once the agent touches files there — it won't be in context from session start.
author: detailobsessed
surface: cli
weight: 1
---

In Devin CLI, only rules files at the workspace root are loaded at session
start. An `AGENTS.md` (or `.devin/rules/`) sitting in a subdirectory is
discovered lazily — loaded when the agent accesses files in that directory, not
before.

## When it happens

You put package-specific rules in `packages/api/AGENTS.md` in a monorepo, ask a
question *about* that package, and the answer ignores your rules — because
answering a question doesn't always require opening the files that would load
them.

## Workaround

- Put rules that must apply from the first message at the workspace root (or
  in `~/.config/devin/` for all projects).
- Keep subdirectory rules for conventions that genuinely only matter when
  editing those files — that's exactly what lazy loading is for, and it keeps
  the context focused.
- If a task spans the repo, mention the relevant subdirectory in the prompt so
  the agent looks at files there early.

## Context

This is documented behavior, not a bug — lazy loading exists so rules from
unrelated parts of a large repo don't pollute the context. But it's surprising
the first time a rule "doesn't apply" simply because its directory was never
touched. See the official [rules docs](https://docs.devin.ai/cli/extensibility/rules)
for the full loading order.
