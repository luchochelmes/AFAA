export type Sport = 'futbol' | 'padel';

export interface Court {
  id: string;
  name: string;
  meta: string;
}

export interface Day {
  i: number;
  dow: string;
  dom: string;
  full: string;
  key: string;
}

const DOW = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];

export function courtsFor(sport: Sport): Court[] {
  return sport === 'padel'
    ? [
        { id: 'p1', name: 'Pádel 1', meta: 'Turnos de 90 min · $18.000' },
        { id: 'p2', name: 'Pádel 2', meta: 'Turnos de 90 min · $18.000' }
      ]
    : [
        { id: 'f5', name: 'Cancha 1 · Fútbol 5', meta: 'Junto a la entrada · $28.000 / h' },
        { id: 'f7', name: 'Cancha 2 · Fútbol 7 o 9', meta: 'Al fondo · $38.000 / $48.000 / h' },
        { id: 'f9', name: 'Cancha 3 · Fútbol 7 o 9', meta: 'Última del predio · $38.000 / $48.000 / h' }
      ];
}

export function getDays(): Day[] {
  const out: Day[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    out.push({
      i,
      dow: i === 0 ? 'hoy' : DOW[d.getDay()],
      dom: String(d.getDate()).padStart(2, '0'),
      full: DOW[d.getDay()] + ' ' + String(d.getDate()).padStart(2, '0') + '/' + String(d.getMonth() + 1).padStart(2, '0'),
      key: d.toISOString().slice(0, 10)
    });
  }
  return out;
}

export function timesFor(sport: Sport): string[] {
  const out: string[] = [];
  const step = sport === 'padel' ? 90 : 60;
  for (let m = 9 * 60; m + step <= 26 * 60; m += step) {
    const h = Math.floor(m / 60) % 24;
    out.push(String(h).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'));
  }
  return out;
}

export function isTaken(key: string, courtId: string, time: string): boolean {
  const s = key + courtId + time;
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 1000;
  return h % 10 < 4;
}

export function priceFor(courtId: string): string {
  if (courtId === 'p1' || courtId === 'p2') return '$18.000';
  if (courtId === 'f5') return '$28.000';
  return '$38.000';
}

export function waLink(phoneDigits: string, message: string): string {
  return 'https://wa.me/549' + phoneDigits.replace(/\D/g, '') + '?text=' + encodeURIComponent(message);
}
