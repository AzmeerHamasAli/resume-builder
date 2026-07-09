import { Trans } from "@lingui/react/macro";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import { BrandIcon } from "@/components/ui/brand-icon";
export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(1_0_0/0.15),transparent_55%),radial-gradient(ellipse_at_bottom_left,oklch(0.3_0.08_195/0.4),transparent_50%)]"
        />
        <Link to="/" className="relative z-10 transition-opacity hover:opacity-90">
          <BrandIcon className="size-16 text-primary-foreground" />
        </Link>
        <div className="relative z-10 max-w-md space-y-4 text-primary-foreground">
          <h1 className="text-3xl font-semibold tracking-tight">
            <Trans>Build a resume that gets noticed</Trans>
          </h1>
          <p className="text-sm leading-relaxed text-primary-foreground/85">
            <Trans>
              Create, customize, and export professional resumes with real-time preview and powerful design controls.
            </Trans>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center px-6 py-10 sm:px-10">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="flex flex-col items-center gap-3 lg:hidden">
            <Link to="/">
              <BrandIcon className="size-14" />
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
