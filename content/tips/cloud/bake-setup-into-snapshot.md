---
title: Bake slow setup into the environment snapshot
description: If Devin spends the first minutes of every session installing dependencies, move that setup into the repo's environment blueprint so sessions start warm.
author: detailobsessed
surface: cloud
weight: 2
---

Every Devin Cloud session boots a fresh VM. If your project takes five minutes
of `apt install`, `pip install`, or toolchain setup before Devin can even look
at the task, you're paying that cost on every single session — and occasionally
watching it fail differently each time.

## The setup

Watch a session's first few steps. If the same install/configure commands run at
the start of every session, that's setup that belongs in the environment, not in
the session.

## What works

Devin's dev environment is defined by a **blueprint** — a YAML config per repo
(or org-wide) with the commands that build the VM image — which is then cached
as a **snapshot** that future sessions boot from. You don't have to write it
yourself: after a session where Devin figured out the setup, just ask it to
propose a blueprint update. It sends an approval card in the session — approve
it once, and every future session on that repo starts with everything installed.

```text
Save this setup to the environment blueprint so future sessions start with
it pre-installed.
```

## Why this works

Setup you verified once runs unattended later — and a cached snapshot means
sessions go straight to the task instead of re-deriving the environment. It's
the single biggest lever for making cloud sessions feel fast.

## Variations

- Org-wide tools (things every repo needs) belong in the org blueprint;
  repo-specific setup belongs in the repo blueprint.
- Keep secrets out of the blueprint — reference them as `$VARIABLE_NAME` and
  save them as org secrets instead.
