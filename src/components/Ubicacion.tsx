import { Clock, Instagram, MapPin, Phone } from 'lucide-react';
import { ButtonLink } from './Button';

export function Ubicacion() {
  return (
    <section id="ubicacion" className="mt-10 bg-ink text-cream sm:mt-14">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-6 px-4 py-10 sm:grid-cols-2 sm:gap-[30px] sm:px-5 sm:py-14">
        <div>
          <div className="mb-3.5 font-sans text-xs uppercase tracking-widest text-lime">Ubicación</div>
          <h2
            className="mb-[18px] font-display font-extrabold leading-[1.05] tracking-tighter"
            style={{ fontSize: 'clamp(26px, 6vw, 40px)' }}
          >
            Av. Juan B. Justo 4981
            <br />
            Córdoba Capital
          </h2>
          <div className="mb-6 flex flex-col gap-2.5 text-base text-cream2">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-lime" strokeWidth={2.2} />
              Barrio Parque Liceo · X5001 GYL
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-lime" strokeWidth={2.2} />
              Todos los días de 9:00 a 02:00
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-lime" strokeWidth={2.2} />
              Tel. 0351 754-5955
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href="https://www.google.com/maps/search/?api=1&query=Av.+Juan+B+Justo+4981+C%C3%B3rdoba"
              target="_blank"
              rel="noopener"
              variant="primary"
              size="lg"
              className="w-full justify-center sm:w-auto"
            >
              <MapPin className="h-4 w-4" strokeWidth={2.4} />
              Abrir en Google Maps
            </ButtonLink>
            <ButtonLink
              href="https://www.instagram.com/afapadel/"
              target="_blank"
              rel="noopener"
              variant="outlineLight"
              size="lg"
              className="w-full justify-center sm:w-auto"
            >
              <Instagram className="h-4 w-4" strokeWidth={2.2} />
              @afapadel
            </ButtonLink>
          </div>
        </div>
        <div className="min-h-[300px] overflow-hidden rounded-[18px] border border-greenBorder bg-greenDeep">
          <iframe
            title="Mapa del complejo"
            src="https://www.google.com/maps?q=Av.%20Juan%20B%20Justo%204981%2C%20C%C3%B3rdoba&output=embed"
            loading="lazy"
            className="block h-[340px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
