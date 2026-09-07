import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsappFloat({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="fixed right-4 z-[60] flex items-center gap-2.5 rounded-full bg-forest px-4 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(10,22,17,0.28)] hover:bg-ink hover:text-lime sm:right-5 sm:px-[22px] sm:py-[15px] sm:text-[15px]"
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <span className="relative flex h-4 w-4 flex-none items-center justify-center">
        <motion.span
          className="absolute inline-block h-full w-full rounded-full bg-lime"
          animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
        />
        <MessageCircle className="relative h-4 w-4" strokeWidth={2.4} />
      </span>
      <span className="hidden sm:inline">Reservar por WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
