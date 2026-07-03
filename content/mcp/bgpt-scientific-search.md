---
title: BGPT — Scientific paper search
description: Hosted MCP server for searching scientific papers with full-text experimental data extraction.
author: connerlambden
source: https://github.com/connerlambden/bgpt-mcp
weight: 1
---

# BGPT — Scientific paper search

A hosted MCP server for searching scientific papers with full-text experimental
data extraction. No local install required — it runs as a remote server.

Contributed by [connerlambden](https://github.com/connerlambden). Source:
[github.com/connerlambden/bgpt-mcp](https://github.com/connerlambden/bgpt-mcp).

## What it does

BGPT lets Devin search academic papers and extract structured data from them —
experimental results, methods, figures. Useful when you're doing research-heavy
work and want Devin to pull facts from papers rather than guessing.

## Installation

No local install needed. Add the remote server URL to your Devin MCP config.

### Desktop

In Devin Desktop, go to Settings → MCP Servers and add:

```json
{
  "bgpt": {
    "url": "https://bgpt.pro/mcp/sse",
    "transport": "sse"
  }
}
```

### CLI

Add to `~/.config/devin/mcp.json`:

```json
{
  "mcpServers": {
    "bgpt": {
      "url": "https://bgpt.pro/mcp/sse",
      "transport": "sse"
    }
  }
}
```

Both SSE (`https://bgpt.pro/mcp/sse`) and Streamable HTTP endpoints are
available.

## Limitations

- Remote-only — no self-hosted option yet.
- Coverage depends on what BGPT has indexed; not every paper is available.
- Rate limits may apply for the hosted instance.

## Maturity

- 35+ GitHub stars
- 21 commits, actively maintained
- Hosted instance available for immediate use
