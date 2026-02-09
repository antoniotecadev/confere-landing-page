import { Star, DollarSign, BarChart3, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stats: { value: string; label: string; icon: LucideIcon; color: string }[] = [
  { value: "127.000 Kz", label: "Economizados em média", icon: DollarSign, color: "text-success" },
  { value: "1 em 4", label: "Compras têm erros", icon: BarChart3, color: "text-warning" },
  { value: "98%", label: "Dos erros detectados", icon: CheckCircle, color: "text-primary" },
];

const testimonials = [
  {
    text: "Já detectei 3 erros em apenas 2 semanas! Economizei mais de 8.000 Kz. Agora confiro SEMPRE!",
    name: "Maria Silva",
    location: "Luanda",
  },
  {
    text: "O supermercado cobrou-me 12.500 Kz a mais por um erro de digitação. Com o Confere consegui provar e recuperar o dinheiro!",
    name: "João Paulo",
    location: "Benguela",
  },
];

const Impact = () => (
  <section className="py-20 gradient-impact">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-impact-foreground">
          Impacto Real
        </h2>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-impact-foreground/10">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-card/20 mx-auto">
              <s.icon className="w-8 h-8 text-impact-foreground" />
            </div>
            <div className={`mt-4 text-3xl md:text-4xl font-extrabold ${s.color}`}>{s.value}</div>
            <p className="mt-2 text-sm text-impact-foreground/80">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-8 shadow-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-warning text-warning" />
              ))}
            </div>
            <p className="text-foreground/80 italic leading-relaxed">"{t.text}"</p>
            <div className="mt-4 font-semibold text-foreground">
              {t.name}
              <span className="text-muted-foreground font-normal"> — {t.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Impact;
