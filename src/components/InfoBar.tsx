import { CalendarDays, LayoutGrid, MessageCircleOff, MessageCircle, type LucideIcon } from 'lucide-react';

const ITEMS: { label: string; value: string; icon: LucideIcon }[] = [
  { label: 'Horarios', value: 'Todos los días 9:00 a 02:00', icon: CalendarDays },
  { label: 'Canchas', value: '1 de F5 · 2 de F7/F9 · 2 de pádel', icon: LayoutGrid },
  { label: 'Cancelación', value: 'Sin cargo hasta 1:30 h antes', icon: MessageCircleOff },
  { label: 'Reservas', value: 'Por WhatsApp, en el momento', icon: MessageCircle }
];

export function InfoBar() {
  return (
    <section className="border-y border-border bg-white">
      <div
        className="mx-auto grid max-w-[1180px] gap-4 px-4 py-4 sm:gap-5 sm:px-5 sm:py-[22px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
      >
        {ITEMS.map((it) => (
          <div key={it.label} className="flex items-start gap-3">
            <it.icon className="mt-0.5 h-4 w-4 flex-none text-forest" strokeWidth={2.2} />
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[11px] uppercase tracking-widest text-muted">{it.label}</span>
              <span className="text-[15px] font-semibold">{it.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
