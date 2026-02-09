const steps = [
  {
    num: 1,
    emoji: "🛒",
    title: "Cria um Carrinho",
    desc: "Escolhe o supermercado e define teu orçamento (opcional)",
    color: "bg-primary",
  },
  {
    num: 2,
    emoji: "➕",
    title: "Adiciona Produtos",
    desc: "Vai adicionando produtos enquanto compras. Tira fotos se quiseres!",
    color: "bg-primary",
  },
  {
    num: 3,
    emoji: "💳",
    title: "No Caixa, Compara",
    desc: "Vê o valor calculado e insere o valor que te cobraram",
    color: "bg-primary",
  },
  {
    num: 4,
    emoji: "✓",
    title: "Recebe o Resultado",
    desc: "Verde = OK | Laranja = Erro (reclama!) | Azul = Economizaste",
    color: "bg-success",
  },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-20 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Simples como 1, 2, 3, 4!
        </h2>
        <p className="mt-3 text-muted-foreground">Vê como é fácil proteger o teu dinheiro</p>
      </div>

      {/* Desktop horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative flex justify-between items-start">
          {/* Connecting line */}
          <div className="absolute top-6 left-[12%] right-[12%] h-0.5 bg-border" />

          {steps.map((s) => (
            <div key={s.num} className="relative flex flex-col items-center text-center w-1/4 px-4">
              <div
                className={`relative z-10 w-12 h-12 rounded-full ${s.color} text-primary-foreground flex items-center justify-center text-lg font-bold shadow-lg`}
              >
                {s.num}
              </div>
              <span className="mt-4 text-3xl">{s.emoji}</span>
              <h3 className="mt-3 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden space-y-8">
        {steps.map((s, i) => (
          <div key={s.num} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full ${s.color} text-primary-foreground flex items-center justify-center text-sm font-bold`}
              >
                {s.num}
              </div>
              {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
            </div>
            <div className="pb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{s.emoji}</span>
                <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
