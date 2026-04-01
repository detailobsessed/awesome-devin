# OSOP Session Logging for Windsurf

Record your AI coding sessions as structured, portable workflow logs using the [OSOP protocol](https://github.com/Archie0125/osop-spec).

## What is OSOP Session Logging?

OSOP (Open Standard for Orchestration Protocols) session logging captures what your AI agent actually did during a coding session — every step, tool call, and decision — as a pair of structured YAML files:

- **`.osop`** — the workflow definition (what steps were taken)
- **`.osoplog.yaml`** — the execution record (timing, tokens, results)

This gives you auditable, visualizable records of AI-assisted work that you can share, compare, and analyze.

## How to Use

1. Copy the contents of [`global_rules.md`](global_rules.md) into your Windsurf global rules following [Windsurf's memories documentation](https://docs.codeium.com/windsurf/memories)
2. After completing multi-step tasks, Cascade will automatically produce `.osop` and `.osoplog.yaml` files
3. Visualize your session logs at [osop-editor.vercel.app](https://osop-editor.vercel.app)

## Contents

- `global_rules.md` — Global rules that instruct Cascade to produce OSOP session logs after significant tasks

## Resources

See the Resources section in [`global_rules.md`](global_rules.md#resources) for links to the OSOP spec, visual editor, and documentation.
