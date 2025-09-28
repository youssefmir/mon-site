import { useEffect } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Calendar,
  Compass,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Users,
} from "lucide-react";

import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { alumniContent, type AlumniIconMap } from "@/data/alumni";
import { cn } from "@/lib/utils";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#312336]";

const iconMap: AlumniIconMap = {
  Compass,
  BriefcaseBusiness,
  Globe2,
  Users,
};

const AlumniPage = () => {
  const { hero, pillars, stats, agendaHeading, events, adhesion, footer, meta } = alumniContent;

  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content;

    document.title = meta.title;
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.content = meta.description;
    }

    return () => {
      document.title = previousTitle;
      if (previousDescription !== undefined) {
        const descriptionEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (descriptionEl) {
          descriptionEl.content = previousDescription;
        }
      }
    };
  }, [meta.title, meta.description]);

  return (
    <div className="min-h-screen bg-[#f8f7fb] text-[#1f1a2a]">
      <Header />
      <main className="pb-24 pt-32">
        <section className="relative isolate overflow-hidden px-6 py-20 lg:px-10">
          <div className="absolute inset-0 z-0">
            <div className="absolute -left-48 top-10 h-96 w-96 rounded-full bg-[#312336]/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-40 bottom-12 h-[26rem] w-[26rem] rounded-full bg-[#f0b322]/20 blur-3xl" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/85" aria-hidden="true" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-8">
              <Badge className="w-fit rounded-full border-[#312336]/15 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#312336] shadow-sm">
                {hero.eyebrow}
              </Badge>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.3rem] lg:leading-[1.08]">
                {hero.title}
              </h1>
              <p className="text-lg text-[#4f4a59] sm:text-xl">{hero.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                {hero.ctas.map((cta) => (
                  <Button
                    key={cta.label}
                    size="lg"
                    variant={cta.style === "primary" ? "default" : "outline"}
                    className={cn(
                      focusRing,
                      cta.style === "primary"
                        ? "rounded-full border-0 px-9 py-3 text-base shadow-[0_12px_30px_-12px_rgba(49,35,54,0.6)] hover:-translate-y-0.5"
                        : "rounded-full border-[#312336]/20 bg-white/80 px-9 py-3 text-base font-semibold text-[#312336] shadow-[0_10px_25px_-20px_rgba(49,35,54,0.45)] hover:-translate-y-0.5 hover:bg-white/95",
                    )}
                    asChild
                  >
                    <a href={cta.href} className="inline-flex items-center gap-2">
                      {cta.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid w-full max-w-xl gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-3xl border border-white/70 bg-white/85 px-6 py-7 shadow-[0_24px_45px_-32px_rgba(49,35,54,0.45)] backdrop-blur transition duration-200 hover:-translate-y-1"
                >
                  <p className="text-4xl font-semibold text-[#312336]">{stat.value}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#6f697a]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pillars" className="mx-auto mt-20 max-w-6xl px-6 lg:px-10">
          <header className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#1f1a2a] sm:text-4xl">4 piliers pour propulser ta carrière</h2>
            <p className="mt-4 text-lg text-[#4f4a59]">
              Mentoring, employabilité, international et réseau : un programme complet construit avec la communauté MIAGE.
            </p>
          </header>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = iconMap[pillar.icon];

              return (
                <Card key={pillar.id} className="relative overflow-hidden border-[#312336]/12 bg-white/90 p-8">
                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#312336]/10 text-[#312336]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-[#1f1a2a]">{pillar.title}</h3>
                        <p className="mt-2 text-sm text-[#4f4a59]">{pillar.description}</p>
                      </div>
                    </div>

                    {pillar.badge ? (
                      <Badge className="w-fit rounded-full border-none bg-[#f0b322]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#7c5a0e]">
                        {pillar.badge}
                      </Badge>
                    ) : null}
                  </div>

                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#312336]/5 blur-3xl" aria-hidden="true" />
                </Card>
              );
            })}
          </div>
        </section>

        <section id="agenda" className="mx-auto mt-24 max-w-6xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#97720f]">{hero.eyebrow}</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#1f1a2a] sm:text-4xl">{agendaHeading}</h2>
              <p className="mt-4 max-w-2xl text-base text-[#4f4a59]">
                Des rencontres mensuelles pour progresser, networker et garder un lien fort avec les diplômés MIAGE.
              </p>
            </div>
            <Button
              variant="outline"
              className={`${focusRing} rounded-full border-[#312336]/20 bg-white/80 px-6 py-2 text-sm text-[#312336]`}
              asChild
            >
              <a href="#adhesion" className="inline-flex items-center gap-2">
                Rejoindre le programme
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event.id} className="flex h-full flex-col border-[#312336]/12 bg-white/90">
                <CardHeader className="space-y-3 pb-0">
                  <Badge className="w-fit rounded-full border-[#312336]/10 bg-[#312336]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#312336]">
                    Événement
                  </Badge>
                  <CardTitle className="text-xl text-[#1f1a2a]">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-6 pt-6">
                  <div className="space-y-4 text-sm text-[#4f4a59]">
                    <p className="flex items-center gap-2 text-[#1f1a2a]">
                      <Calendar className="h-4 w-4 text-[#312336]" aria-hidden="true" />
                      {event.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#312336]" aria-hidden="true" />
                      {event.location}
                    </p>
                  </div>
                  <Button
                    className={`${focusRing} w-full rounded-full border-0 bg-[#312336] py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#463454]`}
                    asChild
                  >
                    <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2">
                      Je participe
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="adhesion"
          className="mx-auto mt-24 max-w-6xl overflow-hidden rounded-3xl border border-[#312336]/15 bg-gradient-to-r from-[#f0b322] via-[#f6c758] to-[#f0b322] p-[1px] shadow-[0_25px_60px_-28px_rgba(240,179,34,0.5)]"
        >
          <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#97720f]">
                  {adhesion.heading}
                </p>
                <p className="text-lg text-[#4f4a59]">{adhesion.description}</p>
                <a href={`mailto:${adhesion.contactEmail}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#312336]">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {adhesion.contactEmail}
                </a>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className={`${focusRing} rounded-full border-0 bg-[#312336] px-9 py-3 text-base font-semibold text-white hover:-translate-y-0.5 hover:bg-[#463454]`}
                  asChild
                >
                  <a href={adhesion.buttonUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    {adhesion.buttonLabel}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className={`${focusRing} rounded-full border-[#312336]/20 bg-white/80 px-7 py-3 text-sm font-semibold text-[#312336] hover:-translate-y-0.5 hover:bg-white/95`}
                  asChild
                >
                  <a href={`mailto:${adhesion.contactEmail}`} className="inline-flex items-center gap-2">
                    Contacter l’équipe
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 rounded-3xl border border-[#312336]/10 bg-white/90 p-10 shadow-[0_20px_45px_-30px_rgba(49,35,54,0.4)] lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#1f1a2a]">Restons en contact</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {footer.contacts.map((contact) => (
                  <div key={contact.email} className="rounded-2xl border border-[#312336]/10 bg-white/80 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#6f697a]">{contact.label}</p>
                    <a href={`mailto:${contact.email}`} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#312336]">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      {contact.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#1f1a2a]">Suivre MIAGE Forum Alumni</h3>
              <div className="space-y-3">
                {footer.socials.map((social) => (
                  <Button key={social.id} variant="ghost" className="w-full justify-start rounded-2xl px-4 py-3 text-left text-sm font-semibold text-[#312336] hover:bg-[#312336]/10" asChild>
                    <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.ariaLabel ?? social.label} className="inline-flex w-full items-center justify-between">
                      <span>{social.label}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                ))}
              </div>
              <p className="text-xs text-[#6f697a]">{footer.disclaimer}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AlumniPage;
