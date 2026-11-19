# Awesome Devin

A community-driven hub of tips, workflows, and resources for [Devin](https://docs.devin.ai) — Cognition's AI software engineer — across all three surfaces: **Cloud**, **Desktop**, and **CLI**.

This is not an official Cognition repository. It's the stuff the official docs leave out — practical tips, honest gotchas, curated rules, and a directory of MCP servers and tools.

## Site status

The rebuilt site is not published yet. Preview it locally while the rebuild is under review.

## Run locally

Use the site branch rather than the default branch.
Install [Hugo extended](https://gohugo.io/installation/) 0.163.3 or newer and
[Go](https://go.dev/doc/install) 1.26 or newer (needed for the Hextra module).
Those official installation pages cover macOS, Linux, and Windows. This revision
was checked with Hugo extended 0.170.1 and Go 1.27.4.

Clone the site branch:

```bash
git clone -b v2/hugo-hextra https://github.com/detailobsessed/awesome-devin.git
cd awesome-devin
hugo server
```

The site will be available at `http://localhost:1313/awesome-devin/`.

## Contributing

Public contributions are not yet being accepted while the maintainer establishes the foundation.
[Open an issue](https://github.com/detailobsessed/awesome-devin/issues/new/choose) to discuss an idea;
please wait to submit a PR until contributions open. Read `content/contributing/_index.md`
on the site branch for the quality standards, templates, and future submission steps.
Install [prek](https://prek.j178.dev/installation/) and run `prek run --all-files` before submitting changes.

## License

[CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) (Public Domain).
