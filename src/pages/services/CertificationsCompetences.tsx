import { useNavigate } from "react-router-dom";

import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Medal, Star } from "lucide-react";

const tracks = [
  {
    name: "Architecture & SI",
    completion: 70,
    description: "Conception d'architecture, urbanisation, intégration de services.",
  },
  {
    name: "Data & IA",
    completion: 55,
    description: "Modélisation de données, gouvernance, machine learning et analytics.",
  },
  {
    name: "Product & UX",
    completion: 40,
    description: "Discovery produit, design d'expérience et pilotage agile.",
  },
];

const CertificationsCompetences = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-10">
        <section className="text-center md:text-left">
          <p className="section-heading">SERVICES</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Certifications & compétences
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Validez vos acquis grâce aux badges numériques MIAGE Forum, construits avec les entreprises partenaires
                et reconnus au sein du réseau.
              </p>
            </div>
            <Badge className="w-fit rounded-full border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              12 parcours certifiants
            </Badge>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <Star className="h-5 w-5 text-primary" />
              <CardTitle className="mt-3 text-lg font-semibold text-foreground">Badges numériques</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Obtenez un badge certifié MIAGE Forum à ajouter sur LinkedIn après avoir complété un parcours et validé
              les quiz correspondants.
            </CardContent>
          </Card>
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <Medal className="h-5 w-5 text-primary" />
              <CardTitle className="mt-3 text-lg font-semibold text-foreground">Portfolio de compétences</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Un tableau de bord synthétise vos activités (formations, projets, mentorship) et met en valeur vos
              compétences clés.
            </CardContent>
          </Card>
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <CardTitle className="mt-3 text-lg font-semibold text-foreground">Validation par les pairs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Vos mentors et alumni validateurs attestent de vos réalisations, renforçant la crédibilité de votre profil.
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <Card key={track.name} className="bg-white/90">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground">{track.name}</CardTitle>
                <CardDescription>{track.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Progress value={track.completion} className="h-2" />
                <p className="text-sm text-muted-foreground">Progression : {track.completion}%</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-12 flex flex-col items-center gap-6 rounded-[2.2rem] border border-border/60 bg-white/85 p-8 text-center shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Prêt à valider vos compétences ?</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Commencez un parcours certifiant, participez aux ateliers et suivez vos progrès dans votre tableau de bord
            MIAGE Forum.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="px-8" onClick={() => navigate('/register')}>
              Démarrer un parcours
            </Button>
            <Button variant="outline" className="px-8" onClick={() => navigate('/login')}>
              Se connecter
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CertificationsCompetences;
