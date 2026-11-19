---
title: What are ACUs, and how does billing work?
description: Find current pricing, plan-specific billing, and the usage evidence needed for a team budget.
weight: 5
---

**ACU** stands for **Agent Compute Unit**. Start with the official
[billing guide](https://docs.devin.ai/admin/billing) to identify the billing
model that applies to your account; do not assume every plan uses ACUs.

## Use the right pricing reference

- [Devin pricing](https://devin.ai/pricing) is the public plan comparison.
- [Self-serve billing](https://docs.devin.ai/admin/billing/self-serve) explains
  included quota and on-demand credits.
- [Enterprise billing](https://docs.devin.ai/admin/billing/enterprise) explains
  contracted ACUs, tracking, and limits; use your order form for your actual rate.

We do not copy prices or convert task duration into a cost estimate here.
Check the current terms for your account before approving a budget.

## Budget from a representative pilot

1. Pick the task types you expect to repeat, not just the easiest demo. Keep
   their scope and acceptance checks explicit.
2. Record actual per-session usage using the locations documented in
   [Usage](https://docs.devin.ai/admin/billing/usage), alongside review effort,
   rework, and failed attempts. A PR count alone misses those costs.
3. Use that evidence to decide which task types are worth repeating. Include
   the expected workload and your account's current terms in the budget rather
   than assuming equal cost per task.
4. Have the account owner check applicable limits before widening access. For
   Enterprise controls, see [Budgets](https://docs.devin.ai/admin/billing/budgets);
   do not assume those controls exist on every plan.

For scope, stop criteria, and rollout decisions, use the
[team pilot checklist](../../tips/cloud/team-pilot).

## How do I keep usage down?

Use the official [usage guidance](https://docs.devin.ai/admin/billing/usage)
to understand what is metered. Keep each request focused and verifiable, and
investigate environment or scope problems before repeating an unsuccessful run.
