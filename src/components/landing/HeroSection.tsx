import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import heroProduct from "@/assets/hero-product.png";

const HeroSection = () => {
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

        {/* Texto de reforço */}
        <p className="text-center text-sm text-foreground/60 mt-6 max-w-xs animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Resultados em até 30 dias
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
