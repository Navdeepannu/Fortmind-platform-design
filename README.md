# FortMind — Component Refinement Handoff

> **Purpose:** A public, screen-by-screen design engineering handoff for the FortMind SOC platform. **This is not the production application repository.** It contains implementation specifications, schematic visual references, and portable example components—not tested integrations.

## Start here

1. **[Project overview and review sequence](docs/START-HERE.md)** — what to improve first and why.
2. **[Priority tracker](docs/TRACKER.csv)** — openable as CSV or importable into Google Sheets.
3. **[Screen-specific folders](docs/screens/)** — expected behavior, acceptance criteria, image, and example source for each screen.
4. **[Claude agent brief](docs/CLAUDE-AGENT-PROMPT.md)** — give this and one screen folder to the agent working in the *actual* application repository.
5. **[Demo storyboard](docs/DEMO-STORYBOARD.md)** — a truthful 90-second product demo path.
6. **[Pull request template](.github/PULL_REQUEST_TEMPLATE.md)** — small changes, screenshots, validation, and ownership.

## Browse by screen

| Area | Specification + diagram | Portable example |
| --- | --- | --- |
| Home: Operations & Impact | [Home](docs/screens/home/README.md) | [OSCAR Activity](examples/home/oscar-activity.tsx) |
| Cases queue & preview | [Cases](docs/screens/cases/README.md) | [Case Preview](examples/cases/case-preview.tsx) |
| Investigation detail | [Case detail](docs/screens/case-detail/README.md) | [Section panel](examples/case-detail/investigation-section.tsx) |
| Integrations | [Integrations](docs/screens/integrations/README.md) | [Tool health](examples/integrations/tool-health.tsx) |
| Reports | [Reports](docs/screens/reports/README.md) | [Metric card](examples/reports/metric-card.tsx) |
| Settings | [Settings](docs/screens/settings/README.md) | [Setting row](examples/settings/setting-row.tsx) |
| Knowledge (not yet captured) | [Open questions](docs/screens/knowledge/README.md) | Not scoped |

The lifecycle timeline used by Home and Cases lives in [examples/shared/investigation-timeline.tsx](examples/shared/investigation-timeline.tsx).

## Design constraints

- Preserve the client's current Vercel/Geist-inspired, **neutral-first** design direction. The chosen FortMind brand green for this design handoff is **#30D398** (`oklch(0.7720123 0.1554456 163.0539)`) in **both dark and light modes**. This is a proposed design-system decision, not evidence that the client's production platform already uses it. Prefer semantic `--brand` tokens; keep neutral focus and status/verdict colors independent.
- Keep the current information architecture; improve components without restarting the design.
- Model **autonomous investigation** honestly: Plan → Collect → Analyze → review/close/fail. Do not invent “live” cases.
- Use real domain data and existing API contracts. Show safe empty/loading/error states.
- Dark and light mode, keyboard navigation, responsive layouts, and accessible focus are requirements.
- **Do not publish original client screenshots, real investigation data, internal IDs, email addresses, credentials, or signing secrets** in this public repo.

## Visuals

The SVGs are **privacy-safe schematic annotations** constructed from the supplied screenshots, **not screenshots or pixel-perfect deliverables**. For true before/after comparison, attach redacted captures to the implementation PR or a restricted shared workspace. See [visual references](docs/visuals/README.md).

## Recommended collaboration

Keep design intent here. Implement in the real application repo on a new topic branch. Link the relevant spec from the PR, add before/after captures and a Vercel preview, and obtain client approval before merge. See [workflow](docs/WORKFLOW.md).

_Reference snapshot: November 11, 2026. Product logic, API shapes and current implementation must be verified against the live app repository._
