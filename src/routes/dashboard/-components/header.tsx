import type { Icon as IconType } from "@phosphor-icons/react";

import { cn } from "@/utils/style";

type Props = {
  title: string;
  icon: IconType;
  className?: string;
};

export function DashboardHeader({ title, icon: IconComponent, className }: Props) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <IconComponent weight="duotone" className="size-5" />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
    </div>
  );
}
