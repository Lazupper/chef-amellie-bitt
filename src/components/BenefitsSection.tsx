import { Scale, Utensils, Heart, Clock, Leaf, BarChart3 } from "lucide-react";

const benefits = [
  { icon: Scale, title: "Emagrecimento Real", desc: "Receitas planejadas para déficit calórico sem abrir mão do sabor." },
  { icon: Utensils, title: "Todas as Refeições", desc: "Café da manhã, almoço, jantar, lanches e sobremesas Low Carb." },
  { icon: Heart, title: "Saúde em Primeiro", desc: "Adaptado ao Mounjaro e controle de diabetes com segurança." },
  { icon: Clock, title: "Rápido & Prático", desc: "Receitas de 10 a 40 minutos para encaixar na sua rotina." },
  { icon: Leaf, title: "Ingredientes Acessíveis", desc: "Sem ingredientes caros ou difíceis de encontrar." },
  { icon: BarChart3, title: "Macros Calculados", desc: "Informação nutricional completa para controle total." },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl gradient-text-gold mb-4">Por que este guia funciona?</h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Um método completo para emagrecer comendo receitas deliciosas.
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
