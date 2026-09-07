import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '../lib/cn';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-wider',
  {
    variants: {
      variant: {
        lime: 'bg-lime text-ink',
        dark: 'bg-ink text-lime',
        outline: 'border border-borderStrong text-muted',
        amber: 'bg-amberBg text-amberText border border-amber/40'
      }
    },
    defaultVariants: { variant: 'lime' }
  }
);

export function Badge({
  variant,
  className,
  ...props
}: VariantProps<typeof badgeVariants> & HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
