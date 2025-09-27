import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Annuaire des membres",
      description: "Connectez-vous à plus de 500 profils MIAGE validés et développez votre réseau professionnel.",
      icon: "🗂️",
      href: "/services/annuaire",
    },
    {
      title: "Ressources de formation",
      description: "Parcours vidéo, fiches synthèse et ateliers pour rester à jour sur les métiers du numérique.",
      icon: "📚",
      href: "/services/ressources",
    },
    {
      title: "Événements & networking",
      description: "Conférences, workshops et soirées thématiques pour rencontrer nos partenaires et alumni.",
      icon: "🤝",
      href: "/services/evenements-networking",
    },
    {
      title: "Support & assistance",
      description: "Forum d'entraide, mentorat et coaching carrière pour avancer sereinement.",
      icon: "🛟",
      href: "/services/support",
    },
    {
      title: "Opportunités professionnelles",
      description: "Offres exclusives de stages, alternances et CDI proposées par nos entreprises partenaires.",
      icon: "💼",
      href: "/services/opportunites",
    },
    {
      title: "Certifications & compétences",
      description: "Badges numériques, portfolio et parcours certifiants pour valoriser vos acquis MIAGE.",
      icon: "🎓",
      href: "/services/certifications",
    },
  ];

  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(49,35,54,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <p className="section-heading mb-5">NOS SERVICES</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Un écosystème d'excellence
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Des services premium conçus pour transformer votre potentiel en succès professionnel
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => navigate(service.href)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  navigate(service.href);
                }
              }}
              className="group relative cursor-pointer overflow-hidden bg-white/80 px-1 py-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                background:
                  'radial-gradient(circle at top right, rgba(49,35,54,0.18), transparent 55%)',
              }} />
              <CardHeader className="pb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary shadow-soft">
                  {service.icon}
                </div>
                <CardTitle className="mt-6 text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
