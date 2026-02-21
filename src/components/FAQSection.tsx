import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "As receitas são difíceis de fazer?", a: "Não! Todas as receitas foram desenvolvidas com instruções passo a passo claras, pensadas tanto para iniciantes quanto para cozinheiros experientes." },
  { q: "Recebo acesso imediato?", a: "Sim! Após a confirmação do pagamento, você recebe acesso instantâneo a todas as 15 receitas." },
  { q: "Posso acessar pelo celular?", a: "Sim, o conteúdo é 100% digital e responsivo. Acesse de qualquer dispositivo, a qualquer hora." },
  { q: "E se eu não gostar?", a: "Você tem garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu investimento." },
  { q: "As receitas incluem informações nutricionais?", a: "Sim! Cada receita vem com porcentagens detalhadas de carboidratos, proteínas, gorduras e fibras." },
  { q: "Quem é a Chef Amellie Bitt?", a: "Chef profissional com anos de experiência em gastronomia, especializada em receitas saudáveis e saborosas. Siga no Instagram: @chefamelliebitt" },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl gradient-text-fire mb-4">Perguntas Frequentes</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-lg px-6 shadow-card"
            >
              <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
