import type { InvestigationStep } from "../shared/investigation-timeline";
import { InvestigationTimeline } from "../shared/investigation-timeline";

export interface OscarActivityItem {
  id: string;
  title: string;
  href: string;
  startedLabel: string;
  steps: readonly InvestigationStep[];
  needsHuman?: boolean;
}

interface OscarActivityProps {
  cases: readonly OscarActivityItem[];
  isLoading?: boolean;
  error?: string | null;
}

/**
 * Portable reference for the Home / Operations card.
 * The caller provides server-derived cases and valid safe route URLs.
 */
export function OscarActivity({ cases, isLoading = false, error }: OscarActivityProps) {
  return (
    <section aria-labelledby="oscar-activity-title" className="overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <h2 id="oscar-activity-title" className="text-sm font-semibold text-foreground">
            OSCAR activity
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Investigation progress from connected case data
          </p>
        </div>
        <span className="text-xs tabular-nums text-muted-foreground">
          {cases.length} visible
        </span>
      </div>
      {isLoading ? (
        <p role="status" className="px-4 py-8 text-sm text-muted-foreground">
          Loading investigations…
        </p>
      ) : error ? (
        <p role="alert" className="px-4 py-8 text-sm text-destructive">{error}</p>
      ) : cases.length === 0 ? (
        <div className="px-4 py-8">
          <p className="text-sm font-medium text-foreground">No investigations running</p>
          <p className="mt-1 text-xs text-muted-foreground">
            New activity will appear here when OSCAR starts an investigation.
          </p>
        </div>
      ) : (
        <ul className="divide-y divide-border">
          {cases.map((item) => (
            <li key={item.id} className="p-4">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <a href={item.href} className="text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">
                    {item.title}
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.id} · {item.startedLabel}
                  </p>
                </div>
                {item.needsHuman && (
                  <span className="rounded border border-amber-500/30 px-2 py-1 text-xs text-amber-600 dark:text-amber-400">
                    Needs review
                  </span>
                )}
              </div>
              <InvestigationTimeline steps={item.steps} label={`OSCAR progress for ${item.id}`} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
