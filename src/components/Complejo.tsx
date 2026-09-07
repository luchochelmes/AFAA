import { Car } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './Reveal';

function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`photo-placeholder flex items-center justify-center rounded-xl border border-border p-2.5 text-center ${className ?? ''}`}
    >
      <span className="whitespace-pre-line font-sans text-[10px] leading-relaxed text-muted">{label}</span>
    </div>
  );
}

export function Complejo() {
  return (
    <section id="complejo" className="mt-10 border-y border-border bg-white sm:mt-14">
      <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-5 sm:py-14">
        <Reveal>
          <h2
            className="mb-1.5 font-display font-extrabold tracking-tighter"
            style={{ fontSize: 'clamp(26px, 6vw, 40px)' }}
          >
            Cómo es el complejo
          </h2>
          <p className="mb-6 max-w-[56ch] text-base leading-relaxed text-body sm:mb-7">
            Entrás por Av. Juan B. Justo y vas de frente: primero el fútbol 5, después el pádel, el buffet en el
            medio, las parrillas y al fondo las dos canchas grandes.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 sm:gap-[22px]">
          <RevealItem className="rounded-[18px] border border-border bg-cream p-3 sm:p-[18px]">
            <div className="flex gap-2 sm:gap-2.5">
              {/* driveway + parking, running the full depth of the property on the right as you walk in from the avenue */}
              <div className="flex w-9 flex-none flex-col items-center justify-between gap-2 rounded-[10px] border-2 border-dashed border-borderStrong bg-[#E8E2D0] py-2.5 sm:w-[46px] sm:gap-2.5 sm:py-3.5">
                <Car className="h-3.5 w-3.5 flex-none text-[#8A8163] sm:h-4 sm:w-4" strokeWidth={2.2} />
                <span
                  className="flex-1 text-center font-sans text-[9px] font-semibold uppercase tracking-wide text-[#8A8163] sm:text-[10px]"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  Camino y estacionamiento
                </span>
                <Car className="h-3.5 w-3.5 flex-none text-[#8A8163] sm:h-4 sm:w-4" strokeWidth={2.2} />
              </div>

              <div className="grid flex-1 gap-2 sm:gap-2.5">
                <div className="flex flex-wrap items-center gap-2 rounded-[10px] bg-ink px-3 py-2.5 font-sans text-[10px] uppercase tracking-widest text-lime sm:px-3.5 sm:text-[11px]">
                  <span>▲ Entrada · Av. Juan B. Justo</span>
                </div>

                <div className="court-stripe flex min-h-[64px] flex-wrap items-center justify-between gap-2 rounded-[10px] border-2 border-forest p-3 sm:min-h-[74px] sm:p-3.5">
                  <span className="text-sm font-bold">Cancha Fútbol 5</span>
                  <span className="font-sans text-[10px] text-forest">01</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 rounded-[10px] border-2 border-ink bg-blueBg p-3 sm:p-3.5">
                  <span className="text-sm font-bold">Canchas de pádel</span>
                  <span className="font-sans text-[10px] text-muted">02</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 rounded-[10px] border-2 border-dashed border-borderStrong bg-white p-3 sm:p-3.5">
                  <span className="text-sm font-bold">Buffet · caja · baños</span>
                  <span className="font-sans text-[10px] text-muted">03</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 rounded-[10px] border-2 border-amber bg-amberBg p-3 sm:p-3.5">
                  <span className="text-sm font-bold">Asadores y parrillas</span>
                  <span className="font-sans text-[10px] text-amberText">04</span>
                </div>

                <div className="court-stripe flex min-h-[68px] flex-wrap items-center justify-between gap-2 rounded-[10px] border-2 border-forest p-3 sm:min-h-[78px] sm:p-3.5">
                  <span className="text-sm font-bold">Cancha Fútbol 7 / 9</span>
                  <span className="font-sans text-[10px] text-forest">05</span>
                </div>
                <div className="court-stripe flex min-h-[68px] flex-wrap items-center justify-between gap-2 rounded-[10px] border-2 border-forest p-3 sm:min-h-[78px] sm:p-3.5">
                  <span className="text-sm font-bold">Cancha Fútbol 7 / 9</span>
                  <span className="font-sans text-[10px] text-forest">06</span>
                </div>
              </div>
            </div>
            <span className="mt-2.5 block text-center font-sans text-[10px] text-muted">
              esquema del predio · no a escala
            </span>
          </RevealItem>

          <RevealItem className="grid gap-3">
            <Placeholder label={'video de recorrido\n(entrada → canchas del fondo)'} className="aspect-video" />
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}>
              <Placeholder label="cancha F5" className="aspect-square" />
              <Placeholder label="pádel" className="aspect-square" />
              <Placeholder label="parrillas" className="aspect-square" />
              <Placeholder label="buffet" className="aspect-square" />
            </div>
            <a
              href="https://www.instagram.com/afapadel/"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between gap-3 rounded-[14px] border border-border bg-cream px-[18px] py-4 text-ink"
            >
              <span className="text-[15px] font-semibold">Más fotos y videos en @afapadel</span>
              <span className="font-sans text-[11px] text-forest">Instagram →</span>
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
