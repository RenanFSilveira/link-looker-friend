import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Pele mais macia e luminosa",
  "Textura uniforme e toque sedoso",
  "Redução visível de manchas",
  "Renovação celular e hidratação profunda",
  "Absorção leve e rápida",
  "Sem parabenos ou fragrâncias artificiais",
];

const Benefits = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://bellawavederm.com.br/wp-content/uploads/2025/10/1-3.png"
              alt="Sérum Facial Bellawave"
              className="w-80 lg:w-96 drop-shadow-2xl animate-float"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                O que você vai sentir na{" "}
                <span className="text-primary">primeira semana</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Benefícios que você percebe desde as primeiras aplicações
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button 
              size="lg"
              className="bg-secondary hover:bg-green-dark text-secondary-foreground font-semibold text-lg px-8 py-6 shadow-cta"
              onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar meu tratamento →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
