# Client collaboration workflow

## Two repositories, two purposes

- **This public repository:** visual system notes, sanitized diagrams, screen specifications, example code, requirements and decisions.
- **Actual FortMind application repository:** the production implementation, data access, tests and deploy configuration. Keep real code and secrets there, never here.

## One improvement = one scoped PR

1. Designer opens `docs/screens/<screen>/README.md` and shares the relevant section + image.
2. Client or developer confirms desired behavior and unresolved product semantics.
3. Assigned agent inspects the real app repo, current changes, components, route files, API contract and working branches.
4. Agent implements the change on a new branch in the **app repo**, integrating rather than copying example snippets indiscriminately.
5. PR links spec and issue ID, before/after redacted captures, dark/light and responsive checks, actual command results, and Vercel preview.
6. Client reviews the preview, comments on the PR, and approves or requests iteration; no auto-merge without approval.
7. Once merged, mark tracker status and optionally update the matching screen spec with learnings.

## Avoid agent conflicts

- Before starting, inspect `git status`, `git log`, open PRs and changed files.
- Only one active owner per high-conflict component (e.g. `CasePreview`, shared table, global CSS).
- Rebase/sync against latest integration branch before opening a PR.
- Do not force-push, override someone else's edits, or treat UI mock data as production data.
- Never combine broad theme/token changes with an unrelated case logic change.

## What to share with the client

Send one short note with (1) this repo URL, (2) the next 1–2 scoped screen folders, and (3) the relevant preview deployment or PR. Use GitHub review comments for exact changes and decisions; use chat only to signal what requires attention.

## Snapshot hygiene

Public assets must be sanitized and clearly labeled. Keep real screenshots in a restricted team workspace or private implementation PR when possible. Check that no screenshots reveal email addresses, organization IDs, authentication tokens, alert payloads, hostnames or case IDs from real customers.
