---
title: Run a small, reviewable team pilot
description: A proposed pilot checklist for testing task fit, review effort, and usage before a wider rollout.
author: detailobsessed
surface: cloud
weight: 4
---

A pilot should answer whether Devin helps your team ship reviewed changes, not
whether it can produce an impressive demo. The checklist below is a suggested
evaluation plan, not a report of measured results or a promised productivity gain.
It applies the official [task-selection guidance](https://docs.devin.ai/essential-guidelines/when-to-use-devin)
to a team decision.

## Before starting

Choose a short trial window with a review date, an owner, a reviewer, and a usage
ceiling you can afford. Complete your [security and data review](../../../faq/security-and-data),
then verify [repository environment setup](https://docs.devin.ai/onboard-devin/environment)
before attributing setup failures to task difficulty.

## Pick tasks you can judge

Start with a reproducible bug with a failing test, a missing test around existing
behavior, or a small change with a clear example to follow. These are candidate
tasks, not a claim that every such ticket will succeed. Reject tickets whose
acceptance criteria the reviewer cannot state yet; use
[Ask Devin](https://docs.devin.ai/work-with-devin/ask-devin) to scope them first.

Keep unrelated work in separate sessions. Leave ambiguous product decisions,
unbounded rewrites, and changes you cannot safely test out of the first batch.
The official guidance emphasizes clear success criteria, sufficient context,
and splitting large requests; it does not remove the need for human judgment.

## Record the same evidence for each attempt

| Record | Question it answers |
| --- | --- |
| Task and acceptance checks | Was the goal clear before the session started? |
| Environment failures and human interventions | What work did the team still have to do? |
| Test output and reviewer findings | Does the change work, including failure cases? |
| Review/rework effort and final outcome | Was the PR useful after review, not just generated? |
| Actual usage | Is this task type worth repeating within the budget? |

Use [Session Insights](https://docs.devin.ai/product-guides/session-insights)
and the [billing guide](../../../faq/what-are-acus) for usage evidence. Record
failed and abandoned attempts too; counting only merged PRs hides the cost of
finding suitable tasks.

## Decide what to roll out

At the review date, compare the evidence against your own agreed acceptance
criteria. Good looks like correct, reviewable changes with understood usage and
acceptable human effort, not a target number of sessions or lines generated.
If setup or scope was the problem, fix that and repeat the relevant task type
before expanding access.

For a wider rollout, assign reviewers, retain existing merge protections, and
capture verified repo-specific procedures as
[skills](https://docs.devin.ai/product-guides/skills). Use the official
[team invitation guide](https://docs.devin.ai/product-guides/invite-team)
for membership and roles. Start with task types the pilot actually supported;
do not turn a successful small fix into permission for unattended production changes.
