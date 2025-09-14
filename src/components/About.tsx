import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "500+", label: "Étudiants membres" },
    { number: "15", label: "Années d'existence" },
    { number: "50+", label: "Entreprises partenaires" },
    { number: "100+", label: "Événements organisés" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              À propos de Miage Forum
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Créée par et pour les étudiants de la filière MIAGE, notre association accompagne 
              les futurs professionnels vers l'excellence dans le domaine de l'informatique de gestion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Notre Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nous créons un pont entre le monde académique et professionnel, en offrant 
                aux étudiants MIAGE les outils, les connexions et les opportunités nécessaires 
                pour réussir leur transition vers le marché du travail.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Accompagnement personnalisé dans l'orientation professionnelle
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Mise en relation avec les entreprises du secteur
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Formation continue et développement des compétences
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;