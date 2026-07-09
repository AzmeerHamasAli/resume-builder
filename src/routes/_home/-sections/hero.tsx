import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { CometCard } from "@/components/animation/comet-card";
import { Spotlight } from "@/components/animation/spotlight";
import { Button } from "@/components/ui/button";
import { APP_DESCRIPTION, APP_TAGLINE } from "@/utils/brand";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden border-b border-border/60 bg-linear-to-b from-accent/30 via-background to-background py-24"
    >
      <Spotlight />

      <motion.div
        className="will-change-[transform,opacity]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <CometCard glareOpacity={0} className="3xl:max-w-7xl relative -mb-12 max-w-4xl px-8 md:-mb-24 md:px-12 lg:px-0">
          <video
            loop
            muted
            autoPlay
            playsInline
            // @ts-expect-error - typescript doesn't know about fetchPriority for video elements
            fetchPriority="high"
            src="/videos/timelapse.mp4"
            aria-label={t`Timelapse demonstration of building a resume`}
            className="pointer-events-none size-full rounded-md border object-cover"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent via-40% to-background"
          />
        </CometCard>
      </motion.div>

      <motion.div className="xs:px-0 relative z-10 flex max-w-2xl flex-col items-center gap-y-6 px-4 text-center">
        <motion.div
          className="will-change-[transform,opacity]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.55 }}
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{APP_TAGLINE}</h1>
        </motion.div>

        <motion.p
          className="max-w-xl text-base leading-relaxed text-muted-foreground will-change-[transform,opacity] md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.7 }}
        >
          <Trans>{APP_DESCRIPTION}</Trans>
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-3 will-change-[transform,opacity] sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.82 }}
        >
          <Button
            size="lg"
            nativeButton={false}
            className="group relative overflow-hidden px-4"
            render={
              <Link to="/dashboard">
                <span className="relative z-10 flex items-center gap-2">
                  <Trans>Get Started</Trans>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            }
          />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        role="presentation"
        className="absolute inset-s-1/2 bottom-8 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.7 }}
      >
        <motion.div
          className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/30 p-1.5 will-change-transform"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div className="h-1.5 w-1 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
