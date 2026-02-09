import { ShoppingCart, Scale, Camera, BarChart3, Star, Volume2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  borderColor: string;
}

const features: Feature[] = [
  {
    icon: ShoppingCart,
    title: "Carrinhos Inteligentes",
    description: "Cria carrinhos por supermercado. Define orçamento diário e recebe alertas quando estiveres perto do limite.",
    borderColor: "border-t-primary",
  },
  {
    icon: Scale,
    title: "Conferência Precisa",
    description: "Verde = Confere | Laranja = Cobraram a mais (reclama!) | Azul = Cobraram a menos (sortudo!)",
    borderColor: "border-t-success",
  },
  {
    icon: Camera,
    title: "Provas Guardadas",
    description: "Tira fotos do talão como prova. Organização automática por compra. Essencial para reclamações.",
    borderColor: "border-t-warning",
  },
  {
    icon: BarChart3,
    title: "Quanto Já Economizaste?",
    description: "Vê quanto economizaste com erros detectados, rankings de supermercados mais confiáveis e produtos mais comprados.",
    borderColor: "border-t-[hsl(270,60%,55%)]",
  },
  {
    icon: Star,
    title: "Aprende Contigo",
    description: "Sugere produtos que compras frequentemente. Alerta quando preços estão fora do normal.",
    borderColor: "border-t-info",
  },
  {
    icon: Volume2,
    title: "Som + Vibração",
    description: "Som positivo quando confere, som de alerta quando detecta erro. Feedback imediato e claro.",
    borderColor: "border-t-success",
  },
];

const Features = () => (
  <section id="funcionalidades" className="py-20 bg-card">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Tudo que Precisas, Numa Só App
        </h2>
        <p className="mt-3 text-muted-foreground">Funcionalidades pensadas para ti</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className={`bg-card rounded-2xl border border-border border-t-4 ${f.borderColor} p-6 card-hover shadow-sm`}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
