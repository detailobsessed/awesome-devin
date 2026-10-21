---
title: Unattended runs may declare victory early
description: In non-interactive runs the CLI can report success based on intent rather than proof — give it explicit verification commands in the task itself.
author: detailobsessed
surface: cli
weight: 2
---

When the CLI runs autonomously on a task, there's no human in the loop to say
"wait, did you actually check that?" Under-specified tasks can finish with a
confident summary that describes what was *supposed* to happen rather than what
was verified.

## When it happens

You fire off a one-shot task — a refactor, a fix, a migration — and come back
to "Done!" where the tests were never run, or where it hit an error partway and
worked around it silently.

## Workaround

Build the check into the task, every time:

```text
Fix the flaky login test in tests/auth.spec.ts.

Do not finish until `npm run test -- auth` passes and `npm run lint` is
clean. Report what you ran and its output — if something can't be verified,
say so explicitly.
```

The important bits: name the command, name the expected result, and ask it to
report the evidence. "If you can't verify it, say so" matters — it turns an
unverifiable claim into an honest admission instead of a silent skip.

## Context

This isn't unique to Devin — it's the failure mode of every autonomous coding
agent, and it's the CLI counterpart of the Cloud tip on
[verifiable done criteria]({{< ref "tips/cloud/verifiable-done" >}}). Interactive CLI
sessions self-correct because you're watching; unattended runs need the bar
stated in the prompt.
