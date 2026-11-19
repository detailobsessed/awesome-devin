---
title: Review inherited knowledge before trusting it
description: A checklist for separating current project facts from stale instructions during the knowledge-to-skills transition.
author: detailobsessed
surface: cloud
weight: 7
---

Treat inherited Knowledge as a set of claims to check, not a setup guarantee.
The [Knowledge onboarding guide](https://docs.devin.ai/onboard-devin/knowledge-onboarding)
now marks Knowledge deprecated and describes migration to skills in plugins.
Use skills for new guidance instead of building a second collection of notes.

## Audit one instruction at a time

For each inherited note, make a small review record:

```text
Instruction:
Repository and task types it applies to:
Evidence in current code or configuration:
Last check performed and its actual result:
Replacement skill or reference document:
Unverified assumptions / reason to remove it:
```

Check commands against the current lockfile and scripts, and paths against the
current repository. Do not carry a remembered workaround forward merely because
an earlier session wrote it down. Put procedures in a
[skill](https://docs.devin.ai/product-guides/skills); keep credentials in
[Secrets](https://docs.devin.ai/product-guides/secrets).

## Keep environment facts with the environment

A note saying a dependency is installed is not proof it exists in the next
session. Use [blueprints and snapshots](https://docs.devin.ai/onboard-devin/environment/blueprints)
for repeatable setup, then check the actual tool and version in a new session.
This audit is a suggested maintenance routine, not an assertion that migration
loses data or that a particular note is stale.
