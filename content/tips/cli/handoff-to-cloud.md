---
title: Start in the terminal, hand off to the cloud
description: Use Devin CLI for interactive local work, then `/handoff` the task to a cloud session when it outgrows the terminal.
author: detailobsessed
surface: cli
weight: 1
---

Devin CLI and Devin Cloud aren't two products you choose between — they're two
ends of the same task. The pattern that works: stay in the terminal while the
work is interactive, then hand it off when it turns into something that should
run unattended.

## The setup

You started something in the CLI — exploring a codebase, sketching a fix — and
it's grown into a real task: a migration, a feature, something that'll take a
while and end in a PR.

## What works

```text
/handoff
```

The `/handoff` command ships the task's context to a new Devin Cloud session,
which keeps working in the background while you get your terminal back. You
follow it in the web app like any other cloud session.

## Why this works

The CLI is at its best with tight feedback loops — you steering, it doing. Cloud
sessions are at their best unattended — well-scoped tasks that end in a draft PR.
Using each for the phase it's good at means you stop babysitting long tasks in
a terminal and stop burning interactive time on things that could run
themselves.

## Variations

- The reverse works too: let a cloud session produce the first draft, then
  pull the branch and finish it locally with the CLI if you want hands-on
  control of the last 10%.
