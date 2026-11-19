---
title: GitHub — repository and pull request tools
description: GitHub's official MCP server for repository, issue, and PR operations.
author: detailobsessed
source: https://github.com/github/github-mcp-server
weight: 3
---

Use GitHub's official MCP server when a task needs structured issue or PR data
alongside code. Do not add it solely to clone a repository already connected to
Devin; it is another access grant to review and maintain.

Curated for Awesome Devin. Source: [GitHub MCP server](https://github.com/github/github-mcp-server).

## What it does

It exposes GitHub operations to MCP clients, including repository, issue, and
pull request tools. The upstream README documents hosted and local options,
authentication, tool selection, and read-only operation.

## Installation

### Desktop and CLI

For current Devin Local, add to `.devin/mcp_config.json`:

```json
{
  "mcpServers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/"
    }
  }
}
```

Alternatively, use the CLI and complete OAuth:

```bash
devin mcp add github https://api.githubcopilot.com/mcp/
devin mcp login github
```

Open Desktop's **Customize → MCPs** to inspect the connection. See
[Devin MCP configuration](https://docs.devin.ai/cli/extensibility/mcp/configuration)
for current scopes and authentication behavior.

### Cloud

In **Customize → Plugins**, look for the GitHub integration in the marketplace.
If using a standalone server instead, select your organization under
**Customize → MCPs → Add custom MCP**, choose **HTTP**, and enter
`https://api.githubcopilot.com/mcp/`. Save, complete the offered authentication
flow, then use **Test tools**. Organization-wide setup requires permission to
manage MCP servers; see [Cloud MCP setup](https://docs.devin.ai/work-with-devin/mcp).

## When to use it

Use it to investigate issues or review PR context without scraping GitHub pages.
Start with the smallest permissions and tool selection the task needs. Confirm
whether a connection is personal or shared before granting write access.

## Limitations

Access depends on GitHub authorization and organization policy. A working MCP
connection does not grant access to every repository. Hosted availability and
local-server setup differ; consult upstream before assuming a hosted endpoint
can reach your GitHub Enterprise Server instance. Never commit tokens in config.

## Maturity

- Official GitHub project; more than 34,000 GitHub stars when checked for this entry.
- Public source, configuration documentation, and hosted service documented upstream.
