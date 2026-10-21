---
title: Keep rules tiny — use triggers and skills for the rest
description: Long always-on rule files dilute the agent's attention. Keep global rules to a handful of lines and move everything else into triggered rules or skills.
author: detailobsessed
surface: desktop
weight: 1
---

The instinct is to dump everything into one global rules file: every convention,
every preference, every framework quirk. It backfires — the agent reads all of
it on every request, and the rules that actually matter drown in the ones that
don't apply to the current task.

## The setup

You've written a big `global_rules.md` or `.windsurfrules` over time, and Devin
Local (or Cascade) follows it inconsistently — nailing some rules, ignoring
others seemingly at random.

## What works

Split rules by *when* they should apply, using the `trigger` frontmatter that
`.devin/rules/*.md` files support:

```markdown
---
description: "API design rules"
trigger: glob
globs: "src/api/**/*.ts"
---
```

- `always_on` — a handful of lines only. The stuff that must shape *every*
  request.
- `glob` — rules that only load for matching files (per-framework, per-directory
  conventions).
- `model_decision` — the agent applies it when the description is relevant.
- `manual` — invoked only when you ask for it.

Then prefer **skills** over rules for procedural knowledge: skills load only
when relevant, which is exactly what a 200-line rule file isn't.

## Why this works

Attention is finite. Ten rules that always apply beat fifty that mostly don't,
and the official docs say the same thing: keep rules as small as possible and
use skills when you can. Smaller, correctly-scoped rules are followed more
reliably than one big file that tries to cover everything.

## Variations

- Put project rules in version control (`.devin/rules/` in the repo) so the
  whole team shares them; keep personal preferences out of the shared set.
- `.devin/` is the preferred directory — `.windsurf/rules/` still works as a
  fallback for older setups.
