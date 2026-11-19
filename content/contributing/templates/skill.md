---
title: Skill entry template
description: Template for a complete, tested SKILL.md with a public source and a specific use case.
weight: 7
---

Use this for an individual skill in `content/tools/`. No star count or release
age is required. Supply a public source, a real test with its outcome, and
limitations; do not claim it works across clients you have not tried.

````markdown
---
title: <Skill name>
description: <Specific use case>
author: <GitHub username>
weight: <list order>
---

<Who this helps and when to use it.>

Curated for Awesome Devin. Source: <public source link>.

## What it does

<What the procedure does, and what it deliberately leaves to the reviewer.>

## Installation

Save this as `.agents/skills/<skill-name>/SKILL.md`:

```text
---
name: <skill-name>
description: <What it does and when to invoke it>
---

<The complete procedure; no omitted steps or placeholders in a submitted skill.>
```

## When to use it

<A specific task and input.>

## Test and outcome

<What you tested, the actual result, and anything you did not check.>

## Limitations

<Dependencies, permissions, supported clients, and failure cases.>
````

## Guidelines

- Include the full skill, not only a link or an install command.
- Keep secrets out of examples. Review scripts before asking others to run them.
- State test evidence honestly; a valid file format is not a successful agent run.
- Link official format and loading rules instead of duplicating their reference docs.
