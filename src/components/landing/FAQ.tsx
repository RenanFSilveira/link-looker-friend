import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Em quanto tempo vejo resultados usando o sérum?",
    answer: "Os primeiros efeitos podem ser percebidos a partir da primeira semana, com a pele mais hidratada e luminosa. Após 30 dias de uso contínuo, os resultados incluem redução visível de manchas e textura mais uniforme.",
  },
  {
    question: "Serve para todos os tipos de pele?",
    answer: "Sim! A fórmula foi desenvolvida para todos os tipos de pele, inclusive as oleosas e sensíveis. Sua textura é ultraleve, não oleosa e de rápida absorção, perfeita para uso diário.",
  },
  {
    question: "Posso usar o sérum durante o dia?",
    answer: "Sim! Ele pode ser usado tanto de dia quanto à noite. Durante o dia, é importante aplicar protetor solar após o sérum, pois os ativos promovem renovação celular e precisam de proteção contra os raios UV.",
  },
  {
    question: "Quanto tempo dura um frasco?",
    answer: "Usando duas vezes ao dia (manhã e noite), o frasco de 30 ml costuma render entre 30 e 45 dias. O uso contínuo é essencial para manter os resultados alcançados.",
  },
  {
    question: "Onde comprar com segurança?",
    answer: "A compra deve ser feita exclusivamente pelo site oficial da Bellawave, com frete grátis para todo o Brasil, pagamento 100% seguro e envio rastreável. Evite revendas não autorizadas para garantir autenticidade e qualidade.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Sérum Facial Bellawave
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-0 rounded-xl shadow-soft px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
