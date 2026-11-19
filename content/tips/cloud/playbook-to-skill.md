---
title: Keep a playbook's stop conditions when moving to skills
description: A small copyable review prompt for existing playbooks, with an explicit route for new accounts.
author: detailobsessed
surface: cloud
weight: 6
---

Before investing in a new playbook, check the
[official migration notice](https://docs.devin.ai/product-guides/using-playbooks).
Playbooks are moving to skills, and new accounts may not have Playbooks at all.
Use a [skill](../../../tools/review-test-plan) for new work rather than trying
to recreate a missing settings page.

## A small prompt worth preserving

For an account that still has playbooks, the
[creation guide](https://docs.devin.ai/product-guides/creating-playbooks)
explains how to save a reusable prompt. Here is a proposed read-only review
brief to adapt, not a report of a production-tested workflow:

```text
Outcome: review the supplied PR against its original acceptance criteria.
Required input: the PR link and the original task description.
If either is missing or inaccessible, report that and stop.

Procedure:
1. Read the task, diff, existing tests, and current CI results.
2. Trace changed behavior through callers and failure paths.
3. For each finding, cite a file and explain a reachable failing scenario.
4. Separate verified findings from questions that need more evidence.

Delivery: report scope gaps, test gaps, and unresolved risks.
Do not edit code, post reviews, or merge anything.
Do not call missing CI results a pass.
```

## Migrate the guardrails, not just the happy path

When converting the prompt into `SKILL.md`, preserve its required inputs,
stop conditions, and forbidden actions. Give it a description that states when
it applies; do not turn the whole prompt into an always-on rule. Compare the
old and new procedure on the same bounded input before retiring the old one.
Automatic migration is not evidence that the resulting behavior was tested.

The text above does not enforce read-only access. Keep permissions and human
review appropriate to the task; the prompt alone is not a security boundary.
