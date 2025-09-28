import type { FC } from "react";

import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  accentColor?: string;
  className?: string;
}

const StatCard: FC<StatCardProps> = ({ value, label, accentColor = "#312336", className }) => (
  <div
    className={cn(
      "group relative flex h-full flex-col justify-between rounded-2xl border border-border/40 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated",
      className,
    )}
  >
    <span aria-hidden="true" className="mb-6 block h-1.5 w-16 rounded-full" style={{ backgroundColor: accentColor }} />
    <div>
      <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{value}</p>
      <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">{label}</p>
    </div>
  </div>
);

export default StatCard;
