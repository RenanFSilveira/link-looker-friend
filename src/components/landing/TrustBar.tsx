import { Truck, Shield, Award, Lock } from "lucide-react";

const trustItems = [
  {
    icon: Truck,
    title: "Frete Grátis",
    subtitle: "Para todo o Brasil",
  },
  {
    icon: Shield,
    title: "Dermatologicamente",
    subtitle: "Testado e Aprovado",
  },
  {
    icon: Award,
    title: "Satisfação",
    subtitle: "Garantida", // Encurtei levemente para caber melhor no mobile grid
  },
  {
    icon: Lock,
    title: "Pagamento",
    subtitle: "100% Seguro",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-primary py-6">
      <div className="container px-4">
        {/* Grid ajustado para mobile: Itens empilhados verticalmente dentro da célula */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center gap-3 justify-center text-center md:text-left"
            >
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              {/* Removido o 'hidden' para aparecer no mobile */}
              <div className="flex flex-col">
                <p className="text-primary-foreground font-bold text-sm leading-tight">
                  {item.title}
                </p>
                <p className="text-primary-foreground/90 text-xs mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;