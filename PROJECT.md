# PROJECT.md — Awesome Devin

## What this is

A community-driven knowledge hub for [Devin](https://docs.devin.ai/get-started/devin-intro) — Cognition's AI software engineer — across all three of its surfaces: **Cloud**, **Desktop**, and **CLI**.

The site covers what the official docs don't: practical tips, honest gotchas, community-curated rules, a directory of MCP servers and tools, and a FAQ sourced from real Discord conversations. It's the stuff you learn by using Devin, not by reading the reference docs.

This is **not** an official Cognition repository.

## How we got here

### The original repo: `awesome-windsurf`

The repository started as "Awesome Windsurf" — a curated list of resources for the Windsurf IDE (made by Codeium). The entire site was a single `README.md` with sections for useful links, FAQ, community resources, tips, and videos. Community contributions lived in a `memories/` directory where people added their own rules and prompt files under their username.

On June 2, 2026, Windsurf became **Devin Desktop** (Cascade became Devin Local). The product, the company, and the scope all changed. The repo needed to change with it.

### The rebrand attempt: `rebrand/devin-desktop`

A first rebrand attempt rebuilt the site on Astro Starlight, scoped to "Devin Desktop (formerly Windsurf)" only. That branch sat unmerged for a month and never shipped. It also didn't reflect the broader reality: Devin now has three surfaces (Cloud, Desktop, CLI), not just Desktop.

### The current rework: `v2/hugo-hextra`

This branch is a ground-up rebuild. The scope expanded from "Devin Desktop only" to all three Devin surfaces. The stack changed from Astro Starlight to Hugo + Hextra. The IA changed from surface-first to content-type-first. The contribution model changed from "add a bullet to the README" to "each entry gets its own page with a template and quality bar."

A parallel branch (`rework/zensical`) scaffolds the same content on Zensical for comparison, but the active development branch is `v2/hugo-hextra`.

The GitHub repo was renamed from `detailobsessed/awesome-windsurf` to `detailobsessed/awesome-devin`.

## Why Hugo + Hextra

The aesthetic reference is [pydevtools.com](https://pydevtools.com/) — a calm, text-forward, sidebar-left handbook look. That site is built on Hugo + Hextra, and Hextra delivers that look out of the box with zero custom CSS.

Other options were considered and rejected:
- **Astro Starlight** (the `rebrand/devin-desktop` branch): polished but imposes a "SaaS product docs" aesthetic that's hard to override without fighting the framework.
- **Zensible** (v0.0.46, by the Material for MkDocs team): credible foundation with real adopters, but still alpha software with breaking changes between 0.0.x releases. Kept as a parallel experiment for future evaluation.
- **Astro-native Hextra-style themes** (astro-docs, astro-pigment): all pre-1.0, single-maintainer, no track record. Too risky for long-lived infrastructure.
- **Custom Astro + Tailwind**: would have worked but means building and maintaining layout plumbing from scratch with no payoff over Hextra.

Hugo is boring, stable, fast, and 12+ years old. Hextra is mature (2K+ stars). The content is markdown and portable if we ever migrate. The contribution loop is simple: edit a markdown file, the sidebar autogenerates.

## Information architecture

The site is organized by **content type**, not by surface. People look for information by what they need ("how do I fix this gotcha?"), not by which surface they're on. Surfaces are nested within content types where relevant.

```
content/
├── _index.md                          Homepage
├── tips/                              Tips & workflows
│   ├── cloud/                         Cloud-specific tips
│   ├── desktop/                       Desktop-specific tips
│   └── cli/                           CLI-specific tips
├── gotchas/                           Known gotchas & caveats
│   ├── cloud/
│   ├── desktop/
│   └── cli/
├── faq/                               FAQ (curated from Discord)
├── rules/                             Community-contributed rules
├── mcp/                               MCP server directory
├── tools/                             Skills & tools directory
└── contributing/
    ├── _index.md                      Contributing guide + quality bars
    └── templates/                     Page templates per content type
```

Top-level nav: Tips · Gotchas · FAQ · Rules · MCP · Tools · Contributing · Search · GitHub

## Contribution strategy: start strict, then open up

The site is in its early stages. The content, structure, and quality standards are being established by the maintainer with input from the community (Discord staff, other mods). **Public contributions are not yet being accepted.** The plan:

1. **Build the vision** — establish the content, IA, and quality bar with maintainer-curated content
2. **Refine** — get feedback from Discord staff and other mods
3. **Open up** — once the structure is stable and useful, accept community contributions

The quality standards are published now (in the contributing guide) so expectations are clear from the start, even though PRs aren't being accepted yet.

## Quality standards (when contributions open)

The old repo encouraged low-quality content because the contribution model was "add a bullet to README.md" — zero friction, zero quality bar. It collected drive-by link drops to freshly-created repos with no users.

The new model fixes this structurally: each entry gets its own page with a template, installation steps, limitations, and an honest description. The format itself does most of the filtering.

### By content type

**Tips & Gotchas** — always welcome, no maturity bar:
- Must describe a real situation you personally encountered
- Must be specific (not "Devin sometimes hallucinates" but "when refactoring files >500 lines, Devin drops imports — here's the workaround")
- Must not duplicate docs.devin.ai

**FAQ entries** — curated by the maintainer, sourced from Discord:
- One question per page, linkable and searchable
- Answer what actually works, not what the docs say *should* work
- Source the Discord thread if possible

**Rules** — welcome, no maturity bar, must be original content:
- Full rules text inline (not just a link to your repo)
- Must include: what it does, why you wrote it, how to install, limitations
- General-purpose rules preferred over niche/proprietary ones
- A rule that "activates my specific SaaS product's MCP tools" is a directory entry for your product, not a rule

**MCP servers & Tools** — subject to a maturity bar:
- 50+ GitHub stars OR 3+ months since first release OR documented production use
- Entry must be written objectively — not marketing copy
- Must include real config snippets and an honest limitations section
- You can submit your own project, but it must meet the bar like anything else

### What gets rejected

- "Here's my repo, add it to the list" with no context
- Projects created in the last week with no users
- Marketing copy or sales pitches
- Niche tools that only help the author's specific use case
- Anything that duplicates docs.devin.ai without adding community knowledge

## Existing PR backlog

There are 23 open PRs on the old `awesome-windsurf` repo, all targeting the old README-based model. They need triage once the rework lands:

- **11 dependabot PRs**: close all — the npm toolchain is gone
- **5 rules PRs** (memories/ contributions): re-scope as pages in `content/rules/`
- **3 MCP PRs**: re-scope as pages in `content/mcp/`
- **6 tool/resource PRs**: re-scope as pages in `content/tools/`, subject to the maturity bar — some are low-quality self-promo that should be rejected

## Tech stack

- **Static site generator**: Hugo (via `brew install hugo`, single binary)
- **Theme**: Hextra (Hugo module, `github.com/imfing/hextra`)
- **Search**: Pagefind (built into Hextra)
- **Package manager**: none — Hugo is a single binary, no Node.js/npm
- **Deployment**: GitHub Pages (workflow TBD — needs updating from the old Astro-based deploy)
- **Content**: Markdown files in `content/`, sidebar autogenerates from directory structure

## Local development

```bash
brew install hugo
git clone https://github.com/detailobsessed/awesome-devin.git
cd awesome-devin
hugo server
```

Site is available at `http://localhost:1313/awesome-devin/`.

## License

[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) (Public Domain). No attribution required, but appreciated.

## Branches

| Branch | Purpose | Status |
|---|---|---|
| `main` | Old Windsurf README-based site | Frozen, will be replaced when the rework merges |
| `v2/hugo-hextra` | Active rework — Hugo + Hextra, all 3 Devin surfaces | In development |
| `rework/zensical` | Parallel experiment — same content on Zensical | Evaluation only |
| `rebrand/devin-desktop` | First rebrand attempt — Astro Starlight, Desktop only | Abandoned, kept as reference |

## Open decisions

- **Repo rename**: done (`awesome-windsurf` → `awesome-devin`). GitHub redirects old URLs.
- **Base path**: currently `/awesome-devin/` for GitHub Pages. Will need updating if we move to a custom domain.
- **Deploy workflow**: the old `.github/workflows/deploy.yml` targets Astro. Needs a new Hugo-based workflow.
- **Zensible vs Hugo+Hextra**: Hugo+Hextra is the active branch. Zensible is kept as a fallback if Hextra proves insufficient. The markdown content is portable between them.
