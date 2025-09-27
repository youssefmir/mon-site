import { useMemo, useState } from "react";
import { Filter, GraduationCap, Mail, MapPin, Search } from "lucide-react";

import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const alumni = [
  { id: 1, name: "Claire Martin", promotion: 1965, role: "Directrice SI", company: "BNP Paribas", location: "Paris" },
  { id: 2, name: "Jean Dupont", promotion: 1978, role: "Consultant Data", company: "Capgemini", location: "Lyon" },
  { id: 3, name: "Sophie Bernard", promotion: 1999, role: "CTO", company: "StartUpX", location: "Marseille" },
  { id: 4, name: "Mohamed El Amrani", promotion: 2010, role: "Product Manager", company: "Doctolib", location: "Paris" },
  { id: 5, name: "Laura Chen", promotion: 2022, role: "Data Analyst", company: "Dassault Systèmes", location: "Nantes" },
];

const Annuaire = () => {
  const { users } = useAuth();
  const [search, setSearch] = useState("");
  const [promotion, setPromotion] = useState<string | undefined>();

  const filteredAlumni = useMemo(() => {
    return alumni.filter((item) => {
      const matchesSearch = [item.name, item.company, item.role].some((field) =>
        field.toLowerCase().includes(search.toLowerCase()),
      );
      const matchesPromo = promotion ? item.promotion.toString() === promotion : true;
      return matchesSearch && matchesPromo;
    });
  }, [promotion, search]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pb-24 pt-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center">
            <p className="section-heading">ANNUAIRE</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Le réseau des alumni MIAGE
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Depuis 1960, des générations d'alumni construisent le rayonnement MIAGE. Accédez à un réseau unique de leaders du numérique.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="bg-white/85">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Rechercher un membre</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                  <Input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Nom, entreprise, rôle..."
                    className="h-11 rounded-xl border-border/70 bg-white/80 pl-10"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                  <Input
                    value={promotion ?? ""}
                    onChange={(event) => setPromotion(event.target.value || undefined)}
                    placeholder="Promotion (ex : 1999)"
                    className="h-11 rounded-xl border-border/70 bg-white/80 pl-10"
                  />
                </div>
                <div className="rounded-2xl border border-border/60 bg-muted/40 p-4 text-sm text-muted-foreground">
                  {users.length} membres validés dans la communauté MIAGE Forum.
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {filteredAlumni.map((member) => (
                <Card key={member.id} className="bg-white/85">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold text-foreground">{member.name}</CardTitle>
                      <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                        Promo {member.promotion}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span>{member.role}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>
                        {member.company} · {member.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:contact@miageforum.fr" className="text-primary transition-colors hover:text-primary/80">
                        contact@miageforum.fr
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annuaire;
