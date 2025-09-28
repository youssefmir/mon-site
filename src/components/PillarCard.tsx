import type { FC } from "react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

const PillarCard: FC<PillarCardProps> = ({ icon: Icon, title, description, badge, className }) => (
  <article
    className={cn(
      "relative flex h-full flex-col gap-4 rounded-2xl border border-border/40 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated",
      className,
    )}
  >
    <div className="flex items-start justify-between gap-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#312336]/10 text-[#312336]">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      {badge ? (
        <Badge className="rounded-full bg-[#f0b322]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#a87400]">
          {badge}
        </Badge>
      ) : null}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-base text-muted-foreground">{description}</p>
    </div>
  </article>
);

export default PillarCard;
