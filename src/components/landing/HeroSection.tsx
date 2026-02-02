import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import heroProduct from "@/assets/hero-product.png";

// Importação da logo única
// Certifique-se de adicionar o arquivo 'logo-unica.png' na pasta src/assets/logos/
import logoUnica from "@/assets/logos/logo-unica.jpeg"; 

const HeroSection = () => {
  // Definição das cores solicitadas para facilitar a manutenção
  const styles = {
    backgroundColor: "rgba(213, 74, 25, 1)",
    highlightColor: "rgba(190, 186, 160, 1)"
  };

  return (
    <section 
      className="relative w-full min-h-svh lg:min-h-screen overflow-hidden"
      style={{ backgroundColor: styles.backgroundColor }}
    >
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
        
        {/* LOGO ÚNICA (Com margens aumentadas) */}
        {/* Adicionado mt-10 para espaço acima e aumentado mb para 16/20 para espaço abaixo */}
        <div className="flex flex-col items-center mt-10 mb-16 lg:mb-20 h-20 justify-center">
          <img 
            src={logoUnica} 
            alt="Bellawave" 
            className="w-72 md:w-96 h-auto object-contain"
          />
        </div>

        {/* Headline Principal */}
        <div className="text-center max-w-md lg:max-w-2xl mb-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Sua pele{" "}
            <span style={{ color: styles.highlightColor }}>Radiante</span> em até{" "}
            <span style={{ color: styles.highlightColor }}>30 dias</span>.
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-center text-base md:text-lg text-foreground/80 max-w-sm lg:max-w-md mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Sérum facial com{" "}
          <span className="font-semibold" style={{ color: styles.highlightColor }}>Ácido Hialurônico</span> e{" "}
          <span className="font-semibold" style={{ color: styles.highlightColor }}>Niacinamida</span>. 
          Fórmula dermatológica de{" "}
          <span className="font-semibold" style={{ color: styles.highlightColor }}>alta performance</span>.
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