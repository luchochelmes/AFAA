import { cva, type VariantProps } from 'class-variance-authority';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150',
  {
    variants: {
      variant: {
        primary: 'bg-lime text-ink hover:bg-[#b3e03c]',
        dark: 'bg-ink text-lime hover:bg-[#0a1611]',
        forest: 'bg-forest text-white hover:bg-ink hover:text-lime',
        outline: 'border border-ink text-ink hover:bg-ink hover:text-lime',
        outlineLight: 'border border-greenMuted text-cream hover:bg-white/10',
        secondary: 'bg-blueBg text-ink hover:bg-[#dbe4ee]',
        ghost: 'bg-transparent text-ink hover:bg-ink/5',
        link: 'bg-transparent text-forest underline-offset-4 hover:underline p-0 rounded-none',
        destructive: 'bg-[#C0392B] text-white hover:bg-[#a3311f]',
        disabled: 'bg-offwhite text-disabledText pointer-events-none'
      },
      size: {
        md: 'px-5 py-3 text-sm',
        lg: 'px-6 py-4 text-base'
      }
    },
    defaultVariants: { variant: 'primary', size: 'md' }
  }
);

type Common = VariantProps<typeof buttonVariants> & { className?: string };

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonEl({
  variant,
  size,
  className,
  ...props
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
