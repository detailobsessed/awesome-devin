---
title: MCP server entry template
description: Template for contributing an MCP server to the directory.
weight: 5
---

Copy this template, fill it in, and place it in `content/mcp/`.

**Maturity bar:** MCP server entries must have community validation — 50+
GitHub stars OR 3+ months since first release OR documented production use. You
can submit your own project, but it must meet this bar like anything else.

```markdown
---
title: <Server name>
description: <One-line summary of what the server does>
author: <your GitHub username>
source: <link to the server's repo>
weight: <lower = higher in list>
---

# <Server name>

<One paragraph: what this MCP server does, objectively. Not marketing copy —
"searches scientific papers and extracts experimental data" not "revolutionizes
your research workflow".>

Contributed by [<username>](<link>). Source: [<repo name>](<link>).

## What it does

<2-3 sentences on the capabilities. What tools does it expose? What can Devin do
with it?>

## Installation

<Actual config snippets for each Devin surface. Not "see the docs" — the actual
JSON/config people need to paste.>

### Desktop

```json
{
  "<server-name>": {
    "url": "<URL>",
    "transport": "sse"
  }
}
```

### CLI

```json
{
  "mcpServers": {
    "<server-name>": {
      "url": "<URL>",
      "transport": "sse"
    }
  }
}
```

## Limitations

<What it doesn't do. What to watch out for. Rate limits, coverage gaps,
self-hosted availability, etc. Be honest — this section is required.>

## Maturity

- <N> GitHub stars
- <N> commits, <active/stale> maintenance
- <hosted instance available / self-hosted only / etc.>
```

## Guidelines

- **Meet the maturity bar.** 50+ stars, 3+ months old, or documented production
  use. No exceptions for freshly-created projects with no users.
- **Write objectively.** What it does, not why it's amazing. The reader will
  decide if it's useful.
- **Include real config.** The installation section must have actual config
  snippets, not a link to external docs.
- **Be honest about limitations.** This section is required. If there are no
  limitations, you haven't thought about it enough.
- **No marketing copy.** "Revolutionizes," "game-changing," "seamlessly" —
  these are red flags that will get your entry rejected.
