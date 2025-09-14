import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "contact@miageforum.fr",
      icon: "📧"
    },
    {
      title: "Téléphone", 
      value: "+33 1 23 45 67 89",
      icon: "📞"
    },
    {
      title: "Adresse",
      value: "Université Paris-Dauphine\nPlace du Maréchal de Lattre de Tassigny\n75016 Paris",
      icon: "📍"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contactez-nous
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une question ? Un projet ? N'hésitez pas à nous contacter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Informations de contact
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-6 bg-gradient-card shadow-card">
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-lg">Rejoignez notre communauté</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4">
                    Suivez-nous sur nos réseaux sociaux pour ne rien manquer de nos actualités
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">LinkedIn</Button>
                    <Button variant="outline" size="sm">Instagram</Button>
                    <Button variant="outline" size="sm">Twitter</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 shadow-elegant bg-gradient-card">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Prénom
                      </label>
                      <Input placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom
                      </label>
                      <Input placeholder="Votre nom" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="votre.email@exemple.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Objet
                    </label>
                    <Input placeholder="Objet de votre message" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Votre message..." 
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 font-semibold transition-smooth"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;