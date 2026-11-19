---
title: Fetch — read web pages as markdown
description: The reference MCP fetch server — pulls a URL and returns it as clean markdown for the agent to read.
author: detailobsessed
source: https://github.com/modelcontextprotocol/servers
weight: 2
---

The reference `fetch` server from the MCP team. Give Devin a URL and it gets
back the page content as markdown — the simplest way to let an agent read
documentation, blog posts, or changelogs that aren't in its context.

Source: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
(the `src/fetch` directory).

## What it does

Fetches a URL and converts the HTML to markdown the agent can reason about.
Great for "read this doc and apply it" workflows where copy-pasting page text
into the prompt is the alternative.

## Installation

### Devin Desktop

Open **Customize → MCPs → This computer** and open the config file from the
server list. Add the following to a shared project `.devin/mcp_config.json`
(requires `uvx`; the server requires Python 3.11.5 or newer):

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

In **Customize → MCPs**, select the organization and **Add custom MCP**
(requires permission to manage organization MCP servers). Select **STDIO**,
command `uvx`, arguments `mcp-server-fetch`, then save and choose **Use MCP**
to exercise it inside a session. Ensure `uvx` is in the session environment;
the server runs there, not on your laptop. See the
[Cloud MCP guide](https://docs.devin.ai/work-with-devin/mcp) and
[Desktop configuration guide](https://docs.devin.ai/desktop/devin-local/customizations#mcp-servers).

## Limitations

- **No JavaScript rendering** — it fetches static HTML. Client-rendered pages
  come back thin or empty; use a browser automation server (e.g. Playwright)
  for those.
- Fails on paywalled or login-walled content — it's an anonymous fetch.
- Requires `uvx` (from `uv`) on the machine.
- Review the upstream network-access warnings before enabling it, particularly
  when proxies or access to internal services are involved.

## Maturity

- Reference implementation maintained alongside the MCP spec itself
- Stable, minimal, widely used as the default "read a URL" server
