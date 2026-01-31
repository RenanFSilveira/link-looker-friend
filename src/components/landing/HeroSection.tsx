import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background - usuário irá substituir depois */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background">
        {/* Placeholder para imagem de fundo */}
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      </div>

      {/* Header */}
      <header className="relative z-20 container pt-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-light text-foreground/80">bella</span>
            <span className="text-3xl font-bold text-foreground -mt-1">wave.</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
          >
            📍 Rastreie seu pedido
          </Button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container flex flex-col justify-center min-h-[calc(100vh-80px)] pb-32 lg:pb-20">
        <div className="max-w-xl space-y-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Pele Radiante em{" "}
            <span className="block">até 30 Dias.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-md">
            Sérum facial com Ácido Hialurônico e Niacinamida. 
            Fórmula dermatológica de alta performance para uma pele renovada.
          </p>

          {/* CTA Button */}
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-medium text-lg px-8 py-6 rounded-none"
            onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Oferta Especial
          </Button>
        </div>
      </div>

      {/* Product Image - Bottom Right */}
      <div className="absolute bottom-0 right-0 z-10 w-64 md:w-80 lg:w-96 pointer-events-none">
        <img
          src="https://bellawavederm.com.br/wp-content/uploads/2025/10/7-1-e1761931717456.png"
          alt="Sérum Facial Bellawave"
          className="w-full drop-shadow-2xl animate-float"
        />
      </div>
    </section>
  );
};

export default HeroSection;
