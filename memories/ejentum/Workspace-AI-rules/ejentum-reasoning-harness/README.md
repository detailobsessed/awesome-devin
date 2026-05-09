# Ejentum Reasoning Harness — Workspace rules

Drop the sibling `.windsurfrules` file into your project root. Cascade
will then know when to call each of the four `ejentum-mcp` cognitive
harness tools (`harness_reasoning`, `harness_code`, `harness_anti_deception`,
`harness_memory`), how to absorb the returned scaffold, and what
output discipline to enforce.

For project-specific routing only, keep this in the workspace. For
Windsurf-wide routing across every workspace, paste the contents into
`global_rules.md` instead.

See [parent README](../../README.md) for setup, install steps, and links.
