---
title: Start here
description: A map of Devin's surfaces and building blocks, with links to the official docs.
weight: -1
---

New to Devin? Start by choosing where the work should run, then add only the
building blocks your task needs. This is a map, not a second manual: the linked
official docs own the setup steps and current product behavior.

## Choose work you can verify

Devin is a coding agent: it can investigate code, make changes, run checks, and
prepare PRs. Start with work that has clear success criteria, relevant examples,
and a testable outcome; see [When to use Devin](https://docs.devin.ai/essential-guidelines/when-to-use-devin).
Vague goals and large, unsplit requests are poor starting points. Do not treat
it as an unattended authority on correctness or security: the
[security guide](https://docs.devin.ai/admin/security) warns about bugs,
hallucinations, and insecure suggestions.

## Your first task: a small bug fix

1. Pick a reproducible bug in a repository you are allowed to connect. Write
   down the current behavior, expected behavior, and a check that distinguishes them.
2. Complete [repository setup](https://docs.devin.ai/onboard-devin/environment)
   and check [data-handling requirements](../faq/security-and-data) before granting access.
3. Follow [Your first session](https://docs.devin.ai/get-started/first-run):
   use Ask to locate the relevant code and agree a plan before starting implementation.
4. Give Agent a bounded brief: fix that bug, add a regression test, run the
   relevant checks, report their actual output, and open a PR without merging it.
5. Review the diff and evidence against the original bug. If the result is
   incomplete, narrow the next request rather than adding unrelated work.

Trying this as a team? Use the [pilot checklist](../tips/cloud/team-pilot) and
[PR review checklist](../tips/cloud/review-devin-prs) before widening the rollout.

## Three surfaces

- **Cloud** — delegate work to a remote agent rather than run it in your local
  checkout. Start with the [Devin introduction](https://docs.devin.ai/get-started/devin-intro).
- **Desktop** — use an editor to work alongside local and cloud agents.
  See [Introducing Devin Desktop](https://docs.devin.ai/desktop/introducing-devin-desktop).
- **CLI** — use a terminal-based agent in your own project directory.
  See the [CLI quickstart](https://docs.devin.ai/cli/index).

## Building blocks

- **Sessions** — a unit of work you can give a goal and follow as it runs.
  Try [your first session](https://docs.devin.ai/get-started/first-run) before building a larger workflow.
- **Knowledge** — the legacy context feature, now deprecated in favor of skills
  in plugins. See [Knowledge onboarding](https://docs.devin.ai/onboard-devin/knowledge-onboarding)
  and the [inherited-knowledge checklist](../tips/cloud/knowledge-migration).
- **Playbooks** — reusable prompts being moved to skills; new accounts may not
  have them. See [Using playbooks](https://docs.devin.ai/product-guides/using-playbooks)
  and [preserving a playbook's guardrails](../tips/cloud/playbook-to-skill).
- **Skills** — procedures loaded when relevant; a better home for a long
  checklist than an always-on instruction file. See [Devin Skills](https://docs.devin.ai/product-guides/skills)
  and our [small repository example](../tools/agent-skills).
- **Environment blueprints and snapshots** — blueprints describe the working
  environment; builds produce snapshots for sessions to start from. See
  [Environment blueprints](https://docs.devin.ai/onboard-devin/environment/blueprints)
  before relying on a dependency you installed in one session.
- **MCP** — connects an agent to external tools and data sources; it is not a
  replacement for task instructions. See [MCP servers and marketplace](https://docs.devin.ai/work-with-devin/mcp).
- **Secrets** — credentials belong in the dedicated secret store, not in a
  checked-in skill or prompt example. See [Secrets & site cookies](https://docs.devin.ai/product-guides/secrets).
- **Automations and schedules** — start sessions from events or at a chosen
  time. See [Automations](https://docs.devin.ai/product-guides/automations);
  [Scheduled sessions](https://docs.devin.ai/product-guides/scheduled-sessions) explains the legacy scheduling feature.
- **API** — integrate Devin into your own software rather than starting work
  manually in the UI. See the [API overview](https://docs.devin.ai/api-reference/overview) for access and version-specific references.

## Where this site fits

Use the official docs for product setup. Come back here for [tips](../tips),
[gotchas](../gotchas), and [tools](../tools) when deciding how to apply it.
If you are unsure where to ask a question, start with [where to get help](../faq/where-to-get-help).
