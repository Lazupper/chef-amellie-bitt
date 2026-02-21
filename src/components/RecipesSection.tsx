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
    name: "Omelete de Espinafre e Queijo",
    time: "10 min",
    nutrition: { carbs: 4, protein: 28, fat: 22, fiber: 6 },
    preparo: "Bata 3 ovos com sal e pimenta. Refogue espinafre com alho. Despeje os ovos na frigideira, adicione queijo e dobre ao meio.",
  },
  {
    name: "Frango Grelhado com Brócolis",
    time: "25 min",
    nutrition: { carbs: 6, protein: 48, fat: 15, fiber: 12 },
    preparo: "Tempere peito de frango com ervas. Grelhe até dourar. Cozinhe brócolis no vapor e sirva com azeite e limão.",
  },
  {
    name: "Salmão com Aspargos",
    time: "20 min",
    nutrition: { carbs: 5, protein: 42, fat: 28, fiber: 8 },
    preparo: "Tempere salmão com limão e ervas. Asse a 200°C com aspargos por 18 min. Finalize com azeite extra-virgem.",
  },
  {
    name: "Salada de Abacate com Ovo",
    time: "10 min",
    nutrition: { carbs: 8, protein: 18, fat: 32, fiber: 14 },
    preparo: "Corte abacate maduro, adicione ovo cozido picado, tomate cereja, cebola roxa e regue com azeite e limão.",
  },
  {
    name: "Carne Moída com Abobrinha",
    time: "20 min",
    nutrition: { carbs: 7, protein: 38, fat: 20, fiber: 10 },
    preparo: "Refogue carne moída com alho e cebola. Adicione abobrinha em cubos, tempere e cozinhe até amolecer.",
  },
  {
    name: "Panqueca Low Carb de Coco",
    time: "15 min",
    nutrition: { carbs: 10, protein: 22, fat: 18, fiber: 8 },
    preparo: "Bata ovos, farinha de coco e cream cheese. Faça panquecas finas na frigideira. Sirva com frutas vermelhas.",
  },
  {
    name: "Sopa Cremosa de Couve-flor",
    time: "30 min",
    nutrition: { carbs: 12, protein: 10, fat: 15, fiber: 18 },
    preparo: "Cozinhe couve-flor com cebola e alho. Bata no liquidificador, volte ao fogo com creme de leite e noz-moscada.",
  },
  {
    name: "Wrap de Alface com Frango",
    time: "15 min",
    nutrition: { carbs: 5, protein: 35, fat: 12, fiber: 8 },
    preparo: "Use folhas de alface como wrap. Recheie com frango desfiado, cream cheese e tomate seco. Enrole e sirva.",
  },
  {
    name: "Mousse de Chocolate Low Carb",
    time: "15 min",
    nutrition: { carbs: 8, protein: 10, fat: 28, fiber: 6 },
    preparo: "Derreta chocolate 70% com creme de leite. Bata até ficar aerado. Adoce com eritritol e leve à geladeira por 2h.",
  },
  {
    name: "Espaguete de Abobrinha ao Pesto",
    time: "15 min",
    nutrition: { carbs: 8, protein: 12, fat: 22, fiber: 10 },
    preparo: "Corte abobrinha em tiras finas com espiralizador. Salteie rapidamente e misture com pesto de manjericão caseiro.",
  },
  {
    name: "Bowl de Atum com Abacate",
    time: "10 min",
    nutrition: { carbs: 6, protein: 38, fat: 25, fiber: 10 },
    preparo: "Monte bowl com atum em lata, abacate fatiado, pepino, gergelim e regue com shoyu e limão.",
  },
  {
    name: "Hambúrguer sem Pão",
    time: "20 min",
    nutrition: { carbs: 5, protein: 42, fat: 28, fiber: 6 },
    preparo: "Grelhe hambúrguer artesanal. Sirva sobre folhas de alface com queijo, tomate, cebola caramelizada e mostarda.",
  },
  {
    name: "Suco Verde Detox",
    time: "5 min",
    nutrition: { carbs: 12, protein: 4, fat: 2, fiber: 15 },
    preparo: "Bata couve, gengibre, limão, pepino e hortelã com água gelada. Coe e sirva imediatamente.",
  },
  {
    name: "Pudim de Chia com Coco",
    time: "10 min",
    nutrition: { carbs: 10, protein: 8, fat: 18, fiber: 22 },
    preparo: "Misture sementes de chia com leite de coco e eritritol. Leve à geladeira por 4h. Sirva com frutas.",
  },
  {
    name: "Frango ao Curry com Leite de Coco",
    time: "35 min",
    nutrition: { carbs: 10, protein: 42, fat: 22, fiber: 8 },
    preparo: "Refogue frango em cubos com curry e cúrcuma. Adicione leite de coco e cozinhe por 20 min. Sirva com couve-flor.",
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
          <h2 className="text-4xl md:text-5xl gradient-text-fire mb-4">Prévia das Receitas</h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Confira algumas das 500 receitas Low Carb que vão te ajudar a emagrecer com sabor.
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
