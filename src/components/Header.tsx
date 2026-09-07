import { CalendarCheck } from 'lucide-react';
import { ButtonLink } from './Button';

const NAV = [
  { href: '#turnero', label: 'Reservar' },
  { href: '#precios', label: 'Precios' },
  { href: '#complejo', label: 'El complejo' },
  { href: '#cancelar', label: 'Cancelar turno' },
  { href: '#ubicacion', label: 'Cómo llegar' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1180px] flex-nowrap items-center gap-3 px-4 py-3 sm:px-5">
        <a href="#top" className="flex min-w-0 items-baseline gap-2 text-ink">
          <span className="font-display text-xl font-extrabold tracking-tighter sm:text-2xl">AFA</span>
          <span className="hidden truncate font-sans text-[11px] uppercase tracking-widest text-muted sm:inline">
            Asado · Fútbol · Amigos
          </span>
        </a>
        <nav className="ml-auto hidden flex-wrap gap-[22px] text-sm font-medium lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-ink hover:text-forest">
              {n.label}
            </a>
          ))}
        </nav>
        <ButtonLink
          href="#turnero"
          variant="dark"
          size="md"
          className="ml-auto flex-none whitespace-nowrap px-4 py-2.5 text-sm lg:ml-0"
        >
          <CalendarCheck className="h-4 w-4" strokeWidth={2.4} />
          Reservar
        </ButtonLink>
      </div>
    </header>
  );
}
