---
title: Contributing
description: How to contribute to Awesome Devin.
weight: 7
---

# Contributing

Awesome Devin is a community project. Every page here was contributed by someone
who used Devin, hit a wall, figured something out, and took the time to write it
up.

## Current status: curated, not yet open

This site is in its early stages. The content, structure, and quality standards
are being established by the maintainer with input from the community. **Public
contributions are not yet being accepted** — we're building the foundation first,
getting it right, and will open up to community contributions once the structure
is stable.

If you have something you'd like to contribute, you're welcome to open an issue
to discuss it. We'll start accepting PRs once the foundation is solid.

## Quality standards

When the site does open to contributions, here's what the bar will be. We're
putting this here now so the expectations are clear from the start.

### Tips & Gotchas

**Always welcome.** No maturity bar — these are original content, not links to
external projects.

- Must describe a real situation you personally encountered, not a hypothetical
- Must be specific: "When refactoring files over 500 lines, Devin drops
  imports — here's the workaround" is useful. "Devin sometimes hallucinates" is
  not
- Must not duplicate [docs.devin.ai](https://docs.devin.ai) — link to the
  official docs where they exist, add only what they don't cover
- Gotchas must include context (what triggered it) and a workaround if you found
  one (or a clear statement that there isn't one yet)
- Bug reports don't belong here — file those with Cognition support

### FAQ entries

**Curated by the maintainer, sourced from the community.**

- One question per page, linkable and searchable
- Answer reflects what actually works, not what the docs say *should* work
- Source the Discord thread or conversation if possible (so others can verify
  context)
- If the official docs answer the question, we link there instead of duplicating

### Rules

**Welcome.** No maturity bar, but must be original content.

- Full rules text must be inline (not just a link to your repo) — so people can
  read and decide without clicking away
- Must include: what it does, why you wrote it, how to install, any limitations
- General-purpose rules preferred over niche/proprietary ones
- A rule that "activates my specific SaaS product's MCP tools" is a directory
  entry for your product, not a rule — submit it under MCP Servers instead

### MCP servers & Tools

**Subject to a maturity bar.** These are links to external projects, so they
need external validation.

- Must have community validation: **50+ GitHub stars OR 3+ months since first
  release OR documented production use**
- Entry must be written objectively: what it does, installation, config,
  limitations — not marketing copy
- You can submit your own project, but it must meet the bar like anything else
- Must be actively maintained (no abandoned projects)
- If the only person who thinks it belongs here is you, it probably doesn't
  belong here yet

### What gets rejected

- "Here's my repo, add it to the list" with no context
- Projects created in the last week with no users
- Marketing copy or sales pitches
- Niche tools that only help the author's specific use case
- Anything that duplicates docs.devin.ai without adding community knowledge
- Drive-by link drops with no installation guide or honest assessment

## How entries should be written

Each entry in the directory sections (Rules, MCP, Tools) gets its own page with
a consistent structure:

1. **What it does** — one paragraph, objective
2. **Installation/setup** — actual config snippets, not "see the docs"
3. **Limitations** — what it doesn't do, what to watch out for
4. **Maturity** (for MCP/Tools) — stars, age, maintenance status
5. **Link to source** — so people can verify and contribute upstream

Templates for each content type are available in the
[repository](https://github.com/detailobsessed/awesome-devin/tree/main/content/contributing/templates).

## How to run the site locally

```bash
brew install hugo
git clone https://github.com/detailobsessed/awesome-devin.git
cd awesome-devin
hugo server
```

The site will be available at `http://localhost:1313/awesome-devin/`.

## License

All contributions are released under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
(Public Domain). No attribution required, but appreciated.
