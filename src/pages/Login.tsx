import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lock, Mail, Loader2, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { login, isLoading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    const state = location.state as { message?: string } | null;
    if (state?.message) {
      setSuccessMessage(state.message);
    }
  }, [user, navigate, location]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!email || !password) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    const success = await login(email, password);
    if (!success) {
      setError("Email ou mot de passe incorrect");
    } else {
      navigate("/");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(49,35,54,0.16),transparent_60%),radial-gradient(circle_at_bottom,rgba(112,80,124,0.14),transparent_65%)]" />
      <Header />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-16 pt-28">
        <Card className="w-full max-w-md border border-white/60 bg-white/85 shadow-elevated">
          <CardHeader className="text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Lock className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-2xl font-semibold">Connexion</CardTitle>
            <CardDescription>Accédez à l'annuaire et aux ressources de formation MIAGE Forum</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {successMessage && (
                <Alert className="border border-primary/30 bg-primary/5">
                  <AlertDescription className="text-primary">{successMessage}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-12 rounded-xl border-border/70 bg-white/80 pl-10"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Votre mot de passe"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="h-12 rounded-xl border-border/70 bg-white/80 pl-10"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connexion...
                  </>
                ) : (
                  "Se connecter"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="mb-4 text-sm text-muted-foreground">Vous n'avez pas encore de compte ?</p>
              <Button variant="outline" onClick={handleRegister} className="w-full" disabled={isLoading}>
                <UserPlus className="mr-2 h-4 w-4" />
                Créer un compte
              </Button>
            </div>

            <div className="mt-6 rounded-2xl border border-border/60 bg-muted/40 p-4">
              <h4 className="mb-3 text-sm font-semibold text-foreground/80">Comptes de démonstration :</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>
                  <strong>Admin :</strong> admin@miageforum.fr / admin123
                </div>
                <div>
                  <strong>Étudiant :</strong> etudiant@miageforum.fr / etudiant123
                </div>
                <div>
                  <strong>Démo :</strong> demo@miageforum.fr / demo123
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
