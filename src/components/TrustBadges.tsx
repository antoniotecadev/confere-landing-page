import { Lock, MapPin, Smartphone, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const badges: { icon: LucideIcon; label: string }[] = [
  { icon: Lock, label: "100% Seguro" },
  { icon: MapPin, label: "Feito em Angola" },
  { icon: Smartphone, label: "Offline First" },
  { icon: BadgeCheck, label: "Grátis" },
];

const TrustBadges = () => (
  <section className="py-6 bg-card border-y border-border">
    <div className="container flex flex-wrap justify-center gap-6 md:gap-12">
      {badges.map((b) => (
        <div key={b.label} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
          <b.icon className="w-5 h-5 text-primary" />
          {b.label}
        </div>
      ))}
    </div>
  </section>
);

export default TrustBadges;
