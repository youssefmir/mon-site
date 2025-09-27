import { useNavigate } from "react-router-dom";

import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Headset, MessageSquare, Users } from "lucide-react";

const supportChannels = [
  {
    title: "Forum d'entraide",
    description: "Posez vos questions techniques ou académiques et recevez les réponses de la communauté et du staff MIAGE Forum.",
    icon: MessageSquare,
  },
  {
    title: "Mentorat",
    description: "Bénéficiez d’un suivi personnalisé par un alumni référent pour vos projets et choix d’orientation.",
    icon: Users,
  },
  {
    title: "Support carrière",
    description: "Relecture de CV, simulations d'entretiens, conseils rémunération et positionnement consultant.",
    icon: Headset,
  },
];

const SupportAssistance = () => {
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
                Support & assistance
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Une équipe MIAGE Forum disponible pour accompagner vos projets, renforcer vos candidatures et répondre
                rapidement à vos questions académiques ou professionnelles.
              </p>
            </div>
            <Badge className="w-fit rounded-full border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Réponse moyenne : 24h
            </Badge>
          </div>
        </section>

        <section className="mt-12 rounded-[2.2rem] border border-border/60 bg-white/85 p-8 shadow-soft">
          <Tabs defaultValue="forum" className="w-full">
            <TabsList className="grid grid-cols-3 gap-3 rounded-xl bg-muted/40 p-2">
              <TabsTrigger value="forum">Forum</TabsTrigger>
              <TabsTrigger value="mentorat">Mentorat</TabsTrigger>
              <TabsTrigger value="carriere">Carrière</TabsTrigger>
            </TabsList>
            <TabsContent value="forum" className="mt-6 text-sm text-muted-foreground">
              Une plateforme dédiée aux étudiants MIAGE pour poser vos questions 24/7. Les alumni modèrent et proposent
              des ressources complémentaires (articles, vidéos, modèles de livrables).
            </TabsContent>
            <TabsContent value="mentorat" className="mt-6 text-sm text-muted-foreground">
              Associez-vous à un mentor selon votre spécialité (data, product, conseil SI…). Des points mensuels pour
              suivre votre progression et vous ouvrir des opportunités.
            </TabsContent>
            <TabsContent value="carriere" className="mt-6 text-sm text-muted-foreground">
              Ateliers CV, simulations d'entretien, coaching salaire et stratégie de recherche : nous vous guidons étape
              par étape jusqu’à la signature.
            </TabsContent>
          </Tabs>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {supportChannels.map((channel) => (
            <Card key={channel.title} className="bg-white/90">
              <CardHeader className="pb-3">
                <channel.icon className="h-5 w-5 text-primary" />
                <CardTitle className="mt-3 text-lg font-semibold text-foreground">{channel.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{channel.description}</CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-12 flex flex-col items-center gap-6 rounded-[2.2rem] border border-border/60 bg-white/85 p-8 text-center shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Besoin d'aide immédiate ?</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Notre équipe support est joignable du lundi au vendredi de 9h à 19h. Choisissez le canal le plus adapté à
            votre demande et obtenez une réponse en moins de 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="px-8" onClick={() => (window.location.href = 'mailto:contact@miageforum.fr')}>
              Contacter le support
            </Button>
            <Button variant="outline" className="px-8" onClick={() => navigate('/login')}>
              Accéder au forum
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SupportAssistance;
