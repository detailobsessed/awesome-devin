---
title: Rules that exist but don't fire
description: A rule file can be present and still never apply — usually because of its activation trigger, or because it's lost inside an over-long rules file.
author: detailobsessed
surface: desktop
weight: 1
---

You wrote a rule, the file is definitely there, and the agent behaves like it
never read it. Almost always one of two things: the rule's activation trigger
keeps it from loading, or it's buried in a rule file too long to be followed
reliably.

## When it happens

You set up `.devin/rules/` or carried over `.windsurf/rules/`, and a specific
rule — say, a naming convention or "never do X" — gets ignored in situations
where it clearly should apply.

## Workaround

- **Check the trigger first.** In `.devin/rules/*.md`, the `trigger` frontmatter
  decides when a rule applies: `always_on` fires every time, but `manual`
  rules only apply when invoked, `model_decision` rules only when the agent
  thinks they're relevant, and `glob` rules only for matching files. A rule
  that must *always* apply needs `trigger: always_on`.
- **Then check the size.** Even an always-on rule gets diluted inside a long
  file. Rules that are short and specific ("use pnpm") are followed far more
  reliably than long prose or catch-all files.
- **Nudge it in the moment.** If you suspect a rule wasn't respected, asking
  the agent to "check your guidelines and revise" usually gets it back on
  track — a trick the community has used since the Windsurf days.

## Context

Devin Desktop still reads legacy `.windsurfrules` and `.windsurf/rules/`
alongside `.devin/`, so file location is rarely the problem — activation and
attention are. The full trigger and precedence details are in the official
[memories & rules docs](https://docs.devin.ai/desktop/cascade/memories).
