---
title: Playwright — browser automation
description: Microsoft's official MCP server for driving a real browser — lets Devin navigate pages, click, fill forms, and read the rendered DOM.
author: detailobsessed
source: https://github.com/microsoft/playwright-mcp
weight: 2
---

Microsoft's official Playwright MCP server. It gives Devin a real browser to
drive: navigate, click, fill forms, take screenshots, and read the accessibility
tree of the rendered page — far better than fetching raw HTML for anything
interactive.

Source: [github.com/microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp).

## What it does

Devin can actually *use* a web app rather than guessing at it: fill out a login
form, click through a flow, verify that a UI change rendered correctly. For
frontend work this is the difference between "should work" and "verified in a
browser".

## Installation

### Devin Desktop

Add to `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
```

### Devin CLI

```bash
devin mcp add playwright -- npx @playwright/mcp@latest
```

Scope it to all your projects with `-s user`, or share it with a team via
`-s project`.

### Devin Cloud

Playwright MCP is a local stdio server — for cloud sessions, check the
[MCP Marketplace](https://docs.devin.ai/work-with-devin/mcp) for remote options
instead; local-only servers can't run on a remote session VM in a useful way.

## Limitations

- Requires Node.js (`npx`) available on the machine.
- Browser automation is slower and flakier than API-level tools — reach for it
  when you need a real page, not for fetching data an endpoint already gives you.
- Auth flows still need credentials — the server doesn't magically log in for you.

## Maturity

- Official Microsoft project
- One of the most widely used MCP servers, actively maintained
