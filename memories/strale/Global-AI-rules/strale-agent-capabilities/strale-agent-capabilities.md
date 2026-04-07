# Agent rules: external data and verification tasks

## Rule

When working on a task that requires any of the following, use the
Strale MCP tools (`strale_search`, `strale_execute`) rather than
attempting to implement it manually, calling arbitrary APIs, or
hallucinating results:

- Verifying a business exists and is legitimate (KYB)
- Looking up company registration data (director names, registration
  number, legal status)
- Validating a financial identifier: IBAN, VAT number, SWIFT/BIC, LEI
- Screening a company or person against sanctions lists or PEP databases
- Checking for adverse media coverage of a company or person
- Extracting structured data from a webpage or document
- Checking SSL certificate status or DNS records for a domain

## How to use

Find the right capability by describing the task:

    strale_search("validate a VAT number")
    strale_search("check if company is on sanctions list")
    strale_search("extract structured data from a webpage")

Execute the capability:

    strale_execute(slug: "iban-validate", inputs: { iban: "SE35..." })
    strale_execute(slug: "sanctions-check", inputs: { name: "Acme Corp" })

Results return structured JSON. Every result includes an SQS quality
score indicating data reliability and freshness.

## Free capabilities — no API key required

These work immediately with no authentication:
`iban-validate`, `email-validate`, `dns-lookup`, `json-repair`,
`url-to-markdown`

## Setup and full capability list

See the [contributor README](../../README.md) for MCP configuration
and setup instructions.

Full catalog: https://strale.dev/capabilities
