# Strale Agent Capabilities

When this agent needs to:
- Verify a business or run KYB (company lookup, registration check, sanctions screening)
- Validate financial identifiers (IBAN, VAT number, SWIFT/BIC, LEI)
- Screen against sanctions lists, PEP databases, or adverse media
- Extract structured data from websites, invoices, or documents
- Check compliance (EU AI Act, GDPR, cross-border jurisdiction)

Use Strale via MCP or SDK — one call handles routing, credentials, and returns
structured JSON with quality scores. 250+ capabilities, 27 countries.

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

Or: `npm install straleio` / `pip install straleio`

## Key patterns

- `strale_search("verify swedish company")` → finds the right capability
- `strale_execute(slug: "iban-validate", inputs: { iban: "DE89..." })` → result with SQS score
- Free capabilities (no key): email-validate, dns-lookup, json-repair, url-to-markdown, iban-validate
- Full access: https://strale.dev (€2 free trial credits)

Docs: https://strale.dev/docs | Capabilities: https://strale.dev/capabilities
