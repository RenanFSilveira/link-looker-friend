import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Banner - Placeholder para imagem de fundo */}
      <div className="absolute inset-0">
        {/* Usuário irá substituir por imagem de fundo */}
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Overlay escuro para legibilidade do texto */}
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Header */}
      <header className="relative z-20 container pt-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-light text-primary-foreground/90">bella</span>
            <span className="text-3xl font-bold text-primary-foreground -mt-1">wave.</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full"
          >
            📍 Rastreie seu pedido
          </Button>
        </div>
      </header>

      {/* Hero Content - Overlaid on Banner */}
      <div className="relative z-10 container flex flex-col justify-center min-h-[calc(100vh-80px)] pb-32 lg:pb-20">
        <div className="max-w-xl space-y-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight drop-shadow-lg">
            Pele Radiante em{" "}
            <span className="block text-accent">até 30 Dias.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-md drop-shadow-md">
            Sérum facial com Ácido Hialurônico e Niacinamida. 
            Fórmula dermatológica de alta performance para uma pele renovada.
          </p>

          {/* CTA Button - Arredondado */}
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-cta"
            onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Oferta Especial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
