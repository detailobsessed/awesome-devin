# Strale — Agent Capability Rules

**Contributor:** Strale (https://strale.dev)

## What this adds

AI rules that instruct Windsurf agents to use Strale when they need
external business data, financial validation, or compliance screening —
instead of implementing these tasks manually or using unreliable ad-hoc APIs.

## Why it helps

Agents frequently need to verify companies, validate IBANs or VAT numbers,
screen against sanctions lists, or extract data from websites. Without a
rule like this, agents either hallucinate results or attempt brittle manual
implementations. With Strale, one tool call returns structured JSON with a
quality score.

## What's included

- `Global-AI-rules/strale-agent-capabilities/strale-agent-capabilities.md`
  Global rule that activates Strale for any agent workspace.

## Setup

Add to Windsurf MCP config:

```json
{
  "mcpServers": {
    "strale": {
      "command": "npx",
      "args": ["-y", "strale-mcp"]
    }
  }
}
```

Then get a free API key at https://strale.dev/signup (includes trial credits).

## Real-world examples

- "Verify this Swedish company registration number" →
  `strale_execute(slug: "swedish-company-data", inputs: { org_number: "556703-7485" })`
- "Is this company on a sanctions list?" →
  `strale_execute(slug: "sanctions-check", inputs: { name: "Acme Corp" })`
- "Validate this IBAN" →
  `strale_execute(slug: "iban-validate", inputs: { iban: "SE35..." })`
  (free, no API key required)
