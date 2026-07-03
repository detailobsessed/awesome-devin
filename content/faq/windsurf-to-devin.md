---
title: Windsurf → Devin migration
description: What changed when Windsurf became Devin Desktop, and what to do with your existing setup.
weight: 1
---

# Windsurf → Devin migration

As of **June 2, 2026**, Windsurf became **Devin Desktop**, and **Cascade** is
being replaced by **Devin Local**.

## What changed

- **Windsurf → Devin Desktop**: The product name changed. Same IDE, same local
  experience, new branding.
- **Cascade → Devin Local**: The agent engine was rebranded. Legacy Cascade
  continued to work through July 1, 2026.
- **Account migration**: Your existing Windsurf account carried over automatically.

## What to do with your existing setup

1. **Update the app** — Download the latest Devin Desktop from
   [docs.devin.ai](https://docs.devin.ai).
2. **Check your rules** — If you had `.windsurfrules` files, they should continue
   to work but may need renaming in a future update.
3. **Review your MCP config** — MCP server configurations should carry over
   unchanged.

## Common questions

**Do I need to uninstall Windsurf first?**
No. The update installs over the existing app.

**What happens to my existing Cascade memories?**
They carry over. Devin Local reads the same memory store.

**Are my extensions still compatible?**
Most VS Code-compatible extensions work unchanged. Check the extension's
documentation if you encounter issues.

> Got a migration question that's not answered here? Suggest it — see
> [Contributing](../../contributing).
