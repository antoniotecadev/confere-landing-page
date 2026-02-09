import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "É grátis?",
    a: "Sim! Baixa e usa gratuitamente. Nenhuma taxa escondida.",
  },
  {
    q: "Funciona offline?",
    a: "Sim! Todos os dados ficam no teu telemóvel. Não precisas de internet.",
  },
  {
    q: "Posso usar em qualquer supermercado?",
    a: "Sim! Funciona em Shoprite, Kero, Candando, Maxi e qualquer outro supermercado.",
  },
  {
    q: "E se encontrar um erro?",
    a: "O Confere guarda fotos do talão como prova. Podes reclamar com segurança!",
  },
  {
    q: "Os meus dados são seguros?",
    a: "100%! Tudo fica no teu telemóvel. Não enviamos nada para servidores.",
  },
  {
    q: "Como funciona a comparação?",
    a: "Comparamos o valor que calculaste vs o valor cobrado. Mostramos a diferença com cores: Verde (OK), Laranja (erro), Azul (economizaste).",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="container max-w-3xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Perguntas Frequentes
        </h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-sm"
          >
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
