import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoBar } from './components/InfoBar';
import { Turnero } from './components/Turnero';
import { Precios } from './components/Precios';
import { Complejo } from './components/Complejo';
import { Cancelar } from './components/Cancelar';
import { Ubicacion } from './components/Ubicacion';
import { Footer } from './components/Footer';
import { WhatsappFloat } from './components/WhatsappFloat';
import { TooltipProvider } from './components/Tooltip';
import { waLink } from './lib/booking';

const PHONE = '3516598378';

export default function App() {
  const waGeneral = waLink(PHONE, '¡Hola AFA! Quiero reservar una cancha.');

  return (
    <TooltipProvider>
      <div className="bg-cream font-sans text-ink">
        <Header />
        <div className="min-h-screen overflow-x-hidden">
          <Hero />
          <InfoBar />
          <Turnero phone={PHONE} />
          <Precios />
          <Complejo />
          <Cancelar phone={PHONE} />
          <Ubicacion />
          <Footer />
        </div>
        <WhatsappFloat href={waGeneral} />
      </div>
    </TooltipProvider>
  );
}
