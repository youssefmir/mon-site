import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Users, BookOpen, Calendar, MessageSquare, Briefcase, GraduationCap, Star, CheckCircle } from "lucide-react";

import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#312336]";

const ServicesPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user?.role === "admin";

  const servicesList = useMemo(
    () => [
      {
        id: 1,
        title: "Annuaire des membres",
        description: "Retrouve instantanément alumni et étudiants MIAGE par promotion, secteur ou localisation pour activer ton réseau.",
        icon: Users,
        features: ["Recherche multi-critères", "Profils vérifiés", "Messagerie sécurisée", "Mentorat"],
        href: "/services/annuaire",
        isPremium: false,
      },
      {
        id: 2,
        title: "Ressources de formation",
        description: "Cours vidéo, fiches synthèse et ateliers live pour monter en compétence sur les technologies clés.",
        icon: BookOpen,
        features: ["Parcours thématiques", "Quiz interactifs", "Supports téléchargeables", "Guides projets"],
        href: "/services/ressources",
        isPremium: false,
      },
      {
        id: 3,
        title: "Événements & networking",
        description: "Workshops, talks et afterworks avec nos partenaires pour développer ton réseau MIAGE.",
        icon: Calendar,
        features: ["24 événements/an", "Workshops techniques", "Rencontres partenaires", "Afterworks alumni"],
        href: "/services/evenements-networking",
        isPremium: false,
      },
      {
        id: 4,
        title: "Support & assistance",
        description: "Forum d’entraide et coaching personnalisé pour avancer sereinement dans ton parcours.",
        icon: MessageSquare,
        features: ["Réponse < 24h", "Mentorat dédié", "Coaching carrière", "Bibliothèque d’outils"],
        href: "/services/support",
        isPremium: false,
      },
      {
        id: 5,
        title: "Opportunités professionnelles",
        description: "Accès privilégié aux offres de stages, alternances et CDI proposées par nos entreprises partenaires.",
        icon: Briefcase,
        features: ["Alertes ciblées", "Offres exclusives", "Suivi candidatures", "Préparation entretiens"],
        href: "/services/opportunites",
        isPremium: true,
      },
      {
        id: 6,
        title: "Certifications & compétences",
        description: "Valorise ton expertise avec des badges MIAGE Forum et un portfolio de réalisations.",
        icon: GraduationCap,
        features: ["Badges numériques", "Portfolio dynamique", "Parcours certifiants", "Validation par les pairs"],
        href: "/services/certifications",
        isPremium: true,
      },
    ],
    [],
  );

  const stats = [
    { icon: Users, value: `${servicesList.length * 100}+`, label: "membres actifs" },
    { icon: BookOpen, value: "50+", label: "ressources disponibles" },
    { icon: Calendar, value: "24", label: "événements / an" },
    { icon: Star, value: "4.8/5", label: "satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f6fb] text-[#1f1a2a]">
      <Header />
      <main className="pb-24 pt-32">
        <section className="relative isolate overflow-hidden px-6 py-20 lg:px-10">
          <div className="absolute inset-0 z-0">
            <img
              src={heroBackground}
              alt="Fond abstrait pour les services MIAGE Forum"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/70 to-white/85 backdrop-blur-[6px]" aria-hidden="true" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-8 text-left">
              <Badge className="w-fit rounded-full border-[#312336]/15 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#312336] shadow-sm">
                Nos services
              </Badge>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.3rem] lg:leading-[1.08]">
                Des services premium pour soutenir chaque étape de ta trajectoire MIAGE
              </h1>
              <p className="text-lg text-[#4f4a59] sm:text-xl">
                Mentorat, ressources, networking et opportunités : un hub unique co-construit par nos étudiants et alumni pour gagner en vitesse et en impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className={`${focusRing} rounded-full border-0 bg-[#312336] px-9 py-3 text-base font-semibold text-white shadow-[0_12px_30px_-12px_rgba(49,35,54,0.6)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#463454]`}
                  onClick={() => navigate('/register')}
                >
                  Rejoindre MIAGE Forum
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className={`${focusRing} rounded-full border-[#312336]/20 bg-white/80 px-9 py-3 text-base font-semibold text-[#312336] shadow-[0_10px_25px_-20px_rgba(49,35,54,0.6)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/95`}
                  onClick={() => navigate('/contact')}
                >
                  Parler à l’équipe
                </Button>
              </div>
            </div>

            <div className="grid w-full max-w-xl gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/70 bg-white/85 px-6 py-6 shadow-[0_24px_45px_-32px_rgba(49,35,54,0.45)] backdrop-blur transition duration-200 hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#312336]/10 text-[#312336]">
                    <stat.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-3xl font-semibold text-[#312336]">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#6f697a]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {isAdmin && (
            <div className="relative z-10 mx-auto mt-10 flex w-full max-w-6xl items-center justify-start">
              <Badge className="rounded-full border-[#f0b322]/30 bg-[#f0b322]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#735410]">
                Mode admin actif
              </Badge>
            </div>
          )}
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-6 lg:px-10">
          <header className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#1f1a2a] sm:text-4xl">Un catalogue pensé avec nos alumni</h2>
            <p className="mt-4 text-lg text-[#4f4a59]">
              Du premier stage à l’expatriation, chaque service est conçu pour t’offrir les bons leviers au bon moment.
            </p>
          </header>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="relative flex h-full flex-col justify-between rounded-3xl border border-[#312336]/10 bg-white/90 p-8 shadow-[0_25px_50px_-28px_rgba(49,35,54,0.35)] transition duration-200 hover:-translate-y-1"
              >
                {service.isPremium ? (
                  <Badge className="absolute right-6 top-6 rounded-full border-none bg-gradient-to-r from-[#f0b322] to-[#f7c85e] px-4 py-1 text-xs font-semibold text-[#302021] shadow-sm">
                    Premium
                  </Badge>
                ) : null}

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        service.isPremium ? 'bg-gradient-to-r from-[#f0b322] to-[#f7c85e] text-[#312336]' : 'bg-[#312336]/10 text-[#312336]'
                      }`}
                    >
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1f1a2a]">{service.title}</h3>
                      <p className="mt-2 text-sm text-[#4f4a59]">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-[#4f4a59]">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-[#312336]" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-3">
                  <Button
                    className={`${focusRing} w-full rounded-full border-0 bg-[#312336] py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#463454]`}
                    onClick={() => {
                      if (service.isPremium && !user) {
                        navigate('/login');
                        return;
                      }
                      navigate(service.href);
                    }}
                  >
                    {service.isPremium ? 'Découvrir Premium' : 'Accéder au service'}
                  </Button>
                  {isAdmin && (
                    <div className="rounded-2xl border border-[#312336]/10 bg-[#f7f6fb] px-4 py-3 text-xs text-[#4f4a59]">
                      Gestion avancée disponible prochainement dans le tableau de bord administrateur.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-[#312336]/15 bg-gradient-to-r from-[#f0b322] via-[#f6c758] to-[#f0b322] p-[1px] shadow-[0_25px_60px_-28px_rgba(240,179,34,0.5)]">
            <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 py-12 text-center sm:text-left">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-2xl space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#97720f]">Passe à l’étape supérieure</p>
                  <h2 className="text-3xl font-semibold text-[#1f1a2a] sm:text-4xl">
                    Rejoins le réseau MIAGE Forum et accède à l’ensemble de nos services premium
                  </h2>
                  <p className="text-base text-[#4f4a59]">
                    Un onboarding personnalisé, un mentor dédié et des opportunités exclusives pour accélérer ta trajectoire.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:items-end">
                  <Button
                    size="lg"
                    className={`${focusRing} rounded-full border-0 bg-[#312336] px-10 py-3 text-base font-semibold text-white shadow-[0_12px_30px_-12px_rgba(49,35,54,0.6)] transition hover:-translate-y-0.5 hover:bg-[#463454]`}
                    onClick={() => navigate('/register')}
                  >
                    S’inscrire maintenant
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`${focusRing} rounded-full border-[#312336]/20 bg-white/80 px-10 py-3 text-base font-semibold text-[#312336] shadow-[0_10px_25px_-20px_rgba(49,35,54,0.6)] transition hover:-translate-y-0.5 hover:bg-white/95`}
                    onClick={() => navigate('/alumni')}
                  >
                    Explorer MIAGE Forum Alumni
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
