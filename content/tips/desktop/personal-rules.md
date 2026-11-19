---
title: Keep personal Desktop rules out of shared project policy
description: Use local instructions for personal preferences without committing them as team rules.
author: detailobsessed
surface: desktop
weight: 2
---

If your review preference is personal rather than team policy, do not put it in
the shared `AGENTS.md` by default. Current Devin Local documents
`AGENTS.local.md` for personal instructions; see
[Desktop customizations](https://docs.devin.ai/desktop/devin-local/customizations).

## A small local example

Create `AGENTS.local.md` at the workspace root:

```text
When handing changes back to me, summarize the diff by file and list the checks
you actually ran. Ask before opening an external review request.
```

Exclude it using your repository's local `.git/info/exclude` and check
`git status --short` before committing. Do not rely on a filename alone to
keep personal content out of version control. If the file is already tracked,
adding an ignore rule does not untrack it; coordinate before removing shared files.

## When the preference becomes a team rule

Discuss it first, then move only the agreed instructions into the shared file.
Keep occasional procedures in skills rather than a long always-on ruleset.
This is a suggested separation of personal and shared policy; the official guide
owns loading and precedence rules. Local instructions are not a place for secrets
and do not enforce permissions.
