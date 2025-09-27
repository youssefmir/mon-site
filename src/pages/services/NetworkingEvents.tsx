import { useNavigate } from "react-router-dom";

import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    title: "Conférence : L'avenir de l'IA",
    date: "15 février 2024",
    time: "18h00 - 20h00",
    location: "Amphithéâtre A, Université Paris-Dauphine",
    status: "Complet à 78%",
  },
  {
    title: "Workshop React.js",
    date: "20 février 2024",
    time: "14h00 - 17h00",
    location: "Salle informatique B",
    status: "Places restantes : 4",
  },
  {
    title: "Soirée Networking",
    date: "5 mars 2024",
    time: "19h30 - 22h00",
    location: "Café des étudiants",
    status: "Ouvert aux membres",
  },
];

const NetworkingEvents = () => {
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
                Événements & networking
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
                Conférences, workshops techniques et soirées networking pour connecter la communauté MIAGE aux leaders du
                numérique. Des rencontres à forte valeur ajoutée pour développer compétences et réseau.
              </p>
            </div>
            <Badge className="w-fit rounded-full border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              24 événements / an
            </Badge>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card key={event.title} className="bg-white/90">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary">
                    À venir
                  </Badge>
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-3 text-lg font-semibold text-foreground">{event.title}</CardTitle>
                <CardDescription>{event.status}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{event.date}</p>
                <p>{event.time}</p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {event.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-foreground">Rencontres avec nos partenaires</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Un format table ronde pour rencontrer nos entreprises partenaires (BNP Paribas, Capgemini, Doctolib, Octo
              Technology…). L’occasion de comprendre leurs enjeux et d’échanger directement avec leurs équipes RH.
            </CardContent>
          </Card>
          <Card className="bg-white/90">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-foreground">Communauté alumni</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Des afterworks et petits-déjeuners thématiques pour partager les bonnes pratiques, créer des opportunités
              de stage ou identifier des mentors dans la communauté MIAGE.
            </CardContent>
          </Card>
        </section>

        <section className="mt-12 flex flex-col items-center gap-6 rounded-[2.2rem] border border-border/60 bg-white/85 p-8 text-center shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">Réservez votre place</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            Les inscriptions ouvrent 3 semaines avant chaque événement. Activez les alertes email pour être informé en
            priorité.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="px-8" onClick={() => navigate('/login')}>
              Se connecter
            </Button>
            <Button variant="outline" className="px-8" onClick={() => navigate('/register')}>
              Créer un compte
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NetworkingEvents;
