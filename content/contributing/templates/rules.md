---
title: Rules entry template
description: Template for contributing a rules set.
weight: 4
---

# Rules entry template

Copy this template, fill it in, and place it in `content/rules/`. The full rules
text must be inline — not just a link to your repo.

```markdown
---
title: <Short name for the rules set>
description: <One-line summary of what the rules do>
author: <your GitHub username>
source: <link to your repo, if applicable>
weight: <lower = higher in list>
---

# <Title>

<One paragraph: what these rules do, and what problem they solve. Be objective —
"prevents over-engineering" not "the best rules ever".>

Contributed by [<username>](<link>). Source: [<repo name>](<link>).

## The rules

<Paste the full rules text here. This is the core of the page — people should
be able to read and evaluate the rules without clicking away.>

## How to install

<Actual commands or config snippets for installing the rules into each Devin
surface. Not "see the docs" — the actual steps.>

```bash
# Desktop (global)
cat > ~/.config/devin/rules/<name>.md << 'RULES'
# Paste rules here
RULES

# Desktop (workspace)
cat > .devin/rules/<name>.md << 'RULES'
# Paste rules here
RULES
```

## Why this exists

<Why you wrote these rules. What situation were you in? What was Devin doing
that prompted you to add them?>

## Limitations

<What these rules don't do. When they might not be appropriate. Be honest —
this helps people decide if they're a good fit.>
```

## Guidelines

- **Full rules text inline.** The page should be self-contained — no "click
  here to see the rules."
- **General-purpose rules preferred.** Rules that help anyone using Devin are
  better than rules that activate a specific product's features.
- **If your rules require a specific MCP server or external service to be
  useful, submit it under MCP Servers instead.** That's a directory entry for
  your product, not a rule set.
- **Be honest about limitations.** Rules that work great for one workflow might
  be counterproductive for another. Say so.
