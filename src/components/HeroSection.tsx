import heroBg from "@/assets/hero-bg.jpg";

const CHECKOUT_URL = "https://pay.kirvano.com/22ef5fd4-6ee2-4df6-9371-710c50758e73";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 radial-glow" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <p className="font-body text-primary font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          🔥 Chef Amellie Bitt — Receitas que Transformam
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <span className="gradient-text-fire">Domine a Cozinha</span>
          <br />
          <span className="gradient-text-gold">Com Receitas de Elite</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Mais de 15 receitas exclusivas com valor nutricional completo, passo a passo detalhado e o toque profissional da Chef Amellie Bitt.
        </p>

        <ul className="font-body text-foreground/80 space-y-2 mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {["Receitas com informação nutricional completa", "Passo a passo fácil de seguir", "Resultados de nível profissional em casa"].map((item) => (
            <li key={item} className="flex items-center justify-center gap-2">
              <span className="text-primary">✦</span> {item}
            </li>
          ))}
        </ul>

        <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta animate-pulse-soft inline-block text-xl"
          >
            QUERO MINHAS RECEITAS AGORA
          </a>
          <p className="font-body text-muted-foreground text-sm mt-4">
            Acesso imediato • Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
