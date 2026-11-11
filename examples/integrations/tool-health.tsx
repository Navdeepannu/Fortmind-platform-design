export type IntegrationState = "connected" | "degraded" | "error" | "expired" | "never-used";

export interface IntegrationHealthItem {
  id: string;
  name: string;
  state: IntegrationState;
  lastUsedLabel?: string;
  casesLabel?: string;
  action?: { label: string; href: string };
}

const styles: Record<IntegrationState, { label: string; className: string }> = {
  connected: { label: "Connected", className: "text-emerald-600 dark:text-emerald-400" },
  degraded: { label: "Needs attention", className: "text-amber-600 dark:text-amber-400" },
  error: { label: "Error", className: "text-destructive" },
  expired: { label: "Key expired", className: "text-amber-600 dark:text-amber-400" },
  "never-used": { label: "Not used yet", className: "text-muted-foreground" },
};

/**
 * Caller maps real API health into this normalized view model.
 * 'Never used' is a usage fact, not a transport failure.
 */
export function ToolHealthList({ items }: { items: readonly IntegrationHealthItem[] }) {
  return (
    <section aria-label="Connected integration health" className="overflow-hidden rounded-lg border border-border bg-background">
      <ul className="divide-y divide-border">
        {items.map((item) => {
          const health = styles[item.state];
          return (
            <li key={item.id} className="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 text-sm">
              <div className="min-w-[12rem] flex-1">
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.casesLabel ?? "Usage unavailable"}</p>
              </div>
              <span className={`text-xs font-medium ${health.className}`}>{health.label}</span>
              <span className="text-xs text-muted-foreground">{item.lastUsedLabel ?? "No last-used data"}</span>
              {item.action ? (
                <a className="rounded border border-border px-3 py-1.5 text-xs text-foreground hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring" href={item.action.href}>
                  {item.action.label}
                </a>
              ) : (
                <span className="text-xs text-muted-foreground">No action</span>
              )}
            </li>
          );
        })}
      </ul>
      {items.length === 0 && (
        <p className="p-5 text-sm text-muted-foreground">No integrations to display.</p>
      )}
    </section>
  );
}
