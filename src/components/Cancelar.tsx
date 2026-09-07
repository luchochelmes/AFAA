import { useState } from 'react';
import { XCircle } from 'lucide-react';
import { waLink } from '../lib/booking';
import { submitReservation } from '../lib/api';
import { ButtonLink } from './Button';
import { RevealGroup, RevealItem } from './Reveal';

export function Cancelar({ phone }: { phone: string }) {
  const [cancelName, setCancelName] = useState('');
  const [cancelWhen, setCancelWhen] = useState('');
  const ready = cancelName.trim() && cancelWhen.trim();

  const waCancel = ready
    ? waLink(phone, `¡Hola AFA! Necesito cancelar el turno de ${cancelName.trim()} del ${cancelWhen.trim()}.`)
    : '#cancelar';

  function handleCancelClick() {
    if (!ready) return;
    submitReservation({ type: 'cancelacion', name: cancelName.trim(), when: cancelWhen.trim() });
  }

  return (
    <section id="cancelar" className="mx-auto max-w-[1180px] px-4 pb-6 pt-10 sm:px-5 sm:pt-14">
      <RevealGroup className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-[22px]">
        <RevealItem>
          <h2
            className="mb-3.5 font-display font-extrabold tracking-tighter"
            style={{ fontSize: 'clamp(26px, 6vw, 40px)' }}
          >
            Cancelar un turno
          </h2>
          <p className="mb-4.5 max-w-[46ch] text-base leading-relaxed text-body">
            Se puede cancelar sin cargo hasta <strong>1 hora y 30 minutos antes</strong> del horario reservado.
            Pasado ese límite el turno se cobra igual.
          </p>
          <ul className="m-0 list-disc pl-5 text-[15px] leading-[1.9] text-body">
            <li>Completá los datos y se arma el mensaje de cancelación.</li>
            <li>Queda cancelado cuando te responden desde el complejo.</li>
            <li>Si llegás tarde, avisá igual: se puede correr el horario según disponibilidad.</li>
          </ul>
        </RevealItem>
        <RevealItem className="flex flex-col gap-3.5 rounded-[18px] border border-border bg-white p-[22px]">
          <label className="flex flex-col gap-1.5">
            <span className="font-sans text-[11px] uppercase tracking-widest text-muted">Nombre de la reserva</span>
            <input
              type="text"
              placeholder="Ej: Martín Gómez"
              value={cancelName}
              onChange={(e) => setCancelName(e.target.value)}
              className="rounded-[10px] border border-borderStrong bg-cream px-3.5 py-3 font-sans text-base text-ink"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="font-sans text-[11px] uppercase tracking-widest text-muted">Día y hora del turno</span>
            <input
              type="text"
              placeholder="Ej: sábado 12/09 a las 21:00"
              value={cancelWhen}
              onChange={(e) => setCancelWhen(e.target.value)}
              className="rounded-[10px] border border-borderStrong bg-cream px-3.5 py-3 font-sans text-base text-ink"
            />
          </label>
          <ButtonLink
            href={waCancel}
            target="_blank"
            rel="noopener"
            onClick={handleCancelClick}
            variant={ready ? 'destructive' : 'disabled'}
            size="lg"
            className="w-full"
          >
            <XCircle className="h-4 w-4" strokeWidth={2.4} />
            Enviar cancelación por WhatsApp
          </ButtonLink>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
