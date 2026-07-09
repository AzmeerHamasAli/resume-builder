import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/style";

type FAQItemData = {
  question: string;
  answer: React.ReactNode;
};

const getFaqItems = (): FAQItemData[] => [
  {
    question: t`Is this resume builder free to use??`,
    answer: t`Yes. You can create, edit, and export resumes without subscription fees or paywalled features.`,
  },
  {
    question: t`How is my data protected?`,
    answer: t`Your data is stored securely on this instance and is not sold to third parties. Self-hosting gives you full control over where data lives.`,
  },
  {
    question: t`Can I export my resume to PDF?`,
    answer: t`Yes. Export to PDF with one click. Formatting and styling from the editor are preserved in the export.`,
  },
  {
    question: t`Is the app available in multiple languages?`,
    answer: t`Yes. Choose your language in settings or with the language switcher in the header. Available locales depend on your deployment.`,
  },
  {
    question: t`What makes this builder different?`,
    answer: t`Privacy-focused design, no ads, and no feature tiers—just resume editing with real-time preview and flexible templates.`,
  },
  {
    question: t`Can I customize the templates?`,
    answer: t`Every template supports colors, fonts, spacing, and custom CSS when you need finer control.`,
  },
  {
    question: t`How do I share my resume?`,
    answer: t`Share via a public URL, protect with a password, or download a PDF to send directly.`,
  },
];

export function FAQ() {
  const faqItems = getFaqItems();

  return (
    <section
      id="frequently-asked-questions"
      className="flex flex-col gap-x-16 gap-y-6 p-4 md:p-8 lg:flex-row lg:gap-x-18 xl:py-16"
    >
      <motion.h2
        className={cn(
          "flex-1 text-2xl font-semibold tracking-tight will-change-[transform,opacity] md:text-4xl xl:text-5xl",
          "flex shrink-0 flex-wrap items-center gap-x-1.5 lg:flex-col lg:items-start",
        )}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <Trans context="Home page FAQ section heading with each word visually separated into individual spans">
          <span>Frequently</span>
          <span>Asked</span>
          <span>Questions</span>
        </Trans>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="max-w-2xl flex-2 will-change-[transform,opacity] lg:ml-auto 2xl:max-w-3xl"
      >
        <Accordion multiple>
          {faqItems.map((item, index) => (
            <FAQItemComponent key={item.question} item={item} index={index} />
          ))}
        </Accordion>

        <p className="mt-8 text-sm text-muted-foreground">
          <Trans>
            Ready to build?{" "}
            <Link to="/dashboard" className={cn(buttonVariants({ variant: "link" }), "h-auto px-0!")}>
              Go to your dashboard
            </Link>
          </Trans>
        </p>
      </motion.div>
    </section>
  );
}

type FAQItemComponentProps = {
  item: FAQItemData;
  index: number;
};

function FAQItemComponent({ item, index }: FAQItemComponentProps) {
  return (
    <motion.div
      className="will-change-[transform,opacity] last:border-b"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <AccordionItem value={item.question}>
        <AccordionTrigger className="text-start text-base font-medium">{item.question}</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}
