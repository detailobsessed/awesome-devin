---
title: Tell Devin how to prove it's done
description: Include explicit verification criteria in your prompt — the exact commands to run and what the end state should look like.
author: detailobsessed
surface: cloud
weight: 1
---

Devin Cloud works unattended, so "done" is whatever your prompt says it is. If
the prompt only describes the goal, Devin decides for itself when it's finished —
and its idea of verified may be thinner than yours. The fix is to state the
verification explicitly, the same way you'd write acceptance criteria on a
ticket.

## The setup

You're handing Devin a real task — a bug fix, a feature, a migration — and you
want a PR you can trust without re-checking every step yourself.

## What works

End the prompt with the proof you expect, not just the outcome:

```text
Fix the timezone bug in src/utils/dates.ts where dates render one day early
for users west of UTC.

Done when:
- `npm run test -- dates` passes (add a regression test for UTC-8)
- `npm run lint` and `npm run build` are clean
- the PR description says what changed and how you verified it
```

```text
Migrate the settings page to the new API client.

Done when:
- `pnpm vitest run settings` passes
- the page renders correctly — include a screenshot in your final message
- no usage of `legacyApiClient` remains under src/pages/settings
```

## Why this works

Devin will run the verification you name and report the result honestly. Without
it, "it should work" is an easy bar to hit; "CI passes and here's a screenshot"
is not. It also makes review faster — the evidence arrives with the PR instead
of you having to ask for it.

## Variations

- For UI work, ask for a screenshot or a description of what you should see.
- For tasks you can't write a check for, say how you'd verify it by hand — that
  description is often enough for Devin to construct the check itself.
- If the task is exploratory and you *don't* want a PR, say so — otherwise the
  session may end in a pull request you didn't ask for.
