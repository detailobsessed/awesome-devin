---
title: Is Devin secure, and how does it handle my code and data?
description: Where to check security, data handling, training controls, and compliance before connecting a repository.
weight: 6
---

Treat this as a security review, not a yes/no product recommendation. Your
organization's requirements and contract determine whether a particular setup
is appropriate. This community site cannot certify compliance for you.

## Take these sources to your security team

- [Security at Cognition](https://docs.devin.ai/admin/security) is the official
  reference for data processing, retention, model-training controls, intellectual
  property, and integration permissions. Read the terms for your plan rather
  than assuming an Enterprise commitment applies to a self-serve account.
- [Cognition's security page](https://cognition.ai/security) and
  [Trust Center](https://trust.cognition.ai/) are the places to investigate
  security practices and compliance evidence. Request the material your
  reviewers need; a certification is not approval for your specific workload.
- [Enterprise billing and account guidance](https://docs.devin.ai/admin/billing/enterprise)
  distinguishes contracted Enterprise usage from self-serve plans. Confirm
  contractual requirements with your account team, not a community FAQ.

## Questions to settle before a pilot

1. Which repositories and data classes may the agent access? Review the
   [GitHub integration permissions](https://docs.devin.ai/integrations/gh)
   before granting access, including what the integration can write.
2. Who checks retention and model-training settings against your policy? Use
   the security reference above; do not assume the defaults meet your needs.
3. Which credentials are needed, and who can rotate or revoke them? Use the
   [Secrets documentation](https://docs.devin.ai/product-guides/secrets), not
   credentials pasted into a prompt or committed example.
4. Which network, tool, and repository restrictions are required? Evaluate
   [security profiles](https://docs.devin.ai/product-guides/security-profiles)
   with an administrator before enabling integrations.
5. Who reviews the output? Keep your normal code review, CI, and branch
   protections. The official security guide explicitly warns that Devin can
   introduce bugs or insecure code.

Start a [pilot](../../tips/cloud/team-pilot) only after the necessary access and
data-handling decisions are made. For a suspected security incident, use the
reporting contact in the official security guide rather than a public issue.
