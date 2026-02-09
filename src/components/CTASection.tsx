import { Play, Heart } from "lucide-react";

const CTASection = () => (
  <section id="download" className="py-20 gradient-cta">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Protege o Teu Dinheiro. Baixa Agora!
      </h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
        Junta-te a milhares de angolanos que já economizam com Confere
      </p>
      <div className="mt-8 flex flex-col items-center gap-4">
        <a
          href="#"
          className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 animate-pulse-slow hover:opacity-90 transition-opacity"
        >
          <Play className="w-6 h-6 fill-current" />
          Baixar na Google Play
        </a>
        <span className="text-sm text-muted-foreground">Em breve na App Store</span>
        <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-1.5 text-sm font-semibold text-success">
          <Heart className="w-4 h-4 fill-current" />
          Grátis para baixar
        </span>
      </div>
    </div>
  </section>
);

export default CTASection;
