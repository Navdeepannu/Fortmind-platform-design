# Claude / coding agent implementation contract

Use this document **with exactly one** `docs/screens/<screen>/README.md` from this repository.

## Mission

Improve one selected FortMind component in the **real application repository**. Preserve the existing enterprise visual direction, page hierarchy, color tokens, backend semantics and operational workflow. This public repository is a **handoff**, not a replacement source tree.

## Before editing

1. Verify the actual repo, branch, `git status`, app stack and current scripts; inspect open PRs and latest commits.
2. Locate the real route, components, design tokens, relevant tests, loading/error states and data source.
3. Examine screenshots/diagram and distinguish **observed UI** from **proposed improvement**. Do not infer backend behavior from an image.
4. List files owned by another concurrent agent and avoid editing overlapping areas without coordination.
5. Report any unverified KPI, entity-compromise, workflow or permission semantics.

## Implementation constraints

- Make a **small, scoped change** and retain established app conventions.
- Prefer existing React/TypeScript, Tailwind and shadcn/ui primitives if the app uses them.
- Data must come from real app types/contracts. Do not blindly copy fixtures or hardcoded numbers from this handoff.
- Use semantic design tokens for dark/light. Keep focus states, keyboard controls, responsive density and screen-reader labels.
- Reuse existing components; extract primitives only where two or more screens genuinely need them.
- Design for no data, loading, error, offline, permission-denied and long-content states as applicable.
- Never add secrets, real customer data or identifiers to a commit or screenshot.

## Deliverables

1. State the exact live repo files and data contracts inspected.
2. Implement one screen-scoped PR, referencing the spec's task IDs.
3. Provide before/after redacted captures in dark and light, plus one narrow layout.
4. Report **actual** lint, typecheck, tests and build output; do not claim passing checks unless run.
5. Include preview URL, keyboard/interaction evidence, release risks and requested client decisions.

**Do not** rewrite the entire application, force-push, merge to main, deploy production, or change KPI formulas/product policy without explicit review.

## First step response expected

Return the discovered components/routes, overlapping work, one first-PR plan and any blockers. Then implement that PR if the repo and worktree are safe.
