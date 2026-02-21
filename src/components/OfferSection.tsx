import { Check, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.jpeg";

const CHECKOUT_URL = "https://pay.kirvano.com/22ef5fd4-6ee2-4df6-9371-710c50758e73";

const includes = [
  "+500 receitas Low Carb completas",
  "Café da manhã, almoço, jantar e lanches",
  "12+ receitas de sucos verdes detox",
  "Alimentação adaptada ao Mounjaro",
  "Plano de reeducação alimentar",
  "Dietas para controle da diabetes",
  "Informações nutricionais completas",
  "Atualizações gratuitas vitalícias",
];

const OfferSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 radial-glow" />
      <div className="relative max-w-2xl mx-auto px-6">
        <div className="bg-card border border-primary/30 rounded-xl p-8 md:p-10 shadow-warm glow-soft">
          {/* Ebook cover */}
          <div className="flex justify-center mb-8">
            <img
              src={ebookCover}
              alt="500 Receitas Low Carb - Alimentação adaptada ao Mounjaro"
              className="w-56 md:w-64 rounded-lg shadow-warm border border-border"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl gradient-text-gold mb-2">GUIA COMPLETO LOW CARB</h2>
            <p className="font-body text-muted-foreground text-sm">
              Acesso imediato • PDF digital • Atualizações grátis
            </p>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-3">
              <span className="font-body text-muted-foreground text-lg line-through">R$ 197,00</span>
              <div className="flex items-baseline">
                <span className="font-body text-muted-foreground text-lg">R$</span>
                <span className="font-display text-6xl md:text-7xl gradient-text-fire">29</span>
                <span className="font-body text-muted-foreground text-xl">,90</span>
              </div>
            </div>
          </div>

          {/* Includes */}
          <ul className="space-y-3 mb-8">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-foreground/90 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta animate-pulse-soft flex items-center justify-center gap-3 text-xl w-full"
          >
            COMPRAR AGORA — R$ 29,90
            <ArrowRight className="w-6 h-6" />
          </a>

          {/* Guarantees */}
          <div className="flex items-center justify-center gap-6 mt-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <p className="font-body text-sm">Garantia de 7 dias</p>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <p className="font-body text-sm">Acesso imediato</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
