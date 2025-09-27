import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Conférence : L'avenir de l'IA",
    description: "Découvrez les dernières tendances en intelligence artificielle et leurs applications concrètes en entreprise.",
    date: "15 février 2024",
    time: "18h00 - 20h00",
    location: "Amphithéâtre A, Université Paris-Dauphine",
    type: "conférence",
    highlight: "Nouveau",
  },
  {
    id: 2,
    title: "Workshop React.js",
    description: "Un atelier immersif pour monter en compétence sur React et concevoir une interface moderne de A à Z.",
    date: "20 février 2024",
    time: "14h00 - 17h00",
    location: "Salle informatique B",
    type: "workshop",
    highlight: "Complet à 90%",
  },
  {
    id: 3,
    title: "Assemblée Générale",
    description: "Bilan annuel, orientations stratégiques et élection du nouveau bureau Miage Forum.",
    date: "25 février 2024",
    time: "19h00 - 21h00",
    location: "Salle de conférence principale",
    type: "réunion",
  },
];

const Evenements = () => {
  const navigate = useNavigate();

  return (
    <section id="events" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(49,35,54,0.12),transparent_65%),radial-gradient(circle_at_bottom_right,rgba(112,80,124,0.1),transparent_65%)]" />
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <p className="section-heading mb-5">ÉVÉNEMENTS</p>
          <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Nos prochains rendez-vous
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Une programmation conçue pour connecter les étudiants MIAGE aux experts du numérique et accélérer leur carrière.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" className="px-8" onClick={() => navigate('/evenements')}>
              Voir tous les événements
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="relative overflow-hidden bg-white/85 px-1 py-1">
              {event.highlight && (
                <Badge className="absolute right-5 top-5 rounded-full border-none bg-gradient-to-r from-[#5a4167] to-[#312336] px-3 py-1 text-xs font-semibold text-white shadow-soft">
                  {event.highlight}
                </Badge>
              )}

              <CardHeader className="pb-4">
                <Badge variant="outline" className="w-fit rounded-full border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  {event.type}
                </Badge>
                <CardTitle className="mt-4 text-xl font-semibold text-foreground">
                  {event.title}
                </CardTitle>
                <CardDescription className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Evenements;
