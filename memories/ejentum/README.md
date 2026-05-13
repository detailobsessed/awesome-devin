# Ejentum MCP Rules for Windsurf

Workspace rules that route Windsurf's Cascade agent to the four tools exposed by the [`ejentum-mcp`](https://github.com/ejentum/ejentum-mcp) MCP server:

- `harness_reasoning` for analytical, diagnostic, planning, multi-step tasks
- `harness_code` for code generation, refactoring, review, debugging
- `harness_anti_deception` for honesty-pressured prompts (sycophancy, authority appeals, urgency-as-bypass)
- `harness_memory` for sharpening an observation already formed about cross-turn drift

The rules document trigger conditions, do-not-call cases, output discipline, and anti-patterns.

## Folder layout

- `Workspace-AI-rules/ejentum-reasoning-harness/.windsurfrules` — drop into any project root. Cascade reads it as workspace rules.

## Setup

1. Install the MCP server in Windsurf (Settings → Cascade → MCP Servers): command `npx`, args `["-y", "ejentum-mcp"]`, env `{ "EJENTUM_API_KEY": "<your_key>" }`.
2. Drop the `.windsurfrules` file at your project root, or paste its contents into `global_rules.md` for Windsurf-wide application.

## Source

- MCP server: <https://github.com/ejentum/ejentum-mcp> (MIT)
- Editor adapters (Cursor, Windsurf, Cline): <https://github.com/ejentum/ejentum-mcp/tree/main/editors>
