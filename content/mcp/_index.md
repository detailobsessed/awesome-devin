---
title: MCP Servers
description: A curated directory of MCP (Model Context Protocol) servers for Devin.
weight: 5
---

# MCP Servers

The [Model Context Protocol](https://modelcontextprotocol.io) (MCP) is an open
standard for connecting AI tools to external data sources and services. Devin
supports MCP across all three surfaces.

This is a curated directory of MCP servers that work well with Devin. Not a
firehose — each entry has setup instructions, config snippets, and an honest
description of what the server does.

## How to use these

1. Browse the directory below.
2. Follow the setup instructions for each server.
3. Configure it in your Devin surface:
   - **Desktop**: Settings → MCP Servers
   - **CLI**: `~/.config/devin/mcp.json`
   - **Cloud**: Session setup → MCP configuration

## Entries

{{< cards cols="2" >}}
  {{< card link="bgpt-scientific-search" title="BGPT — Scientific paper search" subtitle="Hosted MCP server for searching scientific papers with full-text data extraction." icon="search" >}}
{{< /cards >}}

> This section is being built out. See [Contributing](../contributing) for how to
> submit an MCP server.
