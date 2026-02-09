import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-footer py-16">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-footer-foreground">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold mb-2">
            <img src="/icon-1024x1024.png" alt="Confere" className="w-6 h-6" />
            Confere
          </div>
          <p className="text-sm opacity-80">Nunca mais pague a mais!</p>
          <p className="mt-4 text-xs opacity-60">© 2026 Antonio Teca. Todos os direitos reservados.</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Links Rápidos</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {["Sobre", "Funcionalidades", "Como Funciona", "FAQ", "Contacto"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="hover:opacity-100 transition-opacity">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Redes Sociais</h4>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-foreground/20 transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Download */}
        <div>
          <h4 className="font-semibold mb-3">Download</h4>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 border border-footer-foreground/20 px-4 py-2.5 text-sm font-semibold hover:bg-primary-foreground/20 transition-colors"
          >
            Google Play
          </a>
          <p className="mt-3 text-xs opacity-60">App Store — em breve</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
