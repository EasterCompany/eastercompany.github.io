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

## Beta requests and deployment

The revised site uses an email request, not automated account signup. The form
validates company, work email and use case, renders a text-only review, and
prepares an encoded mailto draft to contact@easter.company. The address is the
company's published GitHub organisation contact. The visitor must send it through
their email app; the site does not claim it has sent or provisioned anything.
There is a direct mailto and no-JavaScript fallback. The former JSON-download
prototype is removed. No email was sent during testing.

Automated signup would require an authorised backend, privacy/offer terms, credit
allowance, activation and expiry handling. This email route supports a manually
arranged beta without inventing those systems or terms.

The repository was pushed and deployed using the authorised remote machine.
GitHub Pages serves https://eastercompany.github.io/. The previous easter.company
custom-domain setting was cleared because its DNS points to domain parking.
DNS was not changed. Noindex/nofollow is retained for review.

## e-server Cloud platform positioning

Owen clarified that e-server Cloud is the entire product, with agent-harness as
one component. Added a bundle overview and security, network-routing and event
monitoring sections, each with native HTML/CSS/SVG illustrations. The new primary
interests are available in the prototype signup and its draft JSON includes the
product name. Dexter remains distinct and local.

The platform capabilities are supplied product descriptions, not the outcome of
a security audit or end-to-end integration test. Before publishing stronger
security claims, establish encryption in transit/at rest, key custody, access by
operators and subprocessors, recovery/backup access and the threat model. The
page describes encrypted access, owner-controlled permissions and data ownership;
it does not promise that no other party can ever access data.

Network copy describes choosing a supported device or available public VPN
endpoint as the outward-facing route. Confirm supported operating systems,
protocols, routing scope, DNS/IPv6 handling, failure behaviour and endpoint
availability before publishing compatibility details. No anonymity, absence of
tracking or arbitrary location guarantee is made.

Monitoring copy covers network/API signals and configured agent workflows.
The timeline is explicitly fictional. No response-time SLA, autonomous repair
guarantee, uptime figure or verified event coverage is claimed.
