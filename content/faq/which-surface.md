---
title: Cloud, Desktop, or CLI — which should I use?
description: The three Devin surfaces solve different parts of the same workflow — pick based on whether you want to delegate, collaborate, or stay in the terminal.
weight: 2
---

They're not competitors — they're three ends of the same workflow, and most
people end up using more than one.

**Devin Cloud** ([app.devin.ai](https://app.devin.ai)) — delegate whole tasks.
You write a prompt, Devin works on its own VM, and you come back to a draft PR.
Best for: ticket-sized work, parallel tasks, anything you'd hand to a teammate
and check later. This is also where automations, playbooks, and scheduled work
live.

**Devin Desktop** (the IDE, formerly Windsurf) — work *alongside* agents.
The Agent Command Center manages local and cloud agents from one place, and the
full editor is still there for driving manually. Best for: being hands-on,
reviewing and steering as the work happens.

**Devin CLI** — the terminal experience. Interactive coding from your command
line, in your local environment. Best for: quick fixes, code exploration, and
when the terminal is already where you live. `/handoff` sends longer tasks up
to a cloud session.

The pattern that works in practice: CLI for interactive local work, `/handoff`
when it gets long, Cloud for anything you'd delegate, Desktop when you want to
watch and steer.

## Common follow-ups

**Do I need all three?** No — they overlap on purpose. Plenty of people only
use Cloud, or only Desktop.

**Do they share configuration?** Partially — rules formats (`.devin/`,
`AGENTS.md`, legacy `.windsurf/`) are shared across surfaces, but MCP and
secrets are configured per surface.

## Source

The constant "wait, Devin has a CLI now?" / "isn't Devin the website?"
questions in the community Discord — especially from people who knew the
product back when it was only Windsurf.
