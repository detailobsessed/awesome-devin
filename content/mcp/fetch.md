---
title: Fetch — read web pages as markdown
description: The reference MCP fetch server — pulls a URL and returns it as clean markdown for the agent to read.
author: detailobsessed
source: https://github.com/modelcontextprotocol/servers/tree/main/src/fetch
weight: 3
---

The reference `fetch` server from the MCP team. Give Devin a URL and it gets
back the page content as markdown — the simplest way to let an agent read
documentation, blog posts, or changelogs that aren't in its context.

Source: [modelcontextprotocol/servers — fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch).

## What it does

Fetches a URL and converts the HTML to markdown the agent can reason about.
Great for "read this doc and apply it" workflows where copy-pasting page text
into the prompt is the alternative.

## Installation

### Devin Desktop

Add to `~/.codeium/windsurf/mcp_config.json` (requires Python and `uv`/`uvx`
installed):

```json
{
  "mcpServers": {
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"]
    }
  }
}
```

### Devin CLI

```bash
devin mcp add fetch -- uvx mcp-server-fetch
```

### Devin Cloud

Local stdio server — not applicable to remote sessions. Cloud sessions already
have browser tooling built in for reading pages.

## Limitations

- **No JavaScript rendering** — it fetches static HTML. Client-rendered pages
  come back thin or empty; use a browser automation server (e.g. Playwright)
  for those.
- Fails on paywalled or login-walled content — it's an anonymous fetch.
- Requires `uvx` (from `uv`) on the machine.

## Maturity

- Reference implementation maintained alongside the MCP spec itself
- Stable, minimal, widely used as the default "read a URL" server
