import type { ReactNode } from "react";

interface SettingRowProps {
  controlId: string;
  label: string;
  description: string;
  children: ReactNode;
  note?: string;
  error?: string;
  readOnlyReason?: string;
}

/**
 * Layout only. Parent form owns values, validation, permissions and persistence.
 * Apply actual disabled/readOnly semantics to the provided control.
 */
export function SettingRow({
  controlId,
  label,
  description,
  children,
  note,
  error,
  readOnlyReason,
}: SettingRowProps) {
  const detailsId = `${controlId}-description`;
  const errorId = `${controlId}-error`;

  return (
    <div className="grid gap-4 border-b border-border px-4 py-4 last:border-b-0 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div>
        <label htmlFor={controlId} className="text-sm font-medium text-foreground">{label}</label>
        <p id={detailsId} className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="min-w-0 space-y-2">
        {/* Parent must connect aria-describedby to detailsId and errorId as needed. */}
        {children}
        {note && <p className="text-xs text-muted-foreground">{note}</p>}
        {readOnlyReason && <p className="text-xs text-muted-foreground">Read-only: {readOnlyReason}</p>}
        {error && <p id={errorId} role="alert" className="text-xs text-destructive">{error}</p>}
      </div>
    </div>
  );
}
