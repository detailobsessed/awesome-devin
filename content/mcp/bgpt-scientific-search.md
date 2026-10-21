---
title: BGPT — Scientific paper search
description: Hosted MCP server for searching scientific papers with full-text experimental data extraction.
author: connerlambden
source: https://github.com/connerlambden/bgpt-mcp
weight: 1
---

A hosted MCP server for searching scientific papers with full-text experimental
data extraction. No local install required — it runs as a remote server.

Contributed by [connerlambden](https://github.com/connerlambden). Source:
[github.com/connerlambden/bgpt-mcp](https://github.com/connerlambden/bgpt-mcp).

## What it does

BGPT lets Devin search academic papers and extract structured data from them —
experimental results, methods, figures. Useful when you're doing research-heavy
work and want Devin to pull facts from papers rather than guessing.

Endpoints: SSE at `https://bgpt.pro/mcp/sse`, plus a Streamable HTTP endpoint.

## Installation

### Devin Desktop

Add to `~/.codeium/windsurf/mcp_config.json` (remote servers use `serverUrl`):

```json
{
  "mcpServers": {
    "bgpt": {
      "serverUrl": "https://bgpt.pro/mcp/sse"
    }
  }
}
```

### Devin CLI

```bash
devin mcp add bgpt https://bgpt.pro/mcp/sse
```

Or add to the `mcpServers` section of `~/.config/devin/config.json` (user scope)
or `.devin/config.json` (project scope):

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

### Devin Cloud

An org admin can add it as a custom MCP (SSE transport, server URL above) — see
the official [MCP Marketplace docs](https://docs.devin.ai/work-with-devin/mcp).

## Limitations

- Remote-only — no self-hosted option yet.
- Coverage depends on what BGPT has indexed; not every paper is available.
- Rate limits may apply for the hosted instance.
- SSE is a legacy MCP transport; check the repo for the current Streamable HTTP
  endpoint if SSE is ever deprecated.

## Maturity

- 35+ GitHub stars
- Actively maintained
- Hosted instance available for immediate use
