import { Button } from "@/components/ui/button";
import { Check, Lock, Star, Sparkles, Gift, CreditCard, QrCode } from "lucide-react";

interface PricingCardProps {
  title: string;
  subtitle: string;
  units: number;
  originalPrice: string;
  installmentPrice: string;
  cashPrice: string;
  checkoutUrl: string;
  featured?: boolean;
  savings?: string;
  dailyPrice?: string;
}

const PricingCard = ({ 
  title, 
  subtitle,
  units, 
  originalPrice, 
  installmentPrice, 
  cashPrice, 
  checkoutUrl, 
  featured = false,
  savings,
  dailyPrice
}: PricingCardProps) => {
  return (
    <div className={`relative flex flex-col rounded-2xl transition-all duration-300 ${
      featured 
        ? 'bg-white shadow-xl ring-2 ring-primary scale-100 md:scale-105 z-10' 
        : 'bg-white/80 hover:bg-white shadow-md hover:shadow-lg scale-95 md:scale-100 border border-transparent hover:border-border'
    }`}>
      
      {/* Badge de Destaque Premium */}
      {featured && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1.5">
          <Star className="w-3 h-3 fill-current" />
          O Escolhido pelas Clientes
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col h-full">
        {/* Cabeçalho do Card */}
        <div className="text-center mb-6">
          <h3 className="font-mackay text-2xl md:text-3xl text-foreground mb-1 font-bold">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide opacity-80">
            {subtitle}
          </p>
        </div>

        {/* Imagem do Produto */}
        <div className="relative mb-6 group">
          <div className={`absolute inset-0 bg-gradient-to-b ${featured ? 'from-primary/10 to-transparent' : 'from-muted/30 to-transparent'} rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500`} />
          <img
            src={units === 1 
              ? "https://bellawavederm.com.br/wp-content/uploads/2025/10/pote-1-1-1024x1024.webp"
              : units === 2 
              ? "https://bellawavederm.com.br/wp-content/uploads/2025/10/pote-2-1-1024x1024.webp"
              : "https://bellawavederm.com.br/wp-content/uploads/2025/10/pote-3-1024x1024.webp"
            }
            alt={title}
            className="relative w-40 h-40 mx-auto object-contain drop-shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2"
          />
          
          {/* Badge de Economia */}
          {savings && (
            <div className="absolute bottom-0 right-2 bg-green-100 text-green-800 text-[10px] md:text-xs font-bold px-2 py-1 rounded-md border border-green-200">
              Economize {savings}
            </div>
          )}
        </div>

        {/* --- BOX DE BRINDE --- */}
        <div className="mb-6 bg-accent/10 border border-accent/20 rounded-xl p-3 flex items-center gap-3">
          <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
            <Gift className="w-5 h-5 text-accent" />
          </div>
          <div className="text-left leading-tight">
            <p className="text-[10px] font-bold text-accent uppercase tracking-wide">
              Brinde Exclusivo
            </p>
            <p className="text-sm font-medium text-foreground">
              Rolo Massageador Facial
            </p>
          </div>
        </div>

        {/* Preço */}
        <div className="text-center mt-auto space-y-2">
          <div className="flex flex-col items-center justify-center">
             <span className="text-muted-foreground line-through text-xs md:text-sm decoration-red-400/50">
              De {originalPrice}
            </span>
            <div className="flex items-baseline justify-center gap-1 text-foreground">
              <span className="text-sm font-medium text-muted-foreground">12x de</span>
              <span className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                {installmentPrice}
              </span>
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              ou {cashPrice} à vista
            </span>
          </div>

          {dailyPrice && (
            <p className="text-xs text-muted-foreground/70">
              (Menos de {dailyPrice} por dia)
            </p>
          )}
        </div>

        <div className="w-full h-px bg-border/50 my-5" />

        {/* Benefícios */}
        <ul className="space-y-2 mb-6 px-1">
          <li className="flex items-center gap-2 text-sm text-foreground/80">
            <Check className="w-4 h-4 text-secondary shrink-0" />
            <span>{units} {units === 1 ? 'frasco' : 'frascos'} de tratamento</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-foreground/80">
            <Check className="w-4 h-4 text-secondary shrink-0" />
            <span>Frete Grátis e Rastreável</span>
          </li>
          {featured && (
            <li className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
              <Sparkles className="w-4 h-4 text-accent shrink-0" />
              <span>Prioridade no envio</span>
            </li>
          )}
        </ul>

        {/* CTA */}
        <Button 
          className={`w-full py-6 text-base rounded-xl font-bold transition-all duration-300 ${
            featured 
            ? 'bg-secondary hover:bg-green-dark text-white shadow-lg shadow-green-900/10 hover:shadow-xl hover:-translate-y-1' 
            : 'bg-primary hover:bg-primary/90 text-white'
          }`}
          asChild
        >
          <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
            Quero minha pele radiante
          </a>
        </Button>
      </div>
    </div>
  );
};

interface PricingSectionProps {
  showGuarantee?: boolean;
  title?: string;
  subtitle?: string;
}

const PricingSection = ({ 
  showGuarantee = true, 
  title = "Invista na sua", // Parte 1 do título padrão
  subtitle = "Resultados dermatológicos sem sair de casa"
}: PricingSectionProps) => {
  return (
    // ADICIONADO: Gradiente de fundo sutil (Branco -> Pêssego Claro -> Branco) para tirar o aspecto "chapado"
    <section id="precos" className="py-16 md:py-24 bg-gradient-to-b from-white via-[#FFF0E5] to-white relative overflow-hidden">
      
      {/* ADICIONADO: Elementos decorativos de fundo (bolhas de luz) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 relative z-10">
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* ALTERADO: Fonte Bold e cor na palavra Autoestima */}
          <h2 className="font-mackay text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {title} <span className="text-primary">autoestima</span>
          </h2>
          <p className="text-lg text-muted-foreground/90 font-light">
            {subtitle}
          </p>
        </div>

        {/* Grid de Preços */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          <PricingCard
            title="Experimentar"
            subtitle="Tratamento 30 Dias"
            units={1}
            originalPrice="R$249,00"
            installmentPrice="19,97"
            cashPrice="R$197,97"
            checkoutUrl="https://checkout.payt.com.br/bbde6bc094cd7ba8d4f91865337c41a0"
            dailyPrice="R$ 6,59"
          />
          
          <PricingCard
            title="Recomendado"
            subtitle="Tratamento 60 Dias"
            units={2}
            originalPrice="R$395,94"
            installmentPrice="29,97"
            cashPrice="R$299,00"
            checkoutUrl="https://checkout.payt.com.br/646d445332ba2247897127ad51477843"
            featured={true}
            savings="R$96,94"
            dailyPrice="R$ 4,98"
          />
          
          <PricingCard
            title="Completo"
            subtitle="Tratamento 90 Dias"
            units={3}
            originalPrice="R$597,00"
            installmentPrice="39,97"
            cashPrice="R$399,00"
            checkoutUrl="https://checkout.payt.com.br/09fe5887fc4fe16467e9707b5d7ef0a7"
            savings="R$198,00"
            dailyPrice="R$ 4,43"
          />
        </div>

        {/* Footer de Segurança e Pagamento */}
        {showGuarantee && (
          <div className="mt-12 flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-50 rounded-full">
                  <Lock className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground">Compra 100% Segura</p>
                  <p className="text-xs text-muted-foreground">Dados protegidos</p>
                </div>
              </div>

              <div className="hidden md:block h-8 w-px bg-border/50 mx-2" />
               
              <div className="flex items-center gap-3 opacity-80">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded border border-gray-100">
                   <QrCode className="w-4 h-4 text-gray-600" />
                   <span className="text-xs font-semibold text-gray-700">PIX</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded border border-gray-100">
                   <CreditCard className="w-4 h-4 text-gray-600" />
                   <span className="text-xs font-semibold text-gray-700">Cartão</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;