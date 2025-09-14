const About = () => {
  const stats = [
    { number: "500+", label: "Étudiants membres" },
    { number: "15", label: "Années d'existence" },
    { number: "50+", label: "Entreprises partenaires" },
    { number: "100+", label: "Événements organisés" }
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              NOTRE VISION
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight max-w-4xl mx-auto">
              Façonner les leaders numériques de demain
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Depuis 15 ans, Miage Forum cultive l'excellence académique et professionnelle, 
              créant un écosystème unique où ambition étudiante et exigence entreprise se rencontrent.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Notre Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous créons un pont stratégique entre formation universitaire et réussite professionnelle, 
                en offrant aux étudiants MIAGE un accompagnement personnalisé vers l'excellence.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Excellence Académique</h4>
                <p className="text-muted-foreground">
                  Soutien pédagogique et méthodologique pour maximiser les performances universitaires.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Insertion Professionnelle</h4>
                <p className="text-muted-foreground">
                  Connexions directes avec les leaders du secteur IT et conseil en management.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Développement Personnel</h4>
                <p className="text-muted-foreground">
                  Formation aux soft skills et leadership pour une carrière d'exception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;