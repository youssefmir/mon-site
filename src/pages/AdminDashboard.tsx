import { useMemo } from "react";

import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import { Calendar, CheckCircle2, ShieldCheck, Users } from "lucide-react";

const upcomingHighlights = [
  {
    title: "Conférence : L'avenir de l'IA",
    date: "15 février 2024",
    status: "Complet à 78%",
  },
  {
    title: "Workshop React.js",
    date: "20 février 2024",
    status: "Places restantes : 4",
  },
  {
    title: "Assemblée Générale",
    date: "25 février 2024",
    status: "Ouverte aux membres",
  },
];

const AdminDashboard = () => {
  const { user, users, approveUser, rejectUser } = useAuth();

  const { pendingUsers, validatedUsers, adminCount } = useMemo(() => {
    const pending = users.filter((candidate) => candidate.status === "pending");
    const validated = users.filter((candidate) => candidate.status === "validated");
    const admins = validated.filter((candidate) => candidate.role === "admin");
    return { pendingUsers: pending, validatedUsers: validated, adminCount: admins.length };
  }, [users]);

  const stats = useMemo(
    () => [
      {
        label: "Membres validés",
        value: validatedUsers.length,
        description: "Profils actifs dans le réseau",
        icon: Users,
      },
      {
        label: "En attente",
        value: pendingUsers.length,
        description: "Demandes d'adhésion à traiter",
        icon: ShieldCheck,
      },
      {
        label: "Administrateurs",
        value: adminCount,
        description: "Gestionnaires de la communauté",
        icon: CheckCircle2,
      },
      {
        label: "Événements à venir",
        value: upcomingHighlights.length,
        description: "Rendez-vous programmés ce mois-ci",
        icon: Calendar,
      },
    ],
    [validatedUsers.length, pendingUsers.length, adminCount],
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-10">
        <section className="text-center md:text-left">
          <p className="section-heading">ADMINISTRATION</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Tableau de bord MIAGE Forum
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                Pilotage global de la communauté : suivez les adhésions, validez les nouveaux membres et
                anticipez les prochains événements clés.
              </p>
            </div>
            {user && (
              <Badge className="w-fit rounded-full border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                Connecté en tant que {user.name}
              </Badge>
            )}
          </div>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-white/85">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-muted-foreground">{stat.label}</CardTitle>
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-white/90">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-foreground">Demandes d'adhésion</CardTitle>
              <CardDescription>Validez ou refusez les nouveaux profils en attente de confirmation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingUsers.length === 0 ? (
                <div className="rounded-2xl border border-border/60 bg-muted/40 p-6 text-center text-sm text-muted-foreground">
                  Aucune demande en attente pour le moment.
                </div>
              ) : (
                pendingUsers.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="rounded-2xl border border-border/60 bg-white/80 p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-medium"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-base font-semibold text-foreground">{candidate.name}</p>
                        <p className="text-sm text-muted-foreground">{candidate.email}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => approveUser(candidate.id)}>
                          Approuver
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-destructive/40 text-destructive hover:bg-destructive/10"
                          onClick={() => rejectUser(candidate.id)}
                        >
                          Refuser
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          <Card className="bg-white/90">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-foreground">Activité à venir</CardTitle>
              <CardDescription>Surveillez les rendez-vous clés du mois pour accompagner les équipes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-white/80 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/70">
                        {item.date}
                      </p>
                      <p className="mt-2 font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="mt-12">
          <Card className="bg-white/90">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold text-foreground">Communauté MIAGE Forum</CardTitle>
              <CardDescription>
                Historique des adhésions depuis les premières promotions et répartition actuelle des profils.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-border/60 bg-white/80 p-4">
                  <p className="text-sm font-medium text-muted-foreground">Alumni validés</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">{validatedUsers.length}</p>
                  <p className="text-xs text-muted-foreground">Dont {adminCount} administrateurs actifs</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-white/80 p-4">
                  <p className="text-sm font-medium text-muted-foreground">Comptes en attente</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">{pendingUsers.length}</p>
                  <p className="text-xs text-muted-foreground">A valider pour donner accès à l'annuaire</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-white/80 p-4">
                  <p className="text-sm font-medium text-muted-foreground">Contact rapide</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">support@miageforum.fr</p>
                  <p className="text-xs text-muted-foreground">Equipe MIAGE Forum</p>
                </div>
              </div>

              <Separator className="bg-border" />

              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Derniers membres validés</p>
                {validatedUsers.slice(-3).map((member) => (
                  <div key={member.id} className="flex items-center justify-between rounded-xl border border-border/60 bg-white/80 px-4 py-2">
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p>{member.email}</p>
                    </div>
                    <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {member.role === "admin" ? "Admin" : "Membre"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
