import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WaitingValidation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex min-h-screen items-center justify-center px-6 pb-20 pt-32">
        <Card className="w-full max-w-xl border border-white/60 bg-white/85 shadow-elevated">
          <CardHeader className="text-center">
            <Badge className="mx-auto w-fit rounded-full border-amber-200/60 bg-amber-100/70 px-4 py-1 text-xs font-semibold tracking-wide text-amber-700">
              Validation en cours
            </Badge>
            <CardTitle className="mt-4 text-2xl font-semibold text-foreground">
              Merci pour votre inscription !
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center text-muted-foreground">
            <p>
              Votre profil est en cours de vérification par l'équipe MIAGE Forum. Cette étape nous permet de garantir la qualité et la sécurité de notre réseau alumni.
            </p>
            <p>
              Vous recevrez un email dès que votre compte sera validé. En attendant, n'hésitez pas à consulter nos événements et services disponibles.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WaitingValidation;
