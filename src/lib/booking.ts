export type Sport = 'futbol' | 'padel';

export interface Court {
  id: string;
  name: string;
  meta: string;
  price: string;
  duration: number;
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
        { id: 'padel60', name: 'Pádel · 60 min', meta: 'Cancha doble · $20.000 el turno', price: '$20.000', duration: 60 },
        { id: 'padel90', name: 'Pádel · 90 min', meta: 'Cancha doble · $30.000 el turno', price: '$30.000', duration: 90 },
        {
          id: 'single60',
          name: 'Pádel Single · 60 min',
          meta: 'Partido 1 vs 1 · $15.000 el turno',
          price: '$15.000',
          duration: 60
        },
        {
          id: 'single90',
          name: 'Pádel Single · 90 min',
          meta: 'Partido 1 vs 1 · $22.500 el turno',
          price: '$22.500',
          duration: 90
        }
      ]
    : [
        { id: 'f5', name: 'Cancha 1 · Fútbol 5', meta: 'Junto a la entrada · $40.000 / h', price: '$40.000', duration: 60 },
        { id: 'f7a', name: 'Cancha 2 · Fútbol 7', meta: 'Al fondo · $70.000 / h', price: '$70.000', duration: 60 },
        {
          id: 'f7b',
          name: 'Cancha 3 · Fútbol 7',
          meta: 'Última del predio · $70.000 / h',
          price: '$70.000',
          duration: 60
        }
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

export function timesFor(stepMinutes: number): string[] {
  const out: string[] = [];
  for (let m = 9 * 60; m + stepMinutes <= 26 * 60; m += stepMinutes) {
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

export function waLink(phoneDigits: string, message: string): string {
  return 'https://wa.me/549' + phoneDigits.replace(/\D/g, '') + '?text=' + encodeURIComponent(message);
}
