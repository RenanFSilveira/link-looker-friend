import { Shield, Lock, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-12">
      <div className="container">
        {/* Guarantee Banner */}
        <div className="bg-card/10 rounded-2xl p-6 mb-12 max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Shield className="w-12 h-12 text-secondary" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-card">
                Satisfação Garantida
              </h3>
              <p className="text-card/80">
                Seu dinheiro de volta em até 7 dias se não ficar satisfeita
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-card/80">
            <Lock className="w-5 h-5" />
            <span className="text-sm">Site Protegido</span>
          </div>
          <div className="flex items-center gap-2 text-card/80">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-card/80">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">Suporte via WhatsApp</span>
          </div>
        </div>

        {/* Logo */}
        <div className="text-center mb-6">
          <span className="text-2xl font-bold text-card">bellawave</span>
        </div>

        {/* Copyright */}
        <div className="text-center text-card/60 text-sm">
          <p>© {new Date().getFullYear()} Bellawave Beauty. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
