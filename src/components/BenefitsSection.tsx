import { Flame, Clock, Heart, ChefHat, BookOpen, Sparkles } from "lucide-react";

const benefits = [
  { icon: ChefHat, title: "Receitas Profissionais", desc: "Pratos de nível gastronômico adaptados para sua cozinha." },
  { icon: Heart, title: "Nutrição Detalhada", desc: "Porcentagens nutricionais completas em cada receita." },
  { icon: Clock, title: "Rápido & Prático", desc: "Tempo de preparo otimizado sem perder qualidade." },
  { icon: Flame, title: "Sabor Intenso", desc: "Combinações de temperos que elevam qualquer prato." },
  { icon: BookOpen, title: "Passo a Passo", desc: "Instruções claras mesmo para iniciantes." },
  { icon: Sparkles, title: "Exclusividade", desc: "Receitas originais da Chef Amellie Bitt." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl gradient-text-gold mb-4">Por que essas receitas?</h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Cada detalhe foi pensado para transformar sua experiência na cozinha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="bg-card border border-border rounded-lg p-6 shadow-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <b.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl mb-2">{b.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
