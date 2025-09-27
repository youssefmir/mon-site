const About = () => {
  const stats = [
    { number: "500+", label: "Étudiants membres" },
    { number: "15", label: "Années d'existence" },
    { number: "50+", label: "Entreprises partenaires" },
    { number: "100+", label: "Événements organisés" }
  ];

  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(49,35,54,0.08),transparent_65%)]" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-20 text-center">
          <p className="section-heading mb-5">NOTRE VISION</p>
          <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Façonner les leaders numériques de demain
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Depuis 15 ans, Miage Forum cultive l'excellence académique et professionnelle, créant un écosystème unique où ambition étudiante et exigence entreprise se rencontrent.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-panel relative overflow-hidden rounded-[1.8rem] border border-white/60 bg-white/70 px-8 py-10 text-center shadow-soft backdrop-blur-lg"
            >
              <div className="absolute inset-0 opacity-70" style={{
                background:
                  'radial-gradient(circle at top, rgba(49,35,54,0.16), transparent 60%), radial-gradient(circle at bottom, rgba(112,80,124,0.12), transparent 65%)',
              }} />
              <div className="relative">
                <div className="text-4xl font-semibold text-foreground sm:text-5xl">{stat.number}</div>
                <div className="mt-3 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground/80">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-white/80 p-10 shadow-soft backdrop-blur">
            <div className="absolute inset-0 opacity-80" style={{
              background:
                'linear-gradient(135deg, rgba(49,35,54,0.18) 0%, rgba(49,35,54,0.08) 45%, transparent 100%)',
            }} />
            <div className="relative space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Notre Mission</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nous créons un pont stratégique entre formation universitaire et réussite professionnelle, en offrant aux étudiants MIAGE un accompagnement personnalisé vers l'excellence.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: 'Excellence Académique',
                body: "Soutien pédagogique et méthodologique pour maximiser les performances universitaires.",
              },
              {
                title: 'Insertion Professionnelle',
                body: 'Connexions directes avec les leaders du secteur IT et conseil en management.',
              },
              {
                title: 'Développement Personnel',
                body: "Formation aux soft skills et leadership pour une carrière d'exception.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.6rem] border border-border/60 bg-white/80 px-8 py-6 shadow-soft backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-medium"
              >
                <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                <p className="mt-2 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
