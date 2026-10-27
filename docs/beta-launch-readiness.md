# AI company beta draft

The conversion goal is company beta registration: two weeks of free AI credits,
beta access to three new proprietary models, and a tailored agent harness.
These offer terms come from Owen's brief. No credit quantity, model names,
specialisation, billing terms, availability guarantees or setup timeframe was
provided, so none is invented. Existing corporate industries, product and people
sections remain below the AI-focused path.

## Claims and evaluation

No model API, measured evaluation results, model cards, customer outcomes or
matched competitor pricing were supplied. Do not publish invented benchmark
scores, claim frontier parity, or claim 10× lower cost as established facts.
The user-mentioned 10× cost advantage needs evidence before use. Establish the
named comparison, date, model versions, input/output mix, cache and tool costs,
reasoning budgets, and cost per completed task rather than just token list prices.

The site references real evaluation resources without attributing scores:
- SWE-bench Verified: https://www.swebench.com/verified
- GPQA: https://github.com/idavidrein/gpqa
- A company-specific evaluation set with task success, latency and cost recorded.

Before publication, retain reproducible run records, exact subsets, prompts,
sampling, tool and token budgets, versions and evaluation dates for comparisons.
A coding-agent score is a model-plus-harness measurement; do not present it as
an isolated base-model score or blend incompatible evaluation settings.

## Signup behaviour

This build is a prototype. The form validates required fields, formats a safe
text-only review, permits editing and downloads a JSON application marked
`draft:true` and `submitted:false`. It sends nothing, creates no account and
activates no credits. It uses no cookies, localStorage or backend submission.
The page states those limits beside the form and in the review.

Live signup needs an authorised registration endpoint, offer eligibility and
credit allowance, the activation/onboarding flow, trial-expiry handling, any
billing terms, and appropriate privacy/terms for processing company contact data.
Wire the endpoint before replacing the draft review with a real success state.
Do not silently activate a paid plan or promise unlimited usage.

The repository's previous write attempt returned403 Resource not accessible by
integration. Changes remain a packaged draft until write access is granted.
