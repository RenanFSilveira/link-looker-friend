import { Card } from "@/components/ui/card";
import { Beaker, Clock, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Beaker,
    title: "Fórmula Inteligente",
    description: "Ácido Hialurônico + Niacinamida + Vitamina E para resultados visíveis.",
  },
  {
    icon: Clock,
    title: "Absorção Rápida",
    description: "Textura leve, não oleosa, ideal para uso diário de manhã e à noite.",
  },
  {
    icon: CheckCircle,
    title: "Testado e Aprovado",
    description: "Dermatologicamente testado, sem parabenos ou fragrâncias artificiais.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que o{" "}
            <span className="text-primary">Bellawave</span> funciona?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia que transforma o cuidado facial em resultado visível
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card shadow-card border-0 text-center group hover:shadow-soft transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Active Ingredients */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Ácido Hialurônico", benefit: "Hidrata profundamente" },
              { name: "Ácido Salicílico", benefit: "Renova e desobstrui" },
              { name: "Niacinamida", benefit: "Uniformiza o tom" },
              { name: "Pantenol", benefit: "Restaura a barreira" },
              { name: "Vitamina E", benefit: "Ação antioxidante" },
            ].map((ingredient, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-4 text-center shadow-soft"
              >
                <p className="font-semibold text-foreground text-sm">
                  {ingredient.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {ingredient.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
