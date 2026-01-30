import { Button } from "@/components/ui/button";
import { Star, Truck, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-8 pb-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-primary">bella</span>
            <span className="text-2xl md:text-3xl font-bold text-primary">wave</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            📍 Rastreie seu pedido
          </Button>
        </header>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left - Copy */}
          <div className="space-y-6 animate-slide-up">
            {/* Badge de prova social */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft">
              <Users className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">
                <span className="text-secondary font-bold">+1.000</span> mulheres já experimentaram
              </span>
            </div>

            {/* Headline - Foco no BENEFÍCIO, não na dor */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Pele radiante em{" "}
              <span className="text-primary">até 30 dias</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Sérum facial com <strong className="text-foreground">Ácido Hialurônico</strong> e{" "}
              <strong className="text-foreground">Niacinamida</strong>. Fórmula dermatológica de alta performance.
            </p>

            {/* Urgency badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-sm font-medium">
                <Truck className="w-4 h-4" />
                Frete Grátis
              </span>
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-sm font-medium">
                🔥 Desconto de Lançamento
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-secondary hover:bg-green-dark text-secondary-foreground font-semibold text-lg px-8 py-6 shadow-cta animate-pulse-glow"
                onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quero minha pele radiante ✨
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium text-lg px-8 py-6"
                onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver oferta de lançamento
              </Button>
            </div>

            {/* Star rating */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4.9/5 baseado em mais de 500 avaliações
              </span>
            </div>
          </div>

          {/* Right - Product Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img
                src="https://bellawavederm.com.br/wp-content/uploads/2025/10/7-1-e1761931717456.png"
                alt="Sérum Facial Bellawave"
                className="w-80 md:w-96 lg:w-[450px] drop-shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    ✅
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Dermatologicamente</p>
                    <p className="text-secondary font-bold">Testado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
