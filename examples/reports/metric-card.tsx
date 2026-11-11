export interface MetricCardProps {
  label: string;
  formattedValue: string;
  /**
   * Human-readable comparison calculated by the trusted reporting layer.
   * Example: "Up 2 cases vs previous period" or "N/A · previous baseline was zero".
   * Never build a huge % from an absent or nearly-zero baseline in the UI.
   */
  comparisonText?: string;
  description?: string;
  periodLabel: string;
  sampleSizeLabel?: string;
  href?: string;
}

export function MetricCard({
  label,
  formattedValue,
  comparisonText,
  description,
  periodLabel,
  sampleSizeLabel,
  href,
}: MetricCardProps) {
  return (
    <section className="flex min-h-44 flex-col rounded-lg border border-border bg-background p-4" aria-label={label}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xs font-medium text-muted-foreground">{label}</h3>
        <span className="text-xs text-muted-foreground">{periodLabel}</span>
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-tight tabular-nums text-foreground">
        {formattedValue}
      </p>
      {comparisonText && <p className="mt-1 text-xs text-muted-foreground">{comparisonText}</p>}
      {description && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{description}</p>}
      <div className="mt-auto flex flex-wrap items-end justify-between gap-2 pt-3">
        {sampleSizeLabel && <span className="text-xs text-muted-foreground">{sampleSizeLabel}</span>}
        {href && <a href={href} className="text-xs font-medium text-foreground underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring">Explore metric</a>}
      </div>
    </section>
  );
}
