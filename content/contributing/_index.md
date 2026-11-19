---
title: Contributing
description: How to contribute to Awesome Devin.
weight: 7
---

Awesome Devin is a community project with maintainer-curated entries and
community suggestions. Proposed workflows are labeled as such; they are not
presented as measured field results.

## Current status: curated, not yet open

This site is in its early stages. The content, structure, and quality standards
are being established by the maintainer with input from the community. **Public
contributions are not yet being accepted** — we're building the foundation first,
getting it right, and will open up to community contributions once the structure
is stable.

If you have something you'd like to contribute,
[open an issue](https://github.com/detailobsessed/awesome-devin/issues/new/choose)
using **Suggest an entry**. Include the source and evidence there; an issue is
a discussion, not a promise to list a project. We'll start accepting PRs once
the foundation is solid.

The site currently lives on `{{< repo-branch >}}`, not the default branch.
Use that branch for local previews and, when contributions open, as the PR base.

## The prime directive: link, don't duplicate

[docs.devin.ai](https://docs.devin.ai) is the canonical reference for how Devin
works. **We never restate what the official docs already say** — we link to
them. This applies to our own pages as much as to contributions.

Why this matters:

- Duplicated docs rot. Cognition updates their docs; our copies silently go stale.
- We don't want responsibility for claims we can't back. Official behavior is
  their claim to make, not ours.
- It keeps this site focused on its only real value: **what the docs don't
  cover** — community-observed behavior, real configs for specific third-party
  tools, honest tradeoffs, and answers born from actual use.

The test for any sentence on this site: *is this our knowledge, or Cognition's?*
If it's theirs, it should be a link.

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

### Individual skills

A single `SKILL.md` does not need stars or release history. It needs a public
source, a specific use case, a complete copyable file, installation instructions,
and a stated test: what you tried, what happened, and what remains unverified.
Include limitations and review any bundled scripts. Use the
[skill template](templates/skill), not the tool-directory maturity bar.

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
{{< repo-link path="content/contributing/templates" text="repository" >}}.

Do not add an H1 inside the body: the theme renders the frontmatter title.
For directory entries, use a short **Curated for Awesome Devin. Source:** line
with a public source link, matching the existing entries.

## Submission steps — when contributions open

For now, use the issue form above rather than opening a contribution PR.
Once contributions open:

1. Fork the repository and create your working branch from the site branch
   named above, not the default branch.
2. Copy the relevant template, fill it in, and preview the page locally.
3. Commit with `type: description`, where type is one of `add`, `update`,
   `remove`, `fix`, `meta`, or `release`.
4. Run `prek run --all-files` and fix any failures before submitting.
5. Push to your fork and open a PR targeting the site branch. Include the
   checks you ran, source links, and any limitations reviewers should know.

## How to run the site locally

{{< local-setup >}}

## License

All contributions are released under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
(Public Domain). No attribution required, but appreciated.
