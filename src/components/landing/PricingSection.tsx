import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Truck, Shield, Clock } from "lucide-react";

interface PricingCardProps {
  title: string;
  units: number;
  originalPrice: string;
  installmentPrice: string;
  cashPrice: string;
  checkoutUrl: string;
  featured?: boolean;
  savings?: string;
}

const PricingCard = ({ 
  title, 
  units, 
  originalPrice, 
  installmentPrice, 
  cashPrice, 
  checkoutUrl, 
  featured = false,
  savings 
}: PricingCardProps) => {
  return (
    <Card className={`relative p-6 ${featured ? 'border-2 border-secondary shadow-cta scale-105' : 'border border-border shadow-card'} bg-card overflow-hidden transition-all hover:scale-[1.02]`}>
      {featured && (
        <div className="absolute -top-0 left-0 right-0 bg-secondary text-secondary-foreground text-center py-2 text-sm font-bold">
          ⭐ MAIS VENDIDO
        </div>
      )}
      
      <div className={`${featured ? 'pt-6' : ''} space-y-4`}>
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={units === 1 
              ? "https://bellawavederm.com.br/wp-content/uploads/2025/10/pote-1-1-1024x1024.webp"
              : units === 2 
              ? "https://bellawavederm.com.br/wp-content/uploads/2025/10/pote-2-1-1024x1024.webp"
              : "https://bellawavederm.com.br/wp-content/uploads/2025/10/pote-3-1024x1024.webp"
            }
            alt={title}
            className="w-40 h-40 object-contain"
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground">
            {units} {units === 1 ? 'unidade' : 'unidades'} do sérum facial
          </p>
        </div>

        {/* Price */}
        <div className="text-center space-y-1">
          <p className="text-muted-foreground line-through text-sm">
            De {originalPrice}
          </p>
          <p className="text-sm text-muted-foreground">por 12x</p>
          <p className="text-4xl font-bold text-primary">
            R${installmentPrice}
          </p>
          <p className="text-sm text-muted-foreground">
            ou <span className="font-semibold text-foreground">{cashPrice}</span> à vista
          </p>
          {savings && (
            <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 rounded-full mt-2">
              Economia de {savings}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Button 
          className={`w-full py-6 text-base font-semibold ${featured ? 'bg-secondary hover:bg-green-dark shadow-cta' : 'bg-primary hover:bg-coral-dark'}`}
          asChild
        >
          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
            <Truck className="w-4 h-4 mr-2" />
            Comprar com Frete Grátis
          </a>
        </Button>
      </div>
    </Card>
  );
};

interface PricingSectionProps {
  showGuarantee?: boolean;
  title?: string;
  subtitle?: string;
}

const PricingSection = ({ 
  showGuarantee = true, 
  title = "Escolha seu protocolo de tratamento",
  subtitle 
}: PricingSectionProps) => {
  return (
    <section id="precos" className="py-16 bg-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
          
          {/* Urgency */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mt-4">
            <Clock className="w-4 h-4" />
            <span className="font-medium text-sm">
              Últimas unidades com frete grátis! 🔥
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          <PricingCard
            title="Protocolo 30 dias"
            units={1}
            originalPrice="R$249,00"
            installmentPrice="19,97"
            cashPrice="R$197,97"
            checkoutUrl="https://checkout.payt.com.br/bbde6bc094cd7ba8d4f91865337c41a0"
          />
          
          <PricingCard
            title="Protocolo 60 dias"
            units={2}
            originalPrice="R$395,94"
            installmentPrice="29,97"
            cashPrice="R$299,00"
            checkoutUrl="https://checkout.payt.com.br/646d445332ba2247897127ad51477843"
            featured
            savings="R$96,94"
          />
          
          <PricingCard
            title="Protocolo 90 dias"
            units={3}
            originalPrice="R$597,00"
            installmentPrice="39,97"
            cashPrice="R$399,00"
            checkoutUrl="https://checkout.payt.com.br/09fe5887fc4fe16467e9707b5d7ef0a7"
            savings="R$198,00"
          />
        </div>

        {/* Guarantee */}
        {showGuarantee && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-6 py-4 shadow-soft">
              <Shield className="w-10 h-10 text-secondary" />
              <div className="text-left">
                <p className="font-bold text-foreground">Garantia de 7 dias</p>
                <p className="text-sm text-muted-foreground">
                  Satisfação garantida ou seu dinheiro de volta
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
