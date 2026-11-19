---
title: Devin CLI
description: A terminal coding agent for working in a local checkout.
author: detailobsessed
source: https://docs.devin.ai/cli/index
weight: 2
---

Devin CLI gives terminal-oriented users a way to work with Devin in their own
checkout. Choose it when the local environment is part of the task, not simply
because a remote session's terminal feels unfamiliar.

Curated for Awesome Devin. Source: [CLI quickstart](https://docs.devin.ai/cli/index).

## What it does

It runs a coding agent from your terminal and integrates with Devin Cloud.
For handoff and session commands, use the [essential commands reference](https://docs.devin.ai/cli/essential-commands)
rather than memorizing a second command list here.

## Installation

On macOS, Linux, or WSL, the official quickstart provides:

```bash
curl -fsSL https://cli.devin.ai/install.sh | bash
```

This executes a remote installer; inspect it first if your team's policy
requires review. Restart your terminal, enter your project directory, and run:

```bash
devin
```

Follow the sign-in flow. Windows installer and Desktop-bundled installation
options are in the quickstart above.

## When to use it

Use it when reproducing a problem depends on your local checkout or when you
prefer reviewing changes with your existing terminal tools. For work you want
to delegate without keeping your workstation involved, consider Cloud instead.

## Limitations

A local agent operates in your environment: review requested permissions and
avoid treating a disposable branch as a sandbox for the rest of your machine.
An installed binary alone does not establish account access; consult the
quickstart for current authentication and plan requirements.

## Maturity

- The [stable changelog](https://docs.devin.ai/cli/changelog/stable) includes
  `v2026.3.9-0` (March 9, 2026), more than three months before this entry.
- Maintained official CLI with published installation instructions and release notes.
