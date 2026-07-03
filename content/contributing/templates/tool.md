---
title: Tool entry template
description: Template for contributing a skill or tool to the directory.
weight: 6
---

Copy this template, fill it in, and place it in `content/tools/`.

**Maturity bar:** Tool entries must have community validation — 50+ GitHub
stars OR 3+ months since first release OR documented production use. You can
submit your own project, but it must meet this bar like anything else.

```markdown
---
title: <Tool name>
description: <One-line summary of what the tool does>
author: <your GitHub username>
source: <link to the tool's repo>
weight: <lower = higher in list>
---

# <Tool name>

<One paragraph: what this tool does, objectively. What problem does it solve for
Devin users?>

Contributed by [<username>](<link>). Source: [<repo name>](<link>).

## What it does

<2-3 sentences on the capabilities. How does it integrate with Devin? What
surfaces does it work with (Cloud, Desktop, CLI)?>

## Installation

<Actual installation steps. Commands, config files, whatever's needed. Not "see
the docs" — the actual steps.>

```bash
<actual install command>
```

## When to use it

<What situation is this tool good for? When is it overkill? Be specific — this
helps people decide if it's relevant to them.>

## Limitations

<What it doesn't do. What to watch out for. Platform restrictions, dependencies,
etc. Be honest — this section is required.>

## Maturity

- <N> GitHub stars
- <N> commits, <active/stale> maintenance
- <any other validation>
```

## Guidelines

- **Meet the maturity bar.** 50+ stars, 3+ months old, or documented production
  use. No exceptions for freshly-created projects with no users.
- **Write objectively.** What it does, not why it's amazing.
- **Include real installation steps.** Not a link to external docs.
- **Be honest about limitations.** Required section.
- **No marketing copy.** Same as MCP entries — if it reads like a landing page,
  it'll be rejected.
