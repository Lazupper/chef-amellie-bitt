import ebookCover from "@/assets/ebook-cover.jpeg";
import chefAmellie from "@/assets/chef-amellie.jpeg";
import { Instagram } from "lucide-react";

const CHECKOUT_URL = "https://pay.kirvano.com/22ef5fd4-6ee2-4df6-9371-710c50758e73";
const INSTAGRAM_URL = "https://www.instagram.com/chefamelliebitt/";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - ebook cover */}
      <div className="absolute inset-0">
        <img src={ebookCover} alt="500 Receitas Low Carb" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 radial-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left - Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="font-body text-primary font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              🔥 Chef Amellie Bitt — Receitas que Transformam
            </p>

            <h1 className="text-5xl md:text-7xl leading-none mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="gradient-text-fire">500 Receitas</span>
              <br />
              <span className="gradient-text-gold">Low Carb</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Alimentação adaptada ao Mounjaro com receitas para todas as refeições do dia. Passo a passo detalhado e valor nutricional completo.
            </p>

            <ul className="font-body text-foreground/80 space-y-2 mb-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {["Café da manhã, almoço, jantar e sobremesas", "Informação nutricional completa", "Resultados de nível profissional em casa"].map((item) => (
                <li key={item} className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-primary">✦</span> {item}
                </li>
              ))}
            </ul>

            <div className="animate-fade-up flex flex-col sm:flex-row items-center gap-4" style={{ animationDelay: "0.5s" }}>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta animate-pulse-soft inline-block text-xl"
              >
                QUERO MINHAS RECEITAS AGORA
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-5 py-3"
              >
                <Instagram className="w-5 h-5" />
                @chefamelliebitt
              </a>
            </div>
            <p className="font-body text-muted-foreground text-sm mt-4">
              Acesso imediato • Garantia de 7 dias
            </p>
          </div>

          {/* Right - Chef photo */}
          <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-xl" />
              <img
                src={chefAmellie}
                alt="Chef Amellie Bitt"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-warm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
