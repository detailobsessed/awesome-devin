# Moyu — Anti-Over-Engineering Rules

**Moyu** (摸鱼) is a set of rules that prevents AI coding assistants from over-engineering. It teaches restraint: only change what was asked, prefer the simplest solution, and ask when unsure.

## What's Inside

- `Global-AI-rules/moyu/global-rules.md` — Global rules to prevent over-engineering in all workspaces.

## How to Use

Copy the global rules file to your Windsurf environment:

```bash
# Option 1: Copy as global rules (applies to all workspaces)
cp memories/uucz/Global-AI-rules/moyu/global-rules.md ~/.windsurf/global_rules.md

# Option 2: Copy as workspace rules (applies to current project only)
cp memories/uucz/Global-AI-rules/moyu/global-rules.md .windsurfrules
```

Or follow the [official Windsurf documentation](https://docs.codeium.com/windsurf/memories) for setup instructions.

## Why

AI coding assistants tend to over-engineer: fixing one bug but "improving" three others, adding unrequested abstractions, writing comments nobody asked for. Moyu stops this by enforcing minimal, focused changes.

## Learn More

- [GitHub: uucz/moyu](https://github.com/uucz/moyu) — Full documentation, benchmarks, and multi-platform support
