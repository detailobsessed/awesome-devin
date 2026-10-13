---
title: Verify-before-done rules
description: A compact ruleset that stops agents from claiming success without evidence — run the checks, report the output, admit what wasn't verified.
author: detailobsessed
weight: 2
---

A short ruleset for keeping autonomous runs honest. It exists because "done"
is easy to claim and expensive to check after the fact — these rules make the
verification part of the definition of done.

## The rules

```markdown
# Verification rules

- Never claim a task is complete without running its verification:
  the tests, build, lint, or behavior check relevant to the change.
- In your final summary, state what you ran and what the output was.
  Evidence, not adjectives.
- If something can't be verified — say so explicitly, and say what you
  did instead. An honest "untested" beats a confident guess.
- Don't fix unrelated failures you discover while verifying. Report them;
  only fix what the task asked for.
- If your own change breaks an existing check, the task isn't done —
  fix the regression or revert.
```

## How to install

Drop it wherever rules live on your surface — `.devin/rules/verify-before-done.md`
with `trigger: always_on` frontmatter for Devin Desktop or CLI, or into your
project `AGENTS.md`. On Cloud, this works even better as prompt text: end the
task with "don't finish until X passes."

## Why this exists

Every autonomous coding agent shares the failure mode where it finishes with
confidence instead of proof. The Discord sees it weekly: a "done" that wasn't.
These rules don't make the agent smarter — they make "done" mean something
checkable.

## Limitations

- Verification costs time — on trivially small tasks the run-the-checks
  overhead can exceed the fix itself. Acceptable trade for anything real.
- "Don't fix unrelated failures" is deliberate scope control; if you *want*
  opportunistic fixes, remove that line.
