import type { ReactNode } from "react";

interface InvestigationSectionProps {
  title: string;
  countLabel?: string;
  description?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

/** Native details/summary: keyboard operable without a custom accordion state machine. */
export function InvestigationSection({
  title,
  countLabel,
  description,
  defaultOpen = false,
  children,
}: InvestigationSectionProps) {
  return (
    <details
      className="group overflow-hidden rounded-lg border border-border bg-background"
      open={defaultOpen ? true : undefined}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-sm font-medium text-foreground marker:hidden hover:bg-muted/30 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
        <span className="flex min-w-0 items-center gap-2">
          <span aria-hidden="true" className="text-xs text-muted-foreground transition-transform motion-reduce:transition-none group-open:rotate-90">›</span>
          <span>{title}</span>
        </span>
        {countLabel && <span className="text-xs font-normal text-muted-foreground">{countLabel}</span>}
      </summary>
      <div className="border-t border-border px-4 py-4">
        {description && <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{description}</p>}
        {children}
      </div>
    </details>
  );
}
