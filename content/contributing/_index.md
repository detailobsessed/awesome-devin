---
title: Contributing
description: How to contribute to Awesome Devin.
weight: 7
---

# Contributing

Awesome Devin is a community project. Every page, tip, rule, and resource here
was contributed by someone who used Devin, hit a wall, figured something out,
and took the time to write it up. That's the whole pitch.

## How to contribute

### Fix a typo or improve a page

Every page has an **"Edit this page"** link in the top right. Click it, make your
changes, and open a pull request. No local setup required.

### Add a new tip, gotcha, or resource

1. Fork the repository.
2. Create a new Markdown file in the appropriate `content/` subdirectory:
   - `content/cloud/` — Cloud-specific content
   - `content/desktop/` — Desktop-specific content
   - `content/cli/` — CLI-specific content
   - `content/rules/` — Rules and memories
   - `content/mcp/` — MCP servers
   - `content/tools/` — Skills and tools
3. Add frontmatter (title, description, weight).
4. Write your content in Markdown.
5. Open a pull request.

### Run the site locally

```bash
# Install Hugo (macOS)
brew install hugo

# Clone and serve
git clone https://github.com/detailobsessed/awesome-devin.git
cd awesome-devin
hugo server
```

The site will be available at `http://localhost:1313/awesome-devin/`.

## Guidelines

- **Be honest.** If something doesn't work well, say so. This isn't a marketing site.
- **Be specific.** "Devin sometimes hallucinates" is not useful. "When asking Devin
  to refactor a file larger than 500 lines, it sometimes drops imports" is.
- **Link to official docs.** When referencing official features, link to
  [docs.devin.ai](https://docs.devin.ai).
- **No self-promotion.** If you built a tool, that's great — but the contribution
  should be about the tool's usefulness to the community, not a sales pitch.

## License

All contributions are released under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)
(Public Domain). No attribution required, but appreciated.
