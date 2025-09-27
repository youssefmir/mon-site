import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, GraduationCap, MapPin, Mail } from "lucide-react";

const alumniHighlights = [
  {
    name: "Claire Martin",
    promotion: 1965,
    role: "Directrice SI",
    company: "BNP Paribas",
    city: "Paris",
  },
  {
    name: "Sophie Bernard",
    promotion: 1999,
    role: "CTO",
    company: "StartUpX",
    city: "Marseille",
  },
  {
    name: "Mohamed El Amrani",
    promotion: 2010,
    role: "Product Manager",
    company: "Doctolib",
    city: "Paris",
  },
];

const MembersDirectory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-10">
        <section className="text-center md:text-left">
          <p className="section-heading">SERVICES</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Annuaire des membres
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Un accès privilégié à plus de 500 profils MIAGE certifiés, depuis les premières promotions des
                années 60 jusqu’aux talents les plus récents. Un réseau unique pour accélérer votre carrière.
              </p>
            </div>
            <Badge className="w-fit rounded-full border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              500+ membres actifs
            </Badge>
          </div>
        </section>

        <section className="mt-12 grid gap-6 rounded-[2.2rem] border border-border/60 bg-white/85 p-8 shadow-soft">
          <div className="grid gap-4 md:grid-cols-[1fr_200px]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/60" />
              <Input
                placeholder="Rechercher un membre par nom, entreprise ou rôle"
                className="h-12 rounded-xl border-border/70 bg-white/80 pl-11"
              />
            </div>
            <div className="flex gap-3">
              <Input placeholder="Promotion (ex : 2018)" className="h-12 rounded-xl border-border/70 bg-white/80" />
              <Button className="px-6">Filtrer</Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Notre équipe valide chaque profil afin de garantir des connexions de confiance et des échanges de
            qualité entre étudiants, alumni et partenaires.
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {alumniHighlights.map((alumni) => (
            <Card key={alumni.name} className="bg-white/90">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-foreground">{alumni.name}</CardTitle>
                <CardDescription>Promotion {alumni.promotion}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span>{alumni.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>
                    {alumni.company} · {alumni.city}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>contact@miageforum.fr</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-12 grid gap-6 rounded-[2.2rem] border border-border/60 bg-white/85 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Ce que vous débloquez</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white/90">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground">Recherche avancée</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Filtrez par promotion, domaine d’expertise, entreprise ou localisation. Chaque carte de membre
                synthétise le parcours MIAGE et l’actualité professionnelle.
              </CardContent>
            </Card>
            <Card className="bg-white/90">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground">Messagerie sécurisée</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Contactez les alumni via une passerelle sécurisée, sans exposer d’adresses personnelles. Des
                modèles d’introduction sont proposés pour faciliter vos échanges.
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MembersDirectory;
