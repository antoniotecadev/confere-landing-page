const badges = [
  { icon: "🔒", label: "100% Seguro" },
  { icon: "🇦🇴", label: "Feito em Angola" },
  { icon: "📱", label: "Offline First" },
  { icon: "💯", label: "Grátis" },
];

const TrustBadges = () => (
  <section className="py-6 bg-card border-y border-border">
    <div className="container flex flex-wrap justify-center gap-6 md:gap-12">
      {badges.map((b) => (
        <div key={b.label} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
          <span className="text-xl">{b.icon}</span>
          {b.label}
        </div>
      ))}
    </div>
  </section>
);

export default TrustBadges;
