import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Truck, Check } from "lucide-react";
import heroProduct from "@/assets/hero-product.png";

const socialProofNames = [
  "Maria S.",
  "Ana Paula",
  "Juliana M.",
  "Fernanda C.",
  "Camila R.",
  "Beatriz L.",
  "Carolina A.",
  "Patrícia F.",
];

const HeroSection = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % socialProofNames.length);
        setShowNotification(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[120vh] lg:min-h-screen bg-gradient-hero overflow-hidden">
      {/* Faixa de destaque superior - Frete Grátis */}
      <div className="w-full bg-coral-dark py-3 px-4">
        <div className="flex items-center justify-center gap-2 text-primary-foreground">
          <Truck className="w-5 h-5" />
          <span className="text-sm font-medium tracking-wide">
            Frete grátis para todo o Brasil
          </span>
        </div>
      </div>

      {/* Container principal */}
      <div className="container flex flex-col items-center justify-start pt-8 pb-16 lg:pt-12 lg:pb-20">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6 lg:mb-8">
          <span className="text-lg font-normal text-foreground/80 tracking-wide">bella</span>
          <span className="text-3xl font-bold text-foreground -mt-1 tracking-tight">wave.</span>
        </div>

        {/* Headline Principal */}
        <div className="text-center max-w-md lg:max-w-2xl mb-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Está cansada de{" "}
            <span className="text-primary">manchas</span> e{" "}
            <span className="text-primary">acne</span>?
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-center text-base md:text-lg text-foreground/80 max-w-sm lg:max-w-md mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Transforme sua rotina de skincare em um tratamento de alta performance. 
          Resultados visíveis com cuidado diário.
        </p>

        {/* Imagem do produto */}
        <div className="relative w-[75%] max-w-sm lg:max-w-md mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={heroProduct}
              alt="Sérum Facial Bellawave - Alta Performance"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* CTA Principal */}
        <Button
          size="lg"
          className="bg-secondary hover:bg-green-dark text-secondary-foreground font-bold text-lg px-10 py-7 rounded-full shadow-cta animate-pulse-glow animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
          onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Comprar agora
        </Button>

        {/* Texto de reforço */}
        <p className="text-center text-sm text-foreground/60 mt-6 max-w-xs animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Pele visivelmente mais uniforme e hidratada
        </p>
      </div>

      {/* Notificação de prova social flutuante */}
      <div
        className={`fixed bottom-24 left-4 z-50 transition-all duration-500 ${
          showNotification ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 bg-green-light border border-secondary/20 rounded-xl px-4 py-3 shadow-lg max-w-[280px]">
          <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-secondary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">
              {socialProofNames[currentNotification]}
            </span>
            <span className="text-xs text-foreground/70">
              acabou de comprar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
