import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "contact@miageforum.fr",
      icon: "📧",
      href: "mailto:contact@miageforum.fr",
    },
    {
      title: "Téléphone",
      value: "+33 1 23 45 67 89",
      icon: "📞",
      href: "tel:+33123456789",
    },
    {
      title: "Adresse",
      value: "Université Paris-Dauphine\nPlace du Maréchal de Lattre de Tassigny\n75016 Paris",
      icon: "📍",
    },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(112,80,124,0.14),transparent_65%)]" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-foreground sm:text-5xl">Contactez-nous</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Une question ? Un projet ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-border/60 bg-white/80 p-10 shadow-soft backdrop-blur">
              <h3 className="text-xl font-semibold text-foreground">Informations de contact</h3>
              <div className="mt-8 space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-transparent bg-muted/40 px-5 py-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                        {info.title}
                      </h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="mt-2 block text-base font-medium text-primary transition-colors hover:text-primary/80"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-2 whitespace-pre-line text-base text-foreground/80">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-white/85">
              <CardHeader className="pb-5">
                <CardTitle className="text-xl font-semibold">Rejoignez notre communauté</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Suivez-nous sur nos réseaux sociaux pour ne rien manquer de nos actualités
                </p>
                <div className="flex flex-wrap gap-3">
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
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/85">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-semibold text-foreground">Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground/80">Prénom</label>
                    <Input placeholder="Votre prénom" className="mt-2 h-12 rounded-xl border-border/70 bg-white/80" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground/80">Nom</label>
                    <Input placeholder="Votre nom" className="mt-2 h-12 rounded-xl border-border/70 bg-white/80" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground/80">Email</label>
                  <Input type="email" placeholder="votre.email@exemple.com" className="mt-2 h-12 rounded-xl border-border/70 bg-white/80" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground/80">Objet</label>
                  <Input placeholder="Objet de votre message" className="mt-2 h-12 rounded-xl border-border/70 bg-white/80" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground/80">Message</label>
                  <Textarea
                    placeholder="Votre message..."
                    rows={6}
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
    </section>
  );
};

export default Contact;
