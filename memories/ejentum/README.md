# Ejentum Reasoning Harness for Windsurf

This contribution adds workspace rules that teach Windsurf's Cascade agent
when to call each of the four cognitive harness tools exposed by the
[`ejentum-mcp`](https://github.com/ejentum/ejentum-mcp) MCP server:

- `harness_reasoning` for analytical, diagnostic, planning, multi-step questions
- `harness_code` for codegen, refactoring, review, debugging, architecture choices
- `harness_anti_deception` when the prompt pressures Cascade to validate, certify, or soften an honest assessment
- `harness_memory` only when sharpening an observation already formed about cross-turn drift

The harnesses inject engineered scaffolds (named failure pattern, executable
procedure, suppression vectors that block shortcut-taking, falsification test
for self-verification) into Cascade's context at inference time. The rules
file documents BEFORE-triggers, DO-NOT-CALL conditions, scaffold absorption
discipline, output discipline (so bracketed fields shape internal reasoning
instead of leaking into replies), and anti-patterns.

## Folder layout

- `Workspace-AI-rules/ejentum-reasoning-harness/.windsurfrules` — drop into
  any project root. Cascade reads it as workspace rules.

## Setup

1. Install the MCP server in Windsurf:
   - Settings → Cascade → MCP Servers → add a server with command `npx`,
     args `["-y", "ejentum-mcp"]`, env `{ "EJENTUM_API_KEY": "<your_key>" }`

2. Get a free API key (100 calls, no card) at <https://ejentum.com/pricing>

3. Drop the `.windsurfrules` file at your project root, OR paste its
   contents into `global_rules.md` for Windsurf-wide application.

## Why I built this

Cursor/Windsurf agents have weak autonomous routing for optional MCP tools
on cold prompts. A rules file gives Cascade explicit, structured triggers
for each harness, so the right cognitive scaffold fires at the right time
without the user having to ask. Pairs with the MCP server's official
auto-routing skill files distributed alongside the [`ejentum-mcp`](https://github.com/ejentum/ejentum-mcp/tree/main/editors)
repo (Cursor, Cline, and Claude Code variants in the same `editors/` and
`skills/` directories).

## Source

- MCP server: <https://github.com/ejentum/ejentum-mcp> (MIT)
- All editor adapters (Cursor, Windsurf, Cline): <https://github.com/ejentum/ejentum-mcp/tree/main/editors>
- Walkthrough with screenshots: <https://ejentum.com/docs/claude_code_guide>
