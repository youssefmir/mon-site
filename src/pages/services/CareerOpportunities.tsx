import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building2, Mail, TrendingUp } from "lucide-react";

const jobOffers = [
  {
    title: "Consultant Data Junior",
    company: "Capgemini Invent",
    location: "Paris",
    type: "CDI",
    deadline: "Candidatures jusqu'au 12 mars",
  },
  {
    title: "Product Owner SI",
    company: "BNP Paribas",
    location: "Nanterre",
    type: "Apprentissage",
    deadline: "Début septembre 2024",
  },
  {
    title: "Business Analyst",
    company: "Doctolib",
    location: "Paris",
    type: "Stage",
    deadline: "Prise de poste immédiate",
  },
];

const CareerOpportunities = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-10">
        <section className="text-center md:text-left">
          <p className="section-heading">SERVICES</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Opportunités professionnelles
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Des offres de stages, alternances et CDI sélectionnées auprès de nos entreprises partenaires, avec des
                alertes personnalisées selon votre profil MIAGE.
              </p>
            </div>
            <Badge className="w-fit rounded-full border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              80+ offres actives
            </Badge>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {jobOffers.map((offer) => (
            <Card key={offer.title} className="bg-white/90">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground">{offer.title}</CardTitle>
                <CardDescription>{offer.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{offer.location}</p>
                <p>{offer.type}</p>
                <p>{offer.deadline}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <Building2 className="h-5 w-5 text-primary" />
              <CardTitle className="mt-3 text-lg font-semibold text-foreground">Partenariats entreprises</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Accédez à des offres exclusives de nos partenaires historiques : Capgemini, BNP Paribas, Société Générale,
              Sopra Steria, Doctolib, Octo Technology…
            </CardContent>
          </Card>
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <CardTitle className="mt-3 text-lg font-semibold text-foreground">Alertes personnalisées</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Recevez par email les opportunités correspondant à votre spécialité (data, product, SI, conseil) et votre
              niveau d’expérience.
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 flex flex-col items-center gap-6 rounded-[2.2rem] border border-border/60 bg-white/85 p-8 text-center shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Publier une offre</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Entreprises, contactez-nous pour diffuser vos opportunités aux étudiants et alumni MIAGE. Nous vous
            accompagnons pour trouver le bon profil.
          </p>
          <Button className="px-8" onClick={() => (window.location.href = 'mailto:partenariats@miageforum.fr')}>
            Contacter l'équipe partenariats
          </Button>
        </section>
      </main>
    </div>
  );
};

export default CareerOpportunities;
