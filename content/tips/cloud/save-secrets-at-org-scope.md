---
title: Save shared secrets once, at org scope
description: Give Devin a secret one time, save it as an org secret, and every future session can use it by name — no re-pasting, no secrets in prompts.
author: detailobsessed
surface: cloud
weight: 3
---

Anything Devin needs more than once — deploy tokens, API keys for third-party
services, registry credentials — should be a saved org secret, not something
you paste into a prompt.

## The setup

Mid-session, Devin needs a credential to continue (e.g. a token to hit an
internal API, or a deploy key). The obvious move — pasting the key into the
chat — works once, then you're doing it again next session, and the key is now
sitting in a session transcript.

## What works

When Devin asks for a secret, provide it through the secret prompt and save it
at **org scope** (or scope it to the repo if only that repo needs it). From then
on, every session in the org can reference it by name — Devin binds it into
shell commands itself and the value never appears in prompts or logs.

```text
Use the secret GITHUB_PACKAGES_TOKEN to authenticate npm install against
the private registry.
```

## Why this works

You pay the credential cost once instead of every session, and the secret stays
out of transcripts and command history. It also survives team changes — a
teammate's session can use the same credential without you forwarding keys.

## Variations

- **User scope** for credentials that are yours alone (your personal GitHub
  login, personal API tokens).
- **Org scope** for shared infrastructure — the account or token any Devin
  session should be able to use.
- **Repo scope** for secrets only one repository needs, like a deploy key.
