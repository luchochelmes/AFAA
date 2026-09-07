export interface ReservationPayload {
  type: 'reserva' | 'cancelacion';
  [key: string]: unknown;
}

/**
 * Sends the booking/cancellation to the (future) backoffice's data store.
 * Fire-and-forget: never blocks or breaks the WhatsApp link if it fails,
 * since WhatsApp is still the real confirmation channel for now.
 */
export function submitReservation(payload: ReservationPayload) {
  fetch('/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(() => {
    // no backoffice/network yet — WhatsApp remains the source of truth
  });
}
