import { Star } from "lucide-react";

const testimonials = [
  { name: "Mariana S.", text: "As receitas são incríveis! Nunca pensei que conseguiria fazer pratos tão bonitos em casa.", stars: 5 },
  { name: "Carlos R.", text: "A informação nutricional me ajudou muito na minha dieta. Recomendo demais!", stars: 5 },
  { name: "Juliana M.", text: "Minha família amou! Virou rotina fazer pelo menos 3 receitas por semana.", stars: 5 },
  { name: "Rafael T.", text: "Qualidade profissional com ingredientes acessíveis. A Chef Amellie é genial.", stars: 5 },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 radial-glow opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl gradient-text-fire mb-4">O que dizem nossos alunos</h2>
          <p className="font-body text-secondary text-2xl font-bold">+2.000 alunos transformados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-6 shadow-card">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-body text-foreground/90 mb-4 italic">"{t.text}"</p>
              <p className="font-body text-primary font-semibold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
