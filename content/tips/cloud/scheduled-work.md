---
title: Prove a scheduled task manually before automating it
description: Keep recurring sessions bounded, observable, and safe to repeat.
author: detailobsessed
surface: cloud
weight: 8
---

A schedule repeats your instructions, including their omissions. Before adding
one, run the same bounded task manually and review its output. Use the official
[Automations guide](https://docs.devin.ai/product-guides/automations) for trigger
configuration; [Scheduled sessions](https://docs.devin.ai/product-guides/scheduled-sessions)
explains the legacy feature. This is a proposed rollout checklist, not measured
advice about a particular team's deployment.

## Start with a report, not an automatic change

For example, adapt this brief for a recurring dependency check:

```text
Inspect the repository's dependency files and current update policy.
Report candidate updates with source links and the checks each would need.
If the repository, policy, or required service is inaccessible, report that
blocker and stop. Do not infer that there are no updates.
Do not install packages, open duplicate issues, change files, or merge code.
Include the checked revision and unresolved uncertainty in the report.
```

Before scheduling it, decide who reads the report, how failures are noticed,
and how to disable the trigger. Check the selected repository, permissions,
secrets, and usage limits. Test the missing-access case too; a silent failure
should not look like a clean report.

## Expand only after reviewing evidence

If you later permit writes, define how a repeated or overlapping run detects
work already in progress. Keep a named owner for merge decisions and a stop
condition for unexpected usage. For programmatic management, start from the
[API overview](https://docs.devin.ai/api-reference/overview), not copied tokens
in a scheduled prompt. Automation is not a substitute for a verified environment
or a working credential.
