import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

/**
 * Magic UI-style "shimmer" CTA: a light sweep loops across the button
 * (pure CSS, no extra deps) to draw the eye to the primary action.
 */
export function ShimmerButton({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return (
    <a
      className={cn(
        'group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-lime px-6 py-4 text-base font-bold text-ink',
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="pointer-events-none absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-none group-hover:opacity-100 group-hover:animate-[shimmer_1.1s_ease-in-out]"
        aria-hidden="true"
      />
    </a>
  );
}
