---
title: Keep personal rules in AGENTS.local.md
description: AGENTS.local.md gives you always-on personal rules that never get committed — your preferences stay yours while the repo's AGENTS.md stays shared.
author: detailobsessed
surface: cli
weight: 2
---

Devin CLI reads `AGENTS.md` automatically, which is great for team conventions —
but your personal working preferences don't belong in a file the whole repo
shares.

## The setup

You want rules like "always run the full test suite before saying you're done"
or "I prefer verbose explanations" to apply to your sessions in a repo, without
imposing them on teammates.

## What works

Create `AGENTS.local.md` next to the project's `AGENTS.md`, and gitignore it:

```markdown
# My personal rules

- Run the full test suite before marking a task complete
- Prefer functional patterns over imperative code
- Explain non-obvious decisions in the final summary
```

```gitignore
AGENTS.local.md
```

Both files load with the same always-on behavior — the `.local.` suffix is the
convention for "personal override that shouldn't be committed" (same pattern as
`.devin/config.local.json`).

## Why this works

The team's rules stay a shared, reviewable artifact while your personal layer
travels with you — and nobody has to negotiate whose preferences made it into
the committed file.

## Variations

- For preferences that apply to *every* project, use the global file instead:
  `~/.config/devin/AGENTS.md` (`%APPDATA%\devin\AGENTS.md` on Windows).
