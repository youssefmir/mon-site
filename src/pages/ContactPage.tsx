import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { title: "Email", value: "contact@miageforum.fr", detail: "Nous répondons sous 48h", href: "mailto:contact@miageforum.fr" },
  { title: "Téléphone", value: "+33 1 23 45 67 89", detail: "Du lundi au vendredi, 9h-18h", href: "tel:+33123456789" },
  {
    title: "Adresse",
    value: "Université Paris-Dauphine",
    detail: "Place du Maréchal de Lattre de Tassigny\n75016 Paris",
    href: "https://maps.app.goo.gl/4Y8dXb9EJ1yXmaXW7",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pb-24 pt-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center">
            <p className="section-heading">CONTACT</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Entrons en contact
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Une question ou un projet ? L'équipe MIAGE Forum vous répond rapidement pour construire votre parcours.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="bg-white/85">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-foreground">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="text-base font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-foreground/90">{info.value}</p>
                    )}
                    <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{info.detail}</p>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-white/85">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold">Suivez notre actualité</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.linkedin.com/company/miage-forum" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.instagram.com/miageforum" target="_blank" rel="noreferrer">
                      Instagram
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://twitter.com/miageforum" target="_blank" rel="noreferrer">
                      Twitter
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/85">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-semibold text-foreground">Nous écrire</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground" htmlFor="firstName">
                        Prénom
                      </label>
                      <Input id="firstName" placeholder="Votre prénom" className="mt-2 h-12 rounded-xl border-border/70 bg-white/80" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground" htmlFor="lastName">
                        Nom
                      </label>
                      <Input id="lastName" placeholder="Votre nom" className="mt-2 h-12 rounded-xl border-border/70 bg-white/80" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground" htmlFor="email">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="votre.email@exemple.com" className="mt-2 h-12 rounded-xl border-border/70 bg-white/80" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground" htmlFor="subject">
                      Objet
                    </label>
                    <Input id="subject" placeholder="Objet de votre message" className="mt-2 h-12 rounded-xl border-border/70 bg-white/80" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground" htmlFor="message">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Votre message..."
                      className="mt-2 resize-none rounded-2xl border-border/70 bg-white/80"
                    />
                  </div>

                  <Button type="submit" className="w-full py-4 text-base">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
