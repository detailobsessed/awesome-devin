---
title: DeepWiki & its MCP server
description: Read repository documentation in a browser or query it from an MCP client.
author: detailobsessed
source: https://docs.devin.ai/work-with-devin/deepwiki-mcp
weight: 1
---

[DeepWiki](https://deepwiki.com) is a useful starting point when you need to
understand a dependency before proposing changes. Its public MCP server lets
an agent consult repository documentation without copying pages into a prompt.

Curated for Awesome Devin. Sources: [DeepWiki documentation](https://docs.devin.ai/work-with-devin/deepwiki)
and [DeepWiki MCP](https://docs.devin.ai/work-with-devin/deepwiki-mcp).

## What it does

The server exposes `read_wiki_structure`, `read_wiki_contents`, and
`ask_wiki_question` for public repositories. Use the browser for a quick human
orientation, or attach the MCP server to a client when repository questions are
part of an agent's task; Devin's [MCP guide](https://docs.devin.ai/work-with-devin/mcp)
covers connection management.

## Installation

For the browser, open `https://deepwiki.com/<owner>/<repo>` with the public
GitHub repository's owner and name. No local package is needed.

For Devin Desktop, add this server to your MCP configuration:

```json
{
  "mcpServers": {
    "deepwiki": {
      "serverUrl": "https://mcp.deepwiki.com/mcp"
    }
  }
}
```

This is the Desktop configuration from the official source above, not a
universal config file: other clients may require `url` instead of `serverUrl`.
Prefer the HTTP endpoint shown here over the legacy SSE endpoint.

## When to use it

Use it to find likely entry points in an unfamiliar public library. For a
question about the exact dependency version in your lockfile, inspect that
version's source as well; a wiki answer is a lead, not proof.

## Limitations

The public server is remote and unauthenticated, and covers public repositories,
not your private code. Do not send secrets or private code in questions.
Generated documentation is not a substitute for reading the implementation or
running tests against the version you actually use.

## Maturity

- Hosted service with current official setup documentation.
- DeepWiki updates appear in the [2025 release notes](https://docs.devin.ai/release-notes/2025),
  establishing more than three months of history; this is not a claim about a
  separately versioned MCP package.
