import { useMemo, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { CalendarCheck } from 'lucide-react';
import { cn } from '../lib/cn';
import { courtsFor, getDays, isTaken, timesFor, waLink, type Sport } from '../lib/booking';
import { submitReservation } from '../lib/api';
import { Reveal, RevealGroup, RevealItem } from './Reveal';
import { Tooltip } from './Tooltip';

const chip = (active: boolean) =>
  cn(
    'cursor-pointer rounded-xl border font-sans transition-colors duration-150',
    active ? 'border-ink bg-lime' : 'border-borderStrong bg-white hover:border-ink/40'
  );

export function Turnero({ phone }: { phone: string }) {
  const [sport, setSport] = useState<Sport>('futbol');
  const [dayIdx, setDayIdx] = useState(0);
  const [courtId, setCourtId] = useState('f5');
  const [slot, setSlot] = useState<string | null>(null);

  const days = useMemo(() => getDays(), []);
  const day = days[dayIdx] ?? days[0];
  const courts = useMemo(() => courtsFor(sport), [sport]);
  const activeCourtId = courts.some((c) => c.id === courtId) ? courtId : courts[0].id;
  const court = courts.find((c) => c.id === activeCourtId)!;
  const times = useMemo(() => timesFor(court.duration), [court.duration]);

  const hasSlot = !!slot && !isTaken(day.key, activeCourtId, slot);
  const sportLabel = sport === 'padel' ? 'pádel' : 'fútbol';
  const summaryLine = hasSlot
    ? `${court.name} · ${day.full} · ${slot} h`
    : 'Elegí un horario libre para continuar';
  const summaryPrice = hasSlot ? court.price : '—';

  const waBooking = hasSlot
    ? waLink(phone, `¡Hola AFA! Quiero reservar ${sportLabel}: ${court.name}, ${day.full} a las ${slot} h.`)
    : '#turnero';

  function pickSport(next: Sport) {
    setSport(next);
    setCourtId(next === 'padel' ? 'padel60' : 'f5');
    setSlot(null);
  }
  function pickDay(i: number) {
    setDayIdx(i);
    setSlot(null);
  }
  function pickCourt(id: string) {
    setCourtId(id);
    setSlot(null);
  }

  function handleBookingClick() {
    if (!hasSlot) return;
    submitReservation({
      type: 'reserva',
      sport,
      courtId: activeCourtId,
      courtName: court.name,
      day: day.full,
      dayKey: day.key,
      time: slot,
      price: court.price
    });
  }

  return (
    <section id="turnero" className="mx-auto max-w-[1180px] px-4 pb-6 pt-10 sm:px-5 sm:pt-16">
      <Reveal className="mb-5 flex flex-wrap items-end justify-between gap-4 sm:mb-[26px] sm:gap-5">
        <div>
          <div className="mb-2.5 font-sans text-xs uppercase tracking-widest text-forest">Turnero</div>
          <h2
            className="font-display font-extrabold leading-none tracking-tighter"
            style={{ fontSize: 'clamp(28px, 6vw, 46px)' }}
          >
            Elegí tu turno
          </h2>
        </div>
        <p className="max-w-[32ch] font-sans text-sm leading-relaxed text-muted">
          Disponibilidad de referencia. Al elegir el turno se arma el mensaje y lo confirmás por WhatsApp.
        </p>
      </Reveal>

      <RevealGroup
        className="grid items-start gap-4 sm:gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {/* Step 1-3 */}
        <RevealItem className="flex flex-col gap-5 rounded-[18px] border border-border bg-white p-4 sm:gap-6 sm:p-[22px]">
          <div className="flex flex-col gap-2.5">
            <span className="font-sans text-[11px] uppercase tracking-widest text-muted">1 · Deporte</span>
            <Tabs.Root value={sport} onValueChange={(v) => pickSport(v as Sport)}>
              <Tabs.List className="grid grid-cols-2 gap-2.5">
                <Tabs.Trigger
                  value="futbol"
                  className={cn(chip(sport === 'futbol'), 'px-2.5 py-3.5 text-base font-bold text-ink')}
                >
                  Fútbol
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="padel"
                  className={cn(chip(sport === 'padel'), 'px-2.5 py-3.5 text-base font-bold text-ink')}
                >
                  Pádel
                </Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-sans text-[11px] uppercase tracking-widest text-muted">2 · Día</span>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {days.map((d) => (
                <button
                  key={d.key}
                  type="button"
                  onClick={() => pickDay(d.i)}
                  className={cn(chip(d.i === dayIdx), 'min-w-[62px] flex-none px-3.5 py-2.5 text-center text-ink')}
                >
                  <span className="block font-sans text-[10px] uppercase tracking-wide opacity-70">{d.dow}</span>
                  <span className="mt-[3px] block text-[17px] font-bold">{d.dom}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-sans text-[11px] uppercase tracking-widest text-muted">3 · Cancha</span>
            <div className="flex flex-col gap-2">
              {courts.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => pickCourt(c.id)}
                  className={cn(
                    chip(c.id === activeCourtId),
                    'flex flex-col items-start gap-[3px] px-4 py-3.5 text-left text-ink'
                  )}
                >
                  <span className="text-[15px] font-semibold">{c.name}</span>
                  <span className="font-sans text-[11px] text-muted">{c.meta}</span>
                </button>
              ))}
            </div>
          </div>
        </RevealItem>

        {/* Step 4 + summary */}
        <RevealItem className="flex flex-col gap-4 rounded-[18px] border border-border bg-white p-[22px]">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <span className="font-sans text-[11px] uppercase tracking-widest text-muted">4 · Horario</span>
            <span className="font-sans text-[11px] text-muted">turnos de {court.duration} min</span>
          </div>
          <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))' }}>
            {times.map((t) => {
              const taken = isTaken(day.key, activeCourtId, t);
              const selected = slot === t && !taken;
              return (
                <button
                  key={t}
                  type="button"
                  disabled={taken}
                  onClick={() => !taken && setSlot(t)}
                  className={cn(
                    'rounded-[10px] border px-1.5 py-3.5 font-sans text-[15px] font-semibold tabular-nums',
                    taken && 'cursor-not-allowed border-offwhite bg-offwhite text-disabledText line-through',
                    !taken && selected && 'cursor-pointer border-ink bg-lime text-ink',
                    !taken && !selected && 'cursor-pointer border-borderStrong bg-white text-ink hover:border-ink/40'
                  )}
                >
                  {t}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-[18px] font-sans text-[11px] text-muted">
            <Tooltip label="Todavía nadie reservó este horario.">
              <span className="flex cursor-help items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-[3px] border border-borderStrong bg-white" />
                Libre
              </span>
            </Tooltip>
            <Tooltip label="Ya hay una reserva confirmada en ese horario.">
              <span className="flex cursor-help items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-[3px] bg-offwhite" />
                Ocupado
              </span>
            </Tooltip>
            <Tooltip label="El horario que estás a punto de reservar.">
              <span className="flex cursor-help items-center gap-1.5">
                <span className="inline-block h-2.5 w-2.5 rounded-[3px] bg-lime" />
                Tu elección
              </span>
            </Tooltip>
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-dashed border-border pt-4">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[15px] font-semibold leading-snug">{summaryLine}</span>
              <span className="whitespace-nowrap font-display text-xl font-bold">{summaryPrice}</span>
            </div>
            <a
              href={waBooking}
              target="_blank"
              rel="noopener"
              onClick={handleBookingClick}
              className={cn(
                'flex items-center justify-center gap-2 rounded-full px-5 py-4 text-center font-sans text-base font-bold',
                hasSlot ? 'bg-forest text-white' : 'pointer-events-none bg-offwhite text-disabledText'
              )}
            >
              {hasSlot && <CalendarCheck className="h-4 w-4" strokeWidth={2.4} />}
              {hasSlot ? 'Reservar' : 'Elegí un horario'}
            </a>
            <span className="font-sans text-[10px] leading-relaxed text-muted">
              El turno queda tomado cuando te responden por WhatsApp. Cancelás sin cargo hasta 1:30 h antes.
            </span>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
