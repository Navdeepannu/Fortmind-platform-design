"use client";

import { useEffect, useRef, type RefObject } from "react";
import { InvestigationTimeline, type InvestigationStep } from "../shared/investigation-timeline";

export interface PreviewCase {
  id: string;
  title: string;
  href: string;
  status: string;
  priority: string;
  ownerLabel: string;
  openedLabel: string;
  entities: readonly { label: string; value: string }[];
  steps: readonly InvestigationStep[];
  nextAction?: string;
}

interface CasePreviewProps {
  item: PreviewCase;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  returnFocusTo?: RefObject<HTMLElement | null>;
}

/**
 * Non-modal side panel for desktop. For narrow viewports wrap this content in
 * the application's accessible Sheet/Dialog with focus trapping and scroll lock.
 */
export function CasePreview({
  item,
  onClose,
  onPrevious,
  onNext,
  returnFocusTo,
}: CasePreviewProps) {
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    heading.current?.focus();
  }, [item.id]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        returnFocusTo?.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, returnFocusTo]);

  function close() {
    onClose();
    returnFocusTo?.current?.focus();
  }

  const buttonClass =
    "rounded-md border border-border px-2.5 py-1.5 text-xs text-foreground hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring disabled:opacity-40";

  return (
    <aside aria-label={`Preview of case ${item.id}`} className="w-full max-w-[28rem] shrink-0 overflow-hidden rounded-lg border border-border bg-background">
      <header className="flex flex-wrap items-start justify-between gap-2 border-b border-border px-4 py-3">
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">{item.id} · {item.status}</p>
          <h2 ref={heading} tabIndex={-1} className="mt-1 truncate text-sm font-semibold text-foreground focus:outline-none">
            {item.title}
          </h2>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={onPrevious} disabled={!onPrevious} className={buttonClass} aria-label="Previous case">↑</button>
          <button type="button" onClick={onNext} disabled={!onNext} className={buttonClass} aria-label="Next case">↓</button>
          <button type="button" onClick={close} className={buttonClass} aria-label="Close case preview">✕</button>
        </div>
      </header>
      <div className="max-h-[70vh] space-y-5 overflow-y-auto px-4 py-4">
        <InvestigationTimeline
          steps={item.steps}
          footer={item.nextAction ? <strong className="font-medium text-foreground">{item.nextAction}</strong> : undefined}
        />
        <section aria-labelledby="preview-details-heading">
          <h3 id="preview-details-heading" className="mb-2 text-sm font-semibold text-foreground">Case details</h3>
          <dl className="divide-y divide-border border-y border-border text-sm">
            {[
              ["Priority", item.priority],
              ["Owner", item.ownerLabel],
              ["Opened", item.openedLabel],
              ...item.entities.map((entity) => [entity.label, entity.value] as const),
            ].map(([label, value], index) => (
              <div className="flex justify-between gap-4 py-3" key={`${label}-${index}`}>
                <dt className="shrink-0 text-muted-foreground">{label}</dt>
                <dd className="min-w-0 break-words text-right text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
      <footer className="border-t border-border p-4">
        <a href={item.href} className="inline-flex w-full items-center justify-center rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          Open investigation
        </a>
      </footer>
    </aside>
  );
}
