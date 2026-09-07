import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-inkDeep text-cream3">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-4.5 px-5 pb-24 pt-7 text-[13px]">
        <span className="font-display text-[15px] font-bold text-cream">AFA · Asado, Fútbol y Amigos</span>
        <span>Av. Juan B. Justo 4981, Córdoba · 0351 754-5955</span>
        <a
          href="https://www.instagram.com/afapadel/"
          target="_blank"
          rel="noopener"
          className="flex items-center gap-1.5 text-lime"
        >
          <Instagram className="h-3.5 w-3.5" strokeWidth={2.2} />
          Instagram @afapadel
        </a>
      </div>
    </footer>
  );
}
