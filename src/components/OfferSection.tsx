import { Check, ShieldCheck } from "lucide-react";

const CHECKOUT_URL = "https://pay.kirvano.com/22ef5fd4-6ee2-4df6-9371-710c50758e73";

const includes = [
  "15 receitas exclusivas da Chef Amellie",
  "Informação nutricional completa",
  "Modo de preparo detalhado",
  "Dicas profissionais de apresentação",
  "Acesso imediato e vitalício",
  "Atualizações gratuitas",
];

const OfferSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 radial-glow" />
      <div className="relative max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl gradient-text-gold mb-4">Oferta Especial</h2>
          <p className="font-body text-muted-foreground text-lg">Aproveite antes que o preço aumente.</p>
        </div>

        <div className="bg-card border border-primary/30 rounded-xl p-8 md:p-10 shadow-warm glow-soft">
          <div className="text-center mb-8">
            <p className="font-body text-muted-foreground text-sm line-through mb-1">De R$ 197,00</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-display text-5xl md:text-6xl gradient-text-fire">R$ 47</span>
              <span className="font-body text-muted-foreground text-lg">,00</span>
            </div>
            <p className="font-body text-secondary font-semibold text-sm mt-2">Pagamento único — Acesso vitalício</p>
          </div>

          <ul className="space-y-3 mb-8">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-foreground/90 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta animate-pulse-soft block text-center text-xl w-full"
          >
            GARANTIR MINHA VAGA AGORA
          </a>

          <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-secondary" />
            <p className="font-body text-sm">Garantia incondicional de 7 dias</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
