import { FileTextIcon } from "@phosphor-icons/react";

import { cn } from "@/utils/style";

type Props = React.ComponentProps<typeof FileTextIcon> & {
  /** @deprecated Logo variants are no longer used; kept for call-site compatibility. */
  variant?: "logo" | "icon";
};

export function BrandIcon({ className, weight = "duotone", variant: _variant, ...props }: Props) {
  return (
    <FileTextIcon
      weight={weight}
      aria-hidden
      className={cn("size-12 shrink-0 text-primary", className)}
      {...props}
    />
  );
}
