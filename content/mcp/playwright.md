---
title: Playwright — browser automation
description: Microsoft's official MCP server for driving a real browser — lets Devin navigate pages, click, fill forms, and read the rendered DOM.
author: detailobsessed
source: https://github.com/microsoft/playwright-mcp
weight: 1
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

Open **Customize → MCPs → This computer**, then open the config file from
the server list. For current Devin Local, a shared project config lives at
`.devin/mcp_config.json`; see [Desktop MCP configuration](https://docs.devin.ai/desktop/devin-local/customizations#mcp-servers).
Add:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
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

In **Customize → MCPs**, select your organization and **Add custom MCP**
(requires permission to manage organization MCP servers). Choose **STDIO**,
command `npx`, arguments `-y @playwright/mcp@latest --headless`, and save.
Use **Use MCP** to test it in a session; **Test tools** is unavailable for STDIO.
The session environment must provide Node.js and the browser dependencies.
See the [Cloud setup guide](https://docs.devin.ai/work-with-devin/mcp) for current
scope and connection controls; do not expose a browser server publicly as a workaround.

## Limitations

- Requires Node.js 20 or newer (`npx`) and browser dependencies on the machine.
- Browser automation is slower and flakier than API-level tools — reach for it
  when you need a real page, not for fetching data an endpoint already gives you.
- Auth flows still need credentials — the server doesn't magically log in for you.

## Maturity

- Official Microsoft project
- One of the most widely used MCP servers, actively maintained
