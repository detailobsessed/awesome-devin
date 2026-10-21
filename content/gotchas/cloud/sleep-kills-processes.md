---
title: A sleeping session loses all running processes
description: When a Devin Cloud session sleeps, its VM shuts down — dev servers, shells, and browsers die, though the disk is preserved.
author: detailobsessed
surface: cloud
weight: 2
---

When a session goes to sleep, the VM behind it shuts down. Everything in-memory
dies: dev servers, interactive shells, browser tabs, background jobs. Only the
disk survives — files are still there when it wakes.

## When it happens

You ask Devin to start a dev server, come back hours later to a sleeping
session, and the preview URL is dead. Or a session resumes after sleep and
suddenly can't reach the database/docker container it started earlier — the
process is gone even though its files remain.

## Workaround

On wake, whatever you need running has to be started again — that's normal, not
a bug. If Devin left a server running for you, ask it to restart it after the
session resumes. For anything you need *continuously* available, a session VM
is the wrong home — deploy it properly instead.

## Context

The session disk persists across sleeps, so checkouts, build artifacts, and
installed packages survive. It's processes and browser state that don't. This
also means OS temp directories can be wiped — don't rely on `/tmp` for anything
you need to keep.
