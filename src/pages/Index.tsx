import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import PricingSection from "@/components/landing/PricingSection";
import SocialProof from "@/components/landing/SocialProof";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

/**
 * Landing Page Bellawave - Versão B (Alta Conversão)
 */

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section - Atenção + Ação Imediata */}
      <HeroSection />
      
      {/* 2. Trust Bar - Eliminar objeções imediatas */}
      <TrustBar />
      
      {/* 3. Preços - CRÍTICO: Subido para posição 3! */}
      <PricingSection />
      
      {/* 4. Prova Social - Resultados + Depoimentos */}
      <SocialProof />
      
      {/* 5. Como Funciona - Resumido em 3 cards */}
      <HowItWorks />
      
      {/* 6. Benefícios Visuais */}
      <Benefits />
      
      {/* 7. Segunda Chamada de Preços - Capturar quem rolou a página */}
      <PricingSection 
        title="Pronta para transformar sua pele?"
        subtitle="Aproveite o desconto especial de lançamento"
        showGuarantee={false}
      />
      
      {/* 8. FAQ - Eliminar objeções finais */}
      <FAQ />
      
      {/* 9. Footer com Garantia */}
      <Footer />
    </main>
  );
};

export default Index;