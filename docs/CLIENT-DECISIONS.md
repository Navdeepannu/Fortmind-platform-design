# Decisions to confirm with the client

These are **questions**, not requirements or claims about the live backend.

| Decision | Why it matters | Proposed default |
| --- | --- | --- |
| Should Home OSCAR Activity show only live investigations? | Impacts truthfulness and API query | Running only; recently completed in separate group after approval |
| Should table-row click open full case or preview? | Prevents competing click interactions | Full case on row, dedicated icon for preview |
| What exactly does “Confirmed affected” mean? | Avoids implying compromise in a benign test | Keep label until owner clarifies |
| What are KPI definitions, cohorts and timezones? | 0 opened/1 decided can be valid | Document formulas and populations before visual polish |
| How should zero or tiny KPI baselines display? | Prevents misleading extreme percentages | N/A or absolute change with explanation |
| Are settings editable by organization members? | Permissions and security | Display read-only states; enforce server authorization |
| What should Knowledge contain? | No screenshot in supplied set | Block redesign until source capture |
| How is the demo run? | Avoid fake live data and privacy leaks | Approved safe tenant or explicitly labeled recorded example |

Record outcomes in the related screen README and real application issue/PR. Don't silently change behavior based on an unapproved assumption.
