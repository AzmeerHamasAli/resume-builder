import type { MessageDescriptor } from "@lingui/core";

import { msg, t } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/react/macro";
import {
  BrainIcon,
  BriefcaseIcon,
  GearSixIcon,
  ListIcon,
  ReadCvLogoIcon,
  ShieldCheckIcon,
  TranslateIcon,
  UserCircleIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { Link, useRouterState } from "@tanstack/react-router";

import { LocaleCombobox } from "@/components/locale/combobox";
import { ThemeToggleButton } from "@/components/theme/toggle-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BrandIcon } from "@/components/ui/brand-icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserDropdownMenu } from "@/components/user/dropdown-menu";
import { APP_NAME } from "@/utils/brand";
import { getInitials } from "@/utils/string";
import { cn } from "@/utils/style";

type NavItem = {
  icon: React.ReactNode;
  label: MessageDescriptor;
  href: string;
  match: (pathname: string) => boolean;
};

const primaryNav: NavItem[] = [
  {
    icon: <ReadCvLogoIcon className="size-4" />,
    label: msg`Resumes`,
    href: "/dashboard/resumes",
    match: (p) => p.startsWith("/dashboard/resumes") || p === "/dashboard",
  },
  {
    icon: <BriefcaseIcon className="size-4" />,
    label: msg`Job Search`,
    href: "/dashboard/job-search",
    match: (p) => p.startsWith("/dashboard/job-search"),
  },
];

const settingsNav: NavItem[] = [
  {
    icon: <UserCircleIcon className="size-3.5" />,
    label: msg`Profile`,
    href: "/dashboard/settings/profile",
    match: (p) => p === "/dashboard/settings/profile",
  },
  {
    icon: <GearSixIcon className="size-3.5" />,
    label: msg`Preferences`,
    href: "/dashboard/settings/preferences",
    match: (p) => p === "/dashboard/settings/preferences",
  },
  {
    icon: <ShieldCheckIcon className="size-3.5" />,
    label: msg`Authentication`,
    href: "/dashboard/settings/authentication",
    match: (p) => p.startsWith("/dashboard/settings/authentication"),
  },
  {
    icon: <BrainIcon className="size-3.5" />,
    label: msg`Integrations`,
    href: "/dashboard/settings/integrations",
    match: (p) => p.startsWith("/dashboard/settings/integrations"),
  },
  {
    icon: <WarningIcon className="size-3.5" />,
    label: msg`Danger Zone`,
    href: "/dashboard/settings/danger-zone",
    match: (p) => p === "/dashboard/settings/danger-zone",
  },
];

function NavLink({ item }: { item: NavItem }) {
  const { i18n } = useLingui();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = item.match(pathname);

  return (
    <Link
      to={item.href}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {item.icon}
      <span className="hidden sm:inline">{i18n.t(item.label)}</span>
    </Link>
  );
}

function SettingsTabs() {
  const { i18n } = useLingui();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  if (!pathname.startsWith("/dashboard/settings")) return null;

  return (
    <div className="border-t border-border bg-muted/30">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 sm:px-6">
        {settingsNav.map((item) => {
          const active = item.match(pathname);
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "inline-flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm",
                active
                  ? "bg-card text-foreground shadow-sm ring-1 ring-border"
                  : "text-muted-foreground hover:bg-card/80 hover:text-foreground",
              )}
            >
              {item.icon}
              {i18n.t(item.label)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const { i18n } = useLingui();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const inSettings = pathname.startsWith("/dashboard/settings");

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-card/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-16 sm:px-6">
          <Link to="/dashboard/resumes" className="flex shrink-0 items-center gap-2.5">
            <BrandIcon variant="icon" className="size-7 text-primary sm:size-8" />
            <span className="hidden font-semibold tracking-tight text-foreground sm:inline">
              {APP_NAME}
            </span>
          </Link>

          <nav
            aria-label={t({ message: "Main", comment: "Dashboard main navigation landmark label" })}
            className="hidden items-center gap-1 md:flex"
          >
            {primaryNav.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>

          <div className="ms-auto flex items-center gap-1 sm:gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <ListIcon className="size-5" />
                    <span className="sr-only">
                      <Trans>Menu</Trans>
                    </span>
                  </Button>
                }
              />
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel>
                  <Trans>Navigate</Trans>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {primaryNav.map((item) => (
                  <DropdownMenuItem key={item.href} render={<Link to={item.href} />}>
                    {item.icon}
                    {i18n.t(item.label)}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuLabel>
                  <Trans>Settings</Trans>
                </DropdownMenuLabel>
                {settingsNav.map((item) => (
                  <DropdownMenuItem key={item.href} render={<Link to={item.href} />}>
                    {item.icon}
                    {i18n.t(item.label)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant={inSettings ? "secondary" : "outline"} size="sm" className="hidden gap-1.5 md:flex">
                    <GearSixIcon className="size-4" />
                    <Trans>Settings</Trans>
                  </Button>
                }
              />
              <DropdownMenuContent align="end" className="w-52">
                {settingsNav.map((item) => (
                  <DropdownMenuItem key={item.href} render={<Link to={item.href} />}>
                    {item.icon}
                    {i18n.t(item.label)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <LocaleCombobox
              render={
                <Button size="icon" variant="ghost" aria-label={t({ message: "Language", comment: "Locale" })}>
                  <TranslateIcon />
                </Button>
              }
            />

            <ThemeToggleButton />

            <UserDropdownMenu>
              {({ session }) => (
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="size-8">
                    <AvatarImage src={session.user.image ?? undefined} />
                    <AvatarFallback className="bg-primary/15 text-xs text-primary">
                      {getInitials(session.user.name)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              )}
            </UserDropdownMenu>
          </div>
        </div>

        <SettingsTabs />
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">{children}</main>
    </div>
  );
}
