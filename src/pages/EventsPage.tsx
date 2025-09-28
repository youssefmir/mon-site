import { useState } from "react";
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";

import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "conférence" | "workshop" | "réunion" | "social";
  maxParticipants?: number;
  currentParticipants?: number;
  isUpcoming?: boolean;
  isNew?: boolean;
  speaker?: string;
  price?: "gratuit" | "payant";
}

const initialEvents: EventItem[] = [
  {
    id: "1",
    title: "Conférence : L'avenir de l'IA",
    description: "Découvrez les dernières tendances en intelligence artificielle et leurs applications dans le monde professionnel.",
    date: "15 février 2024",
    time: "18h00 - 20h00",
    location: "Amphithéâtre A, Université",
    type: "conférence",
    maxParticipants: 200,
    currentParticipants: 156,
    isUpcoming: true,
    isNew: true,
    speaker: "Dr. Martin Dubois, Expert IA",
    price: "gratuit",
  },
  {
    id: "2",
    title: "Workshop React.js",
    description: "Apprenez React.js en pratique avec des projets concrets. Niveau débutant à intermédiaire.",
    date: "20 février 2024",
    time: "14h00 - 17h00",
    location: "Salle informatique B",
    type: "workshop",
    maxParticipants: 30,
    currentParticipants: 28,
    isUpcoming: true,
    speaker: "Sophie Martin, Lead Developer",
    price: "gratuit",
  },
  {
    id: "3",
    title: "Assemblée Générale MIAGE Forum",
    description: "Réunion annuelle pour faire le bilan de l'année et élire le nouveau bureau.",
    date: "25 février 2024",
    time: "19h00 - 21h00",
    location: "Salle de réunion principale",
    type: "réunion",
    isUpcoming: true,
    price: "gratuit",
  },
  {
    id: "4",
    title: "Soirée Networking",
    description: "Rencontrez des professionnels du secteur et développez votre réseau.",
    date: "5 mars 2024",
    time: "19h30 - 22h00",
    location: "Café des étudiants",
    type: "social",
    maxParticipants: 50,
    currentParticipants: 23,
    isUpcoming: true,
    price: "payant",
  },
];

const EventsPage = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const [events] = useState(initialEvents);

  const upcomingEvents = events.filter((event) => event.isUpcoming);
  const pastEvents = events.filter((event) => !event.isUpcoming);

  const typeLabel = (type: EventItem["type"]) => {
    switch (type) {
      case "conférence":
        return "Conférence";
      case "workshop":
        return "Workshop";
      case "réunion":
        return "Réunion";
      case "social":
        return "Social";
      default:
        return type;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pb-24 pt-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative mb-12 text-center">
            <p className="section-heading">ÉVÉNEMENTS</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Les rendez-vous MIAGE Forum
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Conférences, workshops et rencontres pour développer vos compétences techniques et votre réseau professionnel.
            </p>

            {isAdmin && (
              <div className="mt-8 flex items-center justify-center">
                <Badge className="rounded-full border-amber-200/60 bg-amber-100/70 px-4 py-1 text-xs font-semibold tracking-wide text-amber-700">
                  Mode Admin actif
                </Badge>
              </div>
            )}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Événements à venir</p>
                    <p className="text-2xl font-semibold text-foreground">{upcomingEvents.length}</p>
                  </div>
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Participants inscrits</p>
                    <p className="text-2xl font-semibold text-foreground">
                      {events.reduce((acc, event) => acc + (event.currentParticipants ?? 0), 0)}
                    </p>
                  </div>
                  <Users className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Satisfaction moyenne</p>
                    <p className="text-2xl font-semibold text-foreground">4.8 / 5</p>
                  </div>
                  <Star className="h-10 w-10 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-semibold text-foreground">À venir</h2>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="relative overflow-hidden bg-white/85 px-1 py-1">
                    {event.isNew && (
                      <Badge className="absolute right-5 top-5 rounded-full border-none bg-gradient-to-r from-[#5a4167] to-[#312336] px-3 py-1 text-xs font-semibold text-white">
                        Nouveau
                      </Badge>
                    )}
                    <CardHeader className="pb-4">
                      <Badge variant="outline" className="w-fit rounded-full border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                        {typeLabel(event.type)}
                      </Badge>
                      <CardTitle className="mt-4 text-xl font-semibold text-foreground">{event.title}</CardTitle>
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
                      {event.speaker && (
                        <div className="flex items-start gap-2">
                          <Users className="mt-0.5 h-4 w-4 text-primary" />
                          <span>{event.speaker}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="rounded-full border-border/70 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                          {event.price === "gratuit" ? "Gratuit" : "Payant"}
                        </Badge>
                        {event.maxParticipants && (
                          <span>
                            {event.currentParticipants ?? 0} / {event.maxParticipants} inscrits
                          </span>
                        )}
                      </div>
                      {isAdmin && (
                        <div className="rounded-xl border border-border/60 bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
                          Gestion des événements (création / édition) sera bientôt disponible.
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {pastEvents.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-foreground">Événements passés</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {pastEvents.map((event) => (
                    <Card key={event.id} className="bg-white/70">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-foreground">{event.title}</CardTitle>
                        <CardDescription className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" /> {event.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
