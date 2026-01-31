import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import heroProduct from "@/assets/hero-product.png";

// Importação das logos
import logo1 from "@/assets/logos/logo-1.png";
import logo2 from "@/assets/logos/logo-2.png";
import logo3 from "@/assets/logos/logo-3.png";
import logo4 from "@/assets/logos/logo-4.png";

const logos = [logo1, logo2, logo3, logo4];

const HeroSection = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Script para rotacionar a logo a cada 1 segundo (1000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-svh lg:min-h-screen bg-gradient-hero overflow-hidden">
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
      <div className="container flex flex-col items-center justify-start pt-8 pb-6 lg:pt-12 lg:pb-20">
        
        {/* LOGO DINÂMICA (Aumentada) */}
        {/* w-48 no mobile (aprox 190px) e w-64 no desktop */}
        <div className="flex flex-col items-center mb-8 lg:mb-10 h-20 justify-center">
          <img 
            src={logos[currentLogoIndex]} 
            alt="Bellawave" 
            className="w-72 md:w-96 h-auto object-contain transition-opacity duration-300"
          />
        </div>

        {/* Headline Principal */}
        <div className="text-center max-w-md lg:max-w-2xl mb-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Sua pele{" "}
            <span className="text-primary">Radiante</span> em até{" "}
            <span className="text-primary">30 dias</span>.
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-center text-base md:text-lg text-foreground/80 max-w-sm lg:max-w-md mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Sérum facial com{" "}
          <span className="text-primary font-semibold">Ácido Hialurônico</span> e{" "}
          <span className="text-primary font-semibold">Niacinamida</span>. 
          Fórmula dermatológica de{" "}
          <span className="text-primary font-semibold">alta performance</span>.
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

        {/* Selo de Frete Grátis */}
        <div 
          className="mt-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary text-secondary bg-transparent animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-xs font-bold uppercase tracking-wide">Frete Grátis</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;