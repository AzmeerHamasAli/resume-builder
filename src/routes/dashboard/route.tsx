import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { AppShell } from "./-components/app-shell";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (!context.session) throw redirect({ to: "/auth/login", replace: true });
    return { session: context.session };
  },
});

function RouteComponent() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
