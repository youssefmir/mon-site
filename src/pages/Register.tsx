import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap, Lock, Mail, Phone, User, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";

const Register = () => {
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    promotion: "",
    speciality: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    if (formData.password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }

    if (!formData.email || !formData.firstName || !formData.lastName) {
      setError("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const success = await register({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
    });

    if (!success) {
      setError("Un compte existe déjà avec cet email");
      return;
    }

    navigate("/login", {
      state: {
        message:
          "Inscription réussie ! Votre compte est en cours de validation. Vous recevrez un email dès qu'il sera validé.",
      },
    });
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(49,35,54,0.14),transparent_60%),radial-gradient(circle_at_bottom,rgba(112,80,124,0.12),transparent_65%)]" />
      <Header />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-16 pt-28">
        <Card className="w-full max-w-2xl border border-white/60 bg-white/85 shadow-elevated">
          <CardHeader className="text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <User className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-2xl font-semibold">Rejoindre MIAGE Forum</CardTitle>
            <CardDescription>Créez votre compte pour accéder à l'annuaire et aux ressources</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Votre prénom"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="h-12 rounded-xl border-border/70 bg-white/80 pl-10"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Votre nom"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="h-12 rounded-xl border-border/70 bg-white/80 pl-10"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl border-border/70 bg-white/80 pl-10"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl border-border/70 bg-white/80 pl-10"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="promotion">Promotion</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                    <Input
                      id="promotion"
                      name="promotion"
                      placeholder="Ex : MIAGE 2024"
                      value={formData.promotion}
                      onChange={handleInputChange}
                      className="h-12 rounded-xl border-border/70 bg-white/80 pl-10"
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="speciality">Spécialité</Label>
                  <Input
                    id="speciality"
                    name="speciality"
                    placeholder="Ex : Développement Web"
                    value={formData.speciality}
                    onChange={handleInputChange}
                    className="h-12 rounded-xl border-border/70 bg-white/80"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Minimum 6 caractères"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="h-12 rounded-xl border-border/70 bg-white/80 pl-10"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground/60" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Répétez votre mot de passe"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="h-12 rounded-xl border-border/70 bg-white/80 pl-10"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={handleBackToLogin} className="flex items-center gap-2" disabled={isLoading}>
                  <ArrowLeft className="h-4 w-4" />
                  Retour
                </Button>
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Inscription...
                    </>
                  ) : (
                    "Créer mon compte"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
