---
title: Review-test-plan skill
description: A complete SKILL.md for checking a proposed change's test coverage before implementation.
author: detailobsessed
weight: 5
---

Use this small skill when a proposed change has a happy-path test but no clear
plan for empty inputs or failures. It produces a reviewable test plan, not code
or a claim that tests passed.

Curated for Awesome Devin. Source: the complete file below, also included in
the [site content PR](https://github.com/detailobsessed/awesome-devin/pull/355/files).

## What it does

The procedure asks the agent to connect each proposed case to code and existing
tests. It explicitly handles missing context instead of filling the gaps with
invented commands or results. See [Devin Skills](https://docs.devin.ai/product-guides/skills)
for discovery and invocation, and the [format specification](https://agentskills.io/specification).

## Installation

Save the entire block as `.agents/skills/review-test-plan/SKILL.md` in your repo:

```text
---
name: review-test-plan
description: Review a proposed code change for missing tests before implementation.
---

1. Read the proposed change and the existing tests for the affected behavior.
   If no change is specified, ask for it and stop rather than guessing scope.
2. Identify a normal case, an empty-input case where applicable, and an error
   case. For each, state the expected result and cite the relevant code path.
   If a case does not apply, explain why; do not invent an input or error path.
3. Map each case to existing coverage. Propose only the missing tests, naming
   likely test files and the assertion that would distinguish correct behavior.
4. If code or tests are unavailable, list what is missing and mark conclusions
   provisional. Never invent file paths, commands, or test results.
5. Report the plan without changing files or claiming any tests have run.
```

Commit the file after review. Ask the agent to use `review-test-plan` with a
specific proposed diff; check that it actually reads the relevant files.

## When to use it

Use it before implementing a bounded change, or when reviewing a task brief
whose acceptance checks are vague. Skip it when the task is only prose editing
and there is no behavior under test.

## Test and outcome

Manual checklist walkthrough against this site's `entry-list` shortcode:
normal input should list titles and links; an empty section should show
`No entries yet.`; a missing description should leave a link without a trailing
separator. Missing context should produce a request for the diff, not a fabricated
test plan. This is a manual walkthrough, not an agent execution benchmark;
automatic activation and behavior in other clients remain unverified.

## Limitations

Instructions do not enforce read-only behavior or guarantee coverage. A reviewer
still needs to validate proposed assertions. The skill does not run tests or
prove a change is safe, and it needs access to the relevant code and tests.
