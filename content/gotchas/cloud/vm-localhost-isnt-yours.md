---
title: Devin's localhost isn't your localhost
description: A dev server running on Devin's VM isn't reachable from your machine — links to localhost won't open for you.
author: detailobsessed
surface: cloud
weight: 3
---

When Devin starts a dev server and hands you `http://localhost:3000`, that
localhost is on *its* VM, not your laptop. Clicking it gives you nothing — your
browser looks for a server on your own machine, where there isn't one.

## When it happens

Devin says "the app is running at localhost:5173" — and for you, it's a dead
link. This confuses everyone the first time because the URL looks completely
normal.

## Workaround

Two good options, and Devin can drive both:

- **Browser preview** — ask Devin to share a preview of the port. The webapp
  exposes the VM's port through an "Open preview" link that works in your
  browser.
- **Desktop tab** — the webapp's Desktop view lets you watch and interact with
  Devin's actual screen, including its browser.

## Context

This applies to everything bound to the VM's loopback: dev servers, local
databases, Jupyter, admin UIs. If a session is network-restricted, previews
still work — they don't require the VM to be reachable from the internet.
