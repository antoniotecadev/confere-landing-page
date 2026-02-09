import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "Calculaste 15.000 Kz mas cobraram 17.500 Kz",
  "Promoções que não foram aplicadas no caixa",
  "Produtos duplicados sem perceber",
  "Preços diferentes da prateleira vs caixa",
  "Falta de transparência nos valores",
];

const solutions = [
  "Adiciona produtos enquanto compras",
  "Vê o total calculado em tempo real",
  "Compara com o valor cobrado no caixa",
  "Detecta erros automaticamente",
  "Guarda provas com fotos do talão",
];

const ProblemSection = () => (
  <section id="problema" className="py-20 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Problem */}
        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Já te aconteceu?
          </h2>
          <p className="text-sm font-semibold text-destructive/80 uppercase tracking-wide mb-4">
            A Realidade nos Supermercados
          </p>
          <ul className="space-y-4">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="gradient-success rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Com Confere, tens o controlo!
          </h2>
          <p className="text-sm font-semibold text-success uppercase tracking-wide mb-4">
            A Solução
          </p>
          <ul className="space-y-4">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-foreground/80">{s}</span>
              </li>
            ))}
          </ul>
          <a
            href="#download"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-success px-6 py-3 text-sm font-bold text-success-foreground hover:opacity-90 transition-opacity"
          >
            Experimentar Agora
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
