import type { FC } from "react";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  registrationUrl: string;
  className?: string;
}

const EventCard: FC<EventCardProps> = ({ title, date, location, registrationUrl, className }) => (
  <article
    className={cn(
      "flex h-full flex-col justify-between rounded-2xl border border-border/40 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated",
      className,
    )}
  >
    <div>
      <h3 className="text-lg font-semibold text-foreground sm:text-xl">{title}</h3>
      <dl className="mt-5 space-y-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-[#312336]" aria-hidden="true" />
          <div>
            <dt className="sr-only">Date</dt>
            <dd className="font-medium text-foreground">{date}</dd>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-[#312336]" aria-hidden="true" />
          <div>
            <dt className="sr-only">Lieu</dt>
            <dd>{location}</dd>
          </div>
        </div>
      </dl>
    </div>
    <Button
      asChild
      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#312336] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#4b395b]"
    >
      <a href={registrationUrl} target="_blank" rel="noreferrer" aria-label={`S'inscrire à ${title}`}>
        S’inscrire
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </Button>
  </article>
);

export default EventCard;
