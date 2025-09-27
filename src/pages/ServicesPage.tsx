import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Users, BookOpen, Calendar, MessageSquare, Briefcase, GraduationCap, Star, CheckCircle } from "lucide-react";

import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user?.role === "admin";
  const servicesList = useMemo(
    () => [
      {
        id: 1,
        title: "Annuaire des membres",
        description: "Trouvez rapidement les alumni MIAGE par promotion, secteur ou localisation et engagez la discussion.",
        icon: Users,
        features: ["Recherche multi-critères", "Profils détaillés", "Messagerie sécurisée", "Mentorat"],
        href: "/services/annuaire",
        isPremium: false,
      },
      {
        id: 2,
        title: "Ressources de formation",
        description: "Cours vidéo, fiches synthèse et ateliers live pour progresser sur les sujets clés du numérique.",
        icon: BookOpen,
        features: ["Parcours thématiques", "Quiz de validation", "Fiches téléchargeables", "Guides de projet"],
        href: "/services/ressources",
        isPremium: false,
      },
      {
        id: 3,
        title: "Événements & networking",
        description: "Conférences, workshops et rencontres partenaires pour élargir votre réseau MIAGE.",
        icon: Calendar,
        features: ["24 événements/an", "Workshops techniques", "Rencontres partenaires", "Afterworks alumni"],
        href: "/services/evenements-networking",
        isPremium: false,
      },
      {
        id: 4,
        title: "Support & assistance",
        description: "Forum d'entraide, mentorat et coaching carrière pour avancer sereinement.",
        icon: MessageSquare,
        features: ["Réponse en 24h", "Mentorat personnalisé", "Coaching carrière", "Bibliothèque d'outils"],
        href: "/services/support",
        isPremium: false,
      },
      {
        id: 5,
        title: "Opportunités professionnelles",
        description: "Offres exclusives de stages, alternances et CDI chez nos entreprises partenaires.",
        icon: Briefcase,
        features: ["Alertes ciblées", "Offres exclusives", "Suivi des candidatures", "Préparation aux entretiens"],
        href: "/services/opportunites",
        isPremium: true,
      },
      {
        id: 6,
        title: "Certifications & compétences",
        description: "Badges MIAGE Forum et portfolio de compétences pour valoriser votre expertise.",
        icon: GraduationCap,
        features: ["Badges numériques", "Portfolio dynamique", "Parcours certifiants", "Validation par les pairs"],
        href: "/services/certifications",
        isPremium: true,
      },
    ],
    [],
  );

  const stats = [
    { icon: Users, value: `${servicesList.length * 100}+`, label: "Membres actifs" },
    { icon: BookOpen, value: "50+", label: "Ressources de formation" },
    { icon: Calendar, value: "24", label: "Événements par an" },
    { icon: Star, value: "4.8/5", label: "Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pb-24 pt-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center">
            <p className="section-heading">NOS SERVICES</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">Nos Services</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Découvrez tous les services que MIAGE Forum met à votre disposition pour accompagner votre parcours professionnel dans l'informatique et le numérique.
            </p>

            {isAdmin && (
              <div className="mt-8 flex items-center justify-center">
                <Badge className="rounded-full border-red-200/60 bg-red-100/70 px-4 py-1 text-xs font-semibold tracking-wide text-red-700">
                  Mode Admin actif
                </Badge>
              </div>
            )}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="relative overflow-hidden bg-white/80 px-1 py-1">
                <div
                  className="absolute inset-0 -z-10 opacity-60"
                  style={{
                    background:
                      index % 2 === 0
                        ? "radial-gradient(circle at top, rgba(49,35,54,0.18), transparent 60%)"
                        : "radial-gradient(circle at bottom right, rgba(112,80,124,0.18), transparent 65%)",
                  }}
                />
                <CardHeader className="pb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-6 text-3xl font-semibold text-foreground">{stat.value}</CardTitle>
                  <CardDescription className="text-sm uppercase tracking-[0.28em] text-muted-foreground/80">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service) => (
              <Card key={service.id} className="relative overflow-hidden bg-white/85 px-1 py-1">
                {service.isPremium && (
                  <Badge className="absolute right-5 top-5 rounded-full border-none bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-soft">
                    Premium
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        service.isPremium ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-soft" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                      <CardDescription className="mt-2 text-sm text-muted-foreground">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <Button
                      className="w-full"
                      onClick={() => {
                        if (service.isPremium && !user) {
                          navigate('/login');
                          return;
                        }
                        navigate(service.href);
                      }}
                    >
                      {service.isPremium ? "Découvrir Premium" : "Accéder au service"}
                    </Button>
                    {isAdmin && (
                      <div className="rounded-xl border border-border/60 bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
                        Gestion avancée bientôt disponible dans le tableau de bord administrateur.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-20 overflow-hidden border-none bg-[#050b1a] text-white shadow-elevated">
            <CardContent className="space-y-6 py-12 text-center">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-semibold sm:text-4xl">Prêt à rejoindre MIAGE Forum ?</h2>
                <p className="mt-4 text-base text-white/70">
                  Rejoignez notre communauté d'étudiants et professionnels passionnés par l'informatique. Accédez à tous nos services et développez votre réseau professionnel.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="px-10" onClick={() => navigate('/register')}>
                  S'inscrire maintenant
                </Button>
                <Button variant="outline" size="lg" className="border-white/40 px-10 text-white hover:bg-white/10">
                  En savoir plus
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
