import { Check, X, Zap, Clock } from "lucide-react";

const rows = [
  {
    feature: "Detecção de erros",
    without: { icon: X, text: "Difícil", color: "text-destructive" },
    with: { icon: Check, text: "Automática", color: "text-success" },
  },
  {
    feature: "Tempo",
    without: { icon: Clock, text: "15 min", color: "text-warning" },
    with: { icon: Zap, text: "2 min", color: "text-success" },
  },
  {
    feature: "Provas",
    without: { icon: X, text: "Nenhuma", color: "text-destructive" },
    with: { icon: Check, text: "Fotos guardadas", color: "text-success" },
  },
  {
    feature: "Estatísticas",
    without: { icon: X, text: "Não", color: "text-destructive" },
    with: { icon: Check, text: "Completas", color: "text-success" },
  },
];

const ComparisonTable = () => (
  <section className="py-20 bg-card">
    <div className="container max-w-3xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Confere vs Método Manual
        </h2>
      </div>

      <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="grid grid-cols-3 bg-muted font-bold text-sm">
          <div className="p-4 text-foreground">Característica</div>
          <div className="p-4 text-center text-destructive">Sem Confere</div>
          <div className="p-4 text-center text-success">Com Confere</div>
        </div>
        {rows.map((r) => (
          <div key={r.feature} className="grid grid-cols-3 border-t border-border">
            <div className="p-4 text-sm font-medium text-foreground">{r.feature}</div>
            <div className={`p-4 flex items-center justify-center gap-2 text-sm ${r.without.color}`}>
              <r.without.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{r.without.text}</span>
            </div>
            <div className={`p-4 flex items-center justify-center gap-2 text-sm ${r.with.color}`}>
              <r.with.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{r.with.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonTable;
