import type { ReactNode } from "react";

export type Phase = "plan" | "collect" | "analyze" | "report";
export type PhaseState = "pending" | "active" | "complete" | "blocked" | "failed";

export interface InvestigationStep {
  id: Phase;
  label: string;
  state: PhaseState;
  description?: string;
  elapsedLabel?: string;
}

export interface InvestigationTimelineProps {
  steps: readonly InvestigationStep[];
  label?: string;
  footer?: ReactNode;
  className?: string;
}

const stateText: Record<PhaseState, string> = {
  pending: "Pending",
  active: "In progress",
  complete: "Done",
  blocked: "Waiting",
  failed: "Failed",
};

const stateStyle: Record<PhaseState, string> = {
  pending: "border-border bg-background",
  active: "border-foreground bg-foreground",
  complete: "border-emerald-500 bg-emerald-500",
  blocked: "border-amber-500 bg-amber-500",
  failed: "border-destructive bg-destructive",
};

/**
 * Pure UI projection. Step states must be derived from a trusted backend;
 * never synthesize progress from a timer just for visual effect.
 */
export function InvestigationTimeline({
  steps,
  label = "OSCAR investigation progress",
  footer,
  className = "",
}: InvestigationTimelineProps) {
  return (
    <section aria-label={label} className={className}>
      <ol className="space-y-0" aria-label="Investigation stages">
        {steps.map((step, index) => (
          <li className="relative pl-8 pb-4 last:pb-0" key={step.id}>
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[9px] top-5 bottom-0 w-px bg-border"
              />
            )}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1 size-[19px] rounded-full border-[5px] ${stateStyle[step.state]}`}
            />
            <div
              className="rounded-md border border-border bg-card px-3 py-3"
              aria-current={step.state === "active" ? "step" : undefined}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-medium text-foreground">{step.label}</h3>
                <span className="text-xs text-muted-foreground">
                  {stateText[step.state]}
                  {step.elapsedLabel ? ` · ${step.elapsedLabel}` : ""}
                </span>
              </div>
              {step.description && (
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
      {footer && (
        <div className="ml-2 mt-3 border-l border-border pl-6 text-xs text-muted-foreground">
          {footer}
        </div>
      )}
    </section>
  );
}
