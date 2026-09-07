import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { ButtonLink } from './Button';
import { ShimmerButton } from './ShimmerButton';

const HERO_VIDEOS = ['/videos/futbol-hero.mp4', '/videos/padel-hero.mp4'];

export function Hero() {
  const [index, setIndex] = useState(0);
  const src = HERO_VIDEOS[index];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // some mobile browsers ignore the autoPlay attribute on a freshly
    // (re)mounted <video> — force it and swallow the promise rejection
    // that happens if the tab is backgrounded when this runs.
    video.muted = true;
    video.play().catch(() => {});
  }, [src]);

  return (
    <section id="top" className="relative isolate flex min-h-[520px] items-end overflow-hidden sm:min-h-[460px] md:min-h-[560px]">
      <div className="absolute inset-0 z-0 bg-ink">
        <AnimatePresence mode="wait">
          <motion.video
            ref={videoRef}
            key={src}
            className="h-full w-full object-cover"
            src={src}
            autoPlay
            muted
            loop={false}
            playsInline
            webkit-playsinline="true"
            preload="auto"
            onEnded={() => setIndex((i) => (i + 1) % HERO_VIDEOS.length)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {/* mobile: text spans the full width, so dim the whole clip evenly (bottom-heavy) instead of a side fade */}
      <div
        className="absolute inset-0 z-10 sm:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(247,248,245,0.97) 0%, rgba(247,248,245,0.8) 38%, rgba(247,248,245,0.35) 62%, rgba(247,248,245,0.1) 100%)'
        }}
      />

      {/* sm and up: left-to-right fade so the headline stays readable while the video shows on the right */}
      <div
        className="absolute inset-0 z-10 hidden sm:block"
        style={{
          background:
            'linear-gradient(to right, #F7F8F5 0%, #F7F8F5 22%, rgba(247,248,245,0.7) 38%, rgba(247,248,245,0.2) 54%, rgba(247,248,245,0) 68%)'
        }}
      />
      <div
        className="absolute inset-0 z-10 hidden sm:block"
        style={{ background: 'linear-gradient(to top, rgba(247,248,245,0.75) 0%, rgba(247,248,245,0) 42%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 mx-auto w-full max-w-[1180px] px-5 pb-10 pt-6 sm:pb-14"
      >
        <div className="mb-3 font-sans text-[11px] uppercase tracking-widest text-forest sm:mb-[18px] sm:text-xs">
          Córdoba · Av. Juan B. Justo 4981
        </div>
        <h1
          className="mb-4 max-w-[16ch] font-display font-extrabold leading-[0.95] tracking-tighter sm:mb-5 sm:leading-[0.92]"
          style={{ fontSize: 'clamp(38px, 11vw, 82px)' }}
        >
          Fútbol 5 y 7.
          <br />
          Pádel y single.
          <br />
          <span className="rounded-md bg-lime px-2.5">Y asado.</span>
        </h1>
        <p className="mb-6 max-w-[46ch] text-base leading-relaxed text-body sm:mb-7 sm:text-lg">
          Tres canchas de fútbol de césped sintético y dos de pádel, con buffet, parrillas y luz LED para jugar de
          noche. Elegís día y horario acá, confirmás por WhatsApp en un mensaje.
        </p>
        <div className="flex flex-wrap gap-3">
          <ShimmerButton href="#turnero" className="w-full justify-center sm:w-auto">
            Ver horarios libres
          </ShimmerButton>
          <ButtonLink href="tel:03517545955" variant="outline" size="lg" className="w-full justify-center sm:w-auto">
            <Phone className="h-4 w-4" strokeWidth={2.4} />
            0351 754-5955
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  );
}
