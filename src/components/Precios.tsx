import { Reveal, RevealGroup, RevealItem } from './Reveal';

const PLANS = [
  {
    label: 'Fútbol 5',
    price: '$40.000',
    unit: 'por hora, cancha completa',
    desc: 'Césped sintético, pelota incluida, luz LED sin costo extra.',
    dark: false
  },
  {
    label: 'Fútbol 7',
    price: '$70.000',
    unit: 'por hora, cancha completa',
    desc: 'Las dos canchas del fondo, una atrás de la otra.',
    dark: true
  },
  {
    label: 'Pádel',
    price: '$20.000',
    unit: '60 min · $30.000 los 90 min',
    desc: 'Cancha doble. Alquiler de paletas y pelotas en el buffet.',
    dark: false
  },
  {
    label: 'Pádel Single',
    price: '$15.000',
    unit: '60 min · $22.500 los 90 min',
    desc: 'Cancha para partidos 1 vs 1.',
    dark: false
  }
];

const SERVICES = [
  { title: 'Buffet y bar', desc: 'Comida, bebida y donde pagar el turno.' },
  { title: 'Dos parrillas', desc: 'Con espacio de mesas para comer después del partido.' },
  { title: 'Escuelita y clases', desc: 'Fútbol y pádel, consultá días y grupos.' },
  { title: 'Estacionamiento', desc: 'Sobre Av. Juan B. Justo, dentro del predio.' },
  { title: 'Luz LED', desc: 'Todas las canchas iluminadas para jugar de noche.' }
];

export function Precios() {
  return (
    <section id="precios" className="mx-auto max-w-[1180px] px-4 pb-6 pt-10 sm:px-5 sm:pt-14">
      <Reveal>
        <h2
          className="mb-1.5 font-display font-extrabold tracking-tighter"
          style={{ fontSize: 'clamp(26px, 6vw, 40px)' }}
        >
          Precios y servicios
        </h2>
        <p className="mb-5 font-sans text-[11px] text-muted sm:mb-[26px]">
          Precios de referencia — confirmá el valor final por WhatsApp.
        </p>
      </Reveal>
      <RevealGroup className="grid gap-3 sm:gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
        {PLANS.map((p) => (
          <RevealItem
            key={p.label}
            className={
              p.dark
                ? 'flex flex-col gap-2 rounded-2xl bg-ink p-[22px] text-cream'
                : 'flex flex-col gap-2 rounded-2xl border border-border bg-white p-[22px]'
            }
          >
            <span className={'font-sans text-[11px] uppercase tracking-widest ' + (p.dark ? 'text-lime' : 'text-forest')}>
              {p.label}
            </span>
            <span className="font-display text-[34px] font-extrabold tracking-tighter">{p.price}</span>
            <span className={'text-sm ' + (p.dark ? 'text-cream2' : 'text-body')}>{p.unit}</span>
            <span className={'mt-1.5 text-[13px] leading-relaxed ' + (p.dark ? 'text-cream3' : 'text-muted')}>
              {p.desc}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>

      <RevealGroup
        className="mt-3.5 grid gap-3"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}
      >
        {SERVICES.map((s) => (
          <RevealItem key={s.title} className="rounded-2xl border border-border bg-white p-4">
            <span className="mb-1 block text-[15px] font-semibold">{s.title}</span>
            <span className="text-[13px] leading-relaxed text-muted">{s.desc}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
