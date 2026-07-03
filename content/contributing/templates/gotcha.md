---
title: Gotcha template
description: Template for contributing a gotcha or caveat.
weight: 2
---

# Gotcha page template

Copy this template, fill it in, and place it in the appropriate surface directory
under `content/gotchas/`.

```markdown
---
title: <Short, descriptive title of the surprising behavior>
description: <One-line summary for search>
author: <your GitHub username>
surface: cloud | desktop | cli
weight: <lower = higher in list>
---

# <Title>

<One paragraph: what's the surprising behavior, in plain language.>

## When it happens

<The specific situation that triggers it. Enough detail that someone else can
recognize the same situation. What were you trying to do? What did you expect?
What actually happened?>

## Workaround

<What you did about it, if anything. If there's no workaround yet, say so
clearly — that's useful information too.>

## Context

<Optional: any additional detail — whether this is a known bug, whether it's
documented behavior, whether it's surface-specific, etc.>
```

## Guidelines

- **This is not a bug report.** Don't file gotchas here for things that should
  go to Cognition support. This is for things people will encounter and want to
  know about.
- **Be honest, not dramatic.** "Devin drops imports when refactoring large
  files" is useful. "Devin is terrible at refactoring" is not.
- **Include the workaround if you found one.** If you didn't, say so — someone
  else might, and the gotcha is still useful to document.
