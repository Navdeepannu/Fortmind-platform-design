# Start here — demo-first refinement

## Product narrative

**OSCAR handles investigation automatically. Analysts intervene when the platform needs judgment. Every decision is explainable and every measured outcome is auditable.**

The platform already has an acceptable broad design direction. Make localized, reversible refinements; do **not** prompt an agent to rewrite all pages.

## Priority order

| Order | Component | Why now | Review output |
| --- | --- | --- | --- |
| 1 | Cases table + side preview | The strongest interactive investigation path | Scannable queue, meaningful OSCAR steps, full case link |
| 2 | Case detail | Proof behind a verdict | Clearly grouped conclusion, entities, hypotheses and findings |
| 3 | Home / Operations | Product differentiation | OSCAR work-in-progress and human attention in the same overview |
| 4 | Impact + Reports | Credibility | Time periods, definitions and metrics that withstand scrutiny |
| 5 | Integration health | Evidence of ecosystem breadth and reliability | Connected/error counts and actionable recovery |
| 6 | Settings | Safe enterprise control | Roles, thresholds, save feedback and no secret exposure |

## Demo blockers requiring verification

- The shown Impact/Reports screens contain **very large relative percentage changes** from near-zero baselines. Verify numerator, denominator, unit and comparison interval before recording. Prefer “N/A”, a real absolute change, or a note about a small baseline rather than a misleading percent.
- A **benign synthetic test** case shows an entity chip reading “Confirmed affected”. Confirm whether this means “observed in case” versus verified compromise. Do not present involvement as compromise.
- A report showing **0 cases opened and 1 decided** over the same period is *possible* if an older case received its verdict during that period. Clarify cohort semantics, do not invent counts.
- Capture the missing content for **Knowledge** and the non-Overview tabs under Case Detail (Evidence, Actions, Activity) before assigning detailed redesign work.

## Review contract

For each change, record the reference ID, affected route/files, existing behavior, proposed UI, data contract, empty/error states, dark/light + 390/768/1440 checks, and merge decision. An illustrative component in `examples/` is **not** proof that it fits the live app.

See [tracker](TRACKER.csv), [workflow](WORKFLOW.md), and [agent prompt](CLAUDE-AGENT-PROMPT.md).
