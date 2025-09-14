import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Forum Entreprises",
      description: "Rencontrez directement les recruteurs des plus grandes entreprises du secteur IT et conseil.",
      icon: "🏢"
    },
    {
      title: "Coaching Carrière",
      description: "Accompagnement personnalisé pour définir votre projet professionnel et optimiser vos candidatures.",
      icon: "🎯"
    },
    {
      title: "Formations Techniques",
      description: "Workshops et formations sur les dernières technologies et méthodologies du marché.",
      icon: "💻"
    },
    {
      title: "Réseau Alumni",
      description: "Accédez à notre réseau d'anciens étudiants occupant des postes stratégiques en entreprise.",
      icon: "🤝"
    },
    {
      title: "Veille Technologique",
      description: "Restez informés des dernières tendances et innovations dans le domaine de l'IT.",
      icon: "📊"
    },
    {
      title: "Projets Collaboratifs",
      description: "Participez à des projets concrets avec nos entreprises partenaires.",
      icon: "🚀"
    }
  ];

  return (
    <section id="services" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              NOS SERVICES
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Un écosystème d'excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Des services premium conçus pour transformer votre potentiel en succès professionnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-smooth cursor-pointer bg-gradient-card border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-bounce">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;