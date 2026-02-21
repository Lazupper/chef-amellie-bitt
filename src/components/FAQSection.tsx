import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Esse guia funciona para quem nunca fez dieta?", a: "Sim! O guia foi pensado para iniciantes e inclui um plano de reeducação alimentar passo a passo." },
  { q: "As receitas são adaptadas ao Mounjaro?", a: "Sim! Todas as 500 receitas foram desenvolvidas com foco em Low Carb e alimentação adaptada ao Mounjaro." },
  { q: "Recebo acesso imediato?", a: "Sim! Após a confirmação do pagamento, você recebe acesso instantâneo ao guia completo em PDF." },
  { q: "Posso acessar pelo celular?", a: "Sim, o conteúdo é 100% digital em PDF. Acesse de qualquer dispositivo, a qualquer hora." },
  { q: "E se eu não gostar?", a: "Você tem garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu investimento." },
  { q: "Serve para quem tem diabetes?", a: "Sim! O guia inclui dietas específicas para controle de diabetes, com receitas de baixo índice glicêmico." },
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
