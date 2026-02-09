import heroPhone from "@/assets/confere-home.png";
import { MapPin, DollarSign, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-hero pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <MapPin className="w-4 h-4" />
              Feito em Angola, para Angola
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-tight text-foreground">
              Nunca Mais Pague a Mais nos Supermercados!
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
              Confere automaticamente o valor das tuas compras e detecta erros de cobrança.{" "}
              <strong className="text-foreground">Cada Kwanza conta!</strong>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity animate-pulse-slow"
              >
                <Play className="w-5 h-5 fill-current" />
                Baixar na Play Store
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-7 py-3.5 text-base font-bold text-primary hover:bg-primary/5 transition-colors"
              >
                Ver Demo
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-1 flex justify-center">
            <img
              src={heroPhone}
              alt="Mockup do Confere mostrando lista de compras com verificação de preços"
              className="w-64 md:w-80 drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
