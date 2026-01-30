import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import PricingSection from "@/components/landing/PricingSection";
import SocialProof from "@/components/landing/SocialProof";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

/**
 * Landing Page Bellawave - Versão B (Alta Conversão)
 * 
 * Estrutura AIDA Otimizada:
 * 1. Hero Section (Atenção + Ação Imediata) - Headline foca no BENEFÍCIO
 * 2. Trust Bar (Confiança)
 * 3. Preços (SUBIDOS PARA CIMA!) - De posição 9 para posição 3
 * 4. Prova Social (Resultados + Depoimentos)
 * 5. Como Funciona (Resumido em 3 cards)
 * 6. Benefícios Visuais
 * 7. Segunda Chamada de Preços
 * 8. FAQ
 * 9. Footer com Garantia
 * 
 * Mudanças principais do plano de ação:
 * ✅ Headline de DOR → BENEFÍCIO ("Pele radiante em 30 dias")
 * ✅ Prova social na hero ("+1.000 mulheres já experimentaram")
 * ✅ Preços na posição 3 (antes era posição 9)
 * ✅ Kit 60 dias destacado como "Mais Vendido"
 * ✅ Garantia visível próximo aos preços
 * ✅ Urgência/escassez ("Últimas unidades")
 * ✅ Seções reduzidas e mais objetivas
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
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
};

export default Index;
