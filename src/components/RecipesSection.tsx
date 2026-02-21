import { Clock } from "lucide-react";
import { useState } from "react";

interface Recipe {
  name: string;
  time: string;
  nutrition: { carbs: number; protein: number; fat: number; fiber: number };
  preparo: string;
}

const recipes: Recipe[] = [
  {
    name: "Filé Mignon ao Molho de Mostarda",
    time: "35 min",
    nutrition: { carbs: 8, protein: 52, fat: 30, fiber: 10 },
    preparo: "Sele o filé em fogo alto com azeite. Reserve. Na mesma panela, refogue cebola e alho, adicione mostarda Dijon, creme de leite e deixe reduzir. Volte o filé, finalize com salsinha.",
  },
  {
    name: "Risoto de Cogumelos Selvagens",
    time: "45 min",
    nutrition: { carbs: 55, protein: 12, fat: 18, fiber: 15 },
    preparo: "Refogue cebola e alho em manteiga. Adicione arroz arbóreo e vinho branco. Vá adicionando caldo quente aos poucos. Salteie cogumelos à parte e misture ao final com parmesão.",
  },
  {
    name: "Salmão Grelhado com Crosta de Ervas",
    time: "25 min",
    nutrition: { carbs: 5, protein: 48, fat: 32, fiber: 15 },
    preparo: "Misture ervas frescas com azeite e pão ralado. Cubra o salmão e leve ao forno a 200°C por 18 min. Sirva com legumes assados.",
  },
  {
    name: "Frango ao Curry com Leite de Coco",
    time: "40 min",
    nutrition: { carbs: 15, protein: 42, fat: 22, fiber: 21 },
    preparo: "Refogue peito de frango em cubos. Adicione pasta de curry, leite de coco e tomate. Cozinhe por 25 min em fogo baixo. Sirva com arroz basmati.",
  },
  {
    name: "Massa ao Pesto de Manjericão",
    time: "20 min",
    nutrition: { carbs: 58, protein: 15, fat: 20, fiber: 7 },
    preparo: "Bata manjericão fresco, parmesão, pinoli, alho e azeite no processador. Cozinhe a massa al dente e misture o pesto. Finalize com tomates cereja.",
  },
  {
    name: "Bowl de Açaí Energético",
    time: "10 min",
    nutrition: { carbs: 62, protein: 8, fat: 12, fiber: 18 },
    preparo: "Bata polpa de açaí com banana congelada e um pouco de leite. Sirva em bowl com granola, frutas frescas, mel e chia.",
  },
  {
    name: "Camarão Flamejado ao Alho",
    time: "20 min",
    nutrition: { carbs: 6, protein: 45, fat: 28, fiber: 21 },
    preparo: "Aqueça manteiga com alho laminado. Adicione camarões e flambe com conhaque. Finalize com salsinha e pimenta dedo-de-moça.",
  },
  {
    name: "Salada Caesar Premium",
    time: "15 min",
    nutrition: { carbs: 18, protein: 25, fat: 30, fiber: 27 },
    preparo: "Monte com alface romana, croutons artesanais, lascas de parmesão e frango grelhado. Regue com molho caesar caseiro feito com anchovas.",
  },
  {
    name: "Bolo de Chocolate Intenso",
    time: "50 min",
    nutrition: { carbs: 52, protein: 10, fat: 28, fiber: 10 },
    preparo: "Derreta chocolate 70% com manteiga. Misture ovos, açúcar, farinha e cacau. Asse a 180°C por 35 min. Cubra com ganache de chocolate.",
  },
  {
    name: "Tacos de Carne Assada",
    time: "30 min",
    nutrition: { carbs: 32, protein: 38, fat: 20, fiber: 10 },
    preparo: "Tempere acém com cominho, páprica e alho. Grelhe e desfie. Monte tortilhas com guacamole, carne, pico de gallo e sour cream.",
  },
  {
    name: "Sopa Cremosa de Abóbora",
    time: "35 min",
    nutrition: { carbs: 38, protein: 8, fat: 15, fiber: 39 },
    preparo: "Cozinhe abóbora em cubos com cebola e gengibre. Bata no liquidificador, volte ao fogo com creme de leite. Sirva com sementes torradas.",
  },
  {
    name: "Wrap Fitness de Frango",
    time: "15 min",
    nutrition: { carbs: 28, protein: 42, fat: 12, fiber: 18 },
    preparo: "Grelhe tiras de frango temperado. Monte wrap integral com rúcula, tomate seco, cream cheese e frango. Enrole firme e corte ao meio.",
  },
  {
    name: "Panqueca Proteica de Banana",
    time: "15 min",
    nutrition: { carbs: 40, protein: 30, fat: 10, fiber: 20 },
    preparo: "Bata banana, ovos, aveia e whey no liquidificador. Faça panquecas em frigideira antiaderente. Sirva com frutas e mel.",
  },
  {
    name: "Strogonoff de Cogumelos",
    time: "30 min",
    nutrition: { carbs: 22, protein: 15, fat: 25, fiber: 38 },
    preparo: "Refogue cogumelos variados com cebola. Adicione mostarda, ketchup, molho inglês e creme de leite. Sirva com arroz e batata palha.",
  },
  {
    name: "Pudim de Leite Condensado",
    time: "60 min",
    nutrition: { carbs: 55, protein: 12, fat: 18, fiber: 15 },
    preparo: "Faça calda caramelizando açúcar. Bata leite condensado, leite e ovos. Despeje na forma e asse em banho-maria a 180°C por 50 min. Desenforme gelado.",
  },
];

const NutritionBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="flex items-center gap-2 text-xs font-body">
    <span className="text-muted-foreground w-10">{label}</span>
    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
    <span className="text-foreground/70 w-8 text-right">{value}%</span>
  </div>
);

const RecipeCard = ({ recipe, index }: { recipe: Recipe; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:border-primary/30 transition-all duration-300">
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg leading-tight normal-case" style={{ textTransform: "none" }}>
            <span className="text-primary font-body text-sm font-semibold">#{index + 1}</span>
            <br />
            {recipe.name}
          </h3>
          <span className="flex items-center gap-1 text-muted-foreground text-xs font-body whitespace-nowrap ml-2">
            <Clock className="w-3 h-3" /> {recipe.time}
          </span>
        </div>

        <div className="space-y-1.5 mb-4">
          <NutritionBar label="Carb" value={recipe.nutrition.carbs} color="gradient-gold" />
          <NutritionBar label="Prot" value={recipe.nutrition.protein} color="gradient-fire" />
          <NutritionBar label="Gord" value={recipe.nutrition.fat} color="bg-accent" />
          <NutritionBar label="Fibra" value={recipe.nutrition.fiber} color="bg-secondary" />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="font-body text-primary text-sm font-semibold hover:underline"
        >
          {open ? "Fechar preparo ▲" : "Ver modo de preparo ▼"}
        </button>

        {open && (
          <p className="font-body text-foreground/80 text-sm mt-3 leading-relaxed border-t border-border pt-3">
            {recipe.preparo}
          </p>
        )}
      </div>
    </div>
  );
};

const RecipesSection = () => {
  return (
    <section id="receitas" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl gradient-text-fire mb-4">15 Receitas Exclusivas</h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Cada receita com valor nutricional, tempo de preparo e instruções detalhadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((r, i) => (
            <RecipeCard key={r.name} recipe={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
