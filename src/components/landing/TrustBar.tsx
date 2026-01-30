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
    subtitle: "Garantida ou dinheiro de volta",
  },
  {
    icon: Lock,
    title: "Pagamento",
    subtitle: "100% Seguro",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-primary py-4">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <p className="text-primary-foreground font-semibold text-sm leading-tight">
                  {item.title}
                </p>
                <p className="text-primary-foreground/80 text-xs">
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
