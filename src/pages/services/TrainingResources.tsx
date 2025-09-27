import { useNavigate } from "react-router-dom";

import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, PlayCircle, Workflow } from "lucide-react";

const modules = [
  {
    title: "Architecture SI",
    description: "Comprendre les patterns modernes de conception et les microservices.",
  },
  {
    title: "Data & Analytics",
    description: "Manipulation de datasets, visualisation et gouvernance de la donnée.",
  },
  {
    title: "Product Management",
    description: "Piloter la roadmap, cadrer les besoins et animer les équipes transverse.",
  },
];

const TrainingResources = () => {
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
                Ressources de formation
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Des parcours MIAGE conçus par des experts : contenus vidéo, fiches synthèse et ateliers pratico-pratiques
                pour rester à jour sur les technologies et rôles clés du numérique.
              </p>
            </div>
            <Badge className="w-fit rounded-full border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              120+ ressources exclusives
            </Badge>
          </div>
        </section>

        <section className="mt-12">
          <Tabs defaultValue="videos" className="rounded-[2.2rem] border border-border/60 bg-white/85 p-8 shadow-soft">
            <TabsList className="grid grid-cols-3 gap-3 rounded-xl bg-muted/40 p-2">
              <TabsTrigger value="videos">Vidéos</TabsTrigger>
              <TabsTrigger value="cours">Cours PDF</TabsTrigger>
              <TabsTrigger value="ateliers">Ateliers live</TabsTrigger>
            </TabsList>
            <TabsContent value="videos" className="mt-6 space-y-4 text-sm text-muted-foreground">
              <p>
                Accédez à plus de 40 masterclasses tournées avec des alumni en poste chez Capgemini, Doctolib ou encore
                Octo Technology. Chaque vidéo est accompagnée d’un quiz de validation.
              </p>
            </TabsContent>
            <TabsContent value="cours" className="mt-6 space-y-4 text-sm text-muted-foreground">
              <p>
                Téléchargez des supports richement illustrés pour consolider vos connaissances et préparer vos examens
                MIAGE : architecture SI, droit du numérique, data science, gestion de projet.
              </p>
            </TabsContent>
            <TabsContent value="ateliers" className="mt-6 space-y-4 text-sm text-muted-foreground">
              <p>
                Des sessions live chaque mois animées par des alumni : coding dojo, design sprint, simulations
                d’entretiens et études de cas clients.
              </p>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.title} className="bg-white/90">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground">{module.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{module.description}</CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="bg-white/90">
            <CardHeader className="flex items-start gap-3">
              <PlayCircle className="h-5 w-5 text-primary" />
              <div>
                <CardTitle className="text-lg font-semibold text-foreground">Vidéo & Quiz</CardTitle>
                <CardDescription>Mémorisation active</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Chaque capsule se termine par un quiz adaptatif pour valider les acquis et obtenir un badge MIAGE Forum.
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <CardTitle className="text-lg font-semibold text-foreground">Fiches synthèse</CardTitle>
                <CardDescription>Supports révisables</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              PDF téléchargeables, plans de cours, listes bibliographiques et cas d’étude prêts à l’emploi.
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader className="flex items-start gap-3">
              <Workflow className="h-5 w-5 text-primary" />
              <div>
                <CardTitle className="text-lg font-semibold text-foreground">Guides de parcours</CardTitle>
                <CardDescription>Objectifs personnalisés</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Des itinéraires recommandés selon votre objectif : consulting SI, data, product management, cybersécurité.
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 flex flex-col items-center gap-6 rounded-[2.2rem] border border-border/60 bg-white/85 p-8 text-center shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Commencez dès maintenant</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Créez votre compte MIAGE Forum pour accéder aux ressources, ou connectez-vous pour poursuivre votre parcours
            de formation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="px-8" onClick={() => navigate('/register')}>
              Rejoindre MIAGE Forum
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

export default TrainingResources;
