---
title: Review Devin PRs against the original task
description: A team review checklist that separates generated claims from code and test evidence.
author: detailobsessed
surface: cloud
weight: 5
---

Keep the original acceptance criteria beside the diff. A confident session
summary and a green automated review are not substitutes for understanding what
changed. This is a suggested review checklist, not a claim about measured defect
rates; the official [SDLC guide](https://docs.devin.ai/essential-guidelines/sdlc-integration)
places human review before merge.

## Ask for a reviewable handoff

Include this in the task brief, adapting the checks to your repository:

```text
Before handing off the PR, list the acceptance criteria and where each is
implemented. Include actual output from the relevant checks, any checks you
could not run, and remaining risks. Separate observed results from assumptions.
Do not merge the PR.
```

## Review in this order

1. **Scope:** compare the diff with the request. Question unrelated edits,
   dependency changes, or configuration changes before reviewing implementation.
2. **Behavior:** follow the changed path through callers and error handling.
   Check normal, empty-input where applicable, and failure cases rather than
   relying only on the newly added happy-path test.
3. **Evidence:** inspect CI and test output. If a check was skipped, decide
   whether it blocks merge; do not interpret a missing result as a pass.
4. **Access and data:** inspect new network calls, credentials handling, and
   permission changes against your team's policy.
5. **Remaining findings:** resolve each actionable finding or explain why it
   does not apply. Keep a named human accountable for the merge decision.

## Where Devin Review fits

Use [Devin Review](https://docs.devin.ai/work-with-devin/devin-review) for an
additional pass and navigation through related changes. The linked reference
covers requesting a review, supported hosts, permissions, and automatic review
settings; this checklist does not require enabling automatic fixes.

Check a reported finding against the actual code path before acting on it.
After a fix, review the new diff and relevant checks again. Neither an automated
finding nor its absence establishes correctness. Retain your normal branch
protections and security review as recommended by
[Security at Cognition](https://docs.devin.ai/admin/security).
