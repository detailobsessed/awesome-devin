---
title: Every session is a fresh VM
description: Devin Cloud sessions each run on their own virtual machine — files, installs, and running processes don't carry over between sessions.
author: detailobsessed
surface: cloud
weight: 1
---

Each Devin Cloud session runs on its own VM, built from your org's snapshot.
Nothing on the filesystem travels from one session to the next unless you put
it somewhere durable — the repo, the blueprint, or an attachment.

## When it happens

A common surprise: you generated a file, downloaded something, or installed a
tool in yesterday's session, then start a new session today and it's all gone.
Same for dev servers you left running and credentials you entered mid-session.

## Workaround

- **Code and content** — get it into the repo (commit + push) or attach it to
  the session so it lives outside the VM.
- **Tools and setup** — anything every session needs belongs in the
  environment blueprint, which rebuilds the snapshot all sessions boot from.
- **Credentials** — saved org/user secrets persist across sessions; values you
  typed in interactively don't.
- **Long-running services** — don't rely on anything still running after the
  session ends; deploy somewhere real or expect to restart it.

## Context

This is by design — isolation is what makes sessions safe to run unattended and
in parallel. It only bites when you treat the VM like a persistent dev box.
