# OSOP Session Logging

After completing a significant task (multi-step work, not trivial one-liners), produce an **OSOP session log** so there is a structured, portable record of what was done.

1. **Create a `.osop` file** describing the workflow you followed
2. **Create a `.osoplog.yaml` file** recording what you actually did
3. **Tell the user** to open both files at https://osop-editor.vercel.app

## .osop format (workflow definition)

```yaml
osop_version: "1.0"
id: "session-<short-description>"
name: "<What you did>"
description: "<1-2 sentence summary>"
version: "1.0.0"
tags: [windsurf, <relevant-tags>]

nodes:
  - id: "<step-id>"
    type: "<node-type>"   # human, agent, mcp, cli, api, cicd, git, db, system, event
    name: "<Step Name>"
    description: "<What this step does>"

edges:
  - from: "<step-a>"
    to: "<step-b>"
    mode: "sequential"    # or parallel, conditional, fallback, loop, spawn
```

## .osoplog.yaml format (execution record)

```yaml
osoplog_version: "1.0"
run_id: "<uuid>"
workflow_id: "<matches .osop id>"
status: "COMPLETED"
started_at: "<ISO timestamp>"
ended_at: "<ISO timestamp>"
duration_ms: <total ms>

runtime:
  agent: "windsurf"
  model: "<model used>"

node_records:
  - node_id: "<step-id>"
    status: "COMPLETED"
    started_at: "<ISO>"
    ended_at: "<ISO>"
    duration_ms: <ms>
    tools_used:
      - { tool: "<tool-name>", calls: <n> }
    ai_metadata:
      model: "<model>"
      prompt_tokens: <n>
      completion_tokens: <n>

result_summary: "<What was accomplished>"
```

## When to generate session logs

- After completing multi-step tasks (3+ steps)
- After debugging sessions
- After feature implementations
- After refactoring work

## Resources

- [OSOP Spec](https://github.com/Archie0125/osop-spec) — protocol definition
- [Visual Editor](https://osop-editor.vercel.app) — visualize and analyze workflows
- [Website](https://osop-website.vercel.app) — docs, examples, use cases
