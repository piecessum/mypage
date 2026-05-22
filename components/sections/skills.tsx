"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "motion/react";
import { useIsMobile } from "@/lib/use-is-mobile";
import {
  IconChartBar,
  IconCode,
  IconDatabase,
  IconFileText,
  IconPalette,
  IconTestPipe,
} from "@tabler/icons-react";

const Tags = ({ items }: { items: string[] }) => (
  <div className="mt-3 flex flex-wrap gap-1.5">
    {items.map((t) => (
      <span
        key={t}
        className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[11px] text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
      >
        {t}
      </span>
    ))}
  </div>
);

const Header = ({
  variant,
}: {
  variant: "analysis" | "design" | "docs" | "db" | "qa" | "bi";
}) => {
  const isMobile = useIsMobile();
  if (variant === "analysis") {
    return (
      <div className="relative flex h-32 w-full flex-1 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent">
        <motion.div
          className="absolute inset-0"
          animate={
            isMobile ? undefined : { backgroundPosition: ["0% 0%", "100% 100%"] }
          }
          transition={
            isMobile
              ? undefined
              : { duration: 10, repeat: Infinity, repeatType: "reverse" }
          }
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168,85,247,0.3) 0%, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>
    );
  }
  if (variant === "design") {
    return (
      <div className="relative flex h-32 w-full flex-1 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10">
        <div className="flex gap-2">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-12 w-12 rounded-lg bg-pink-500/40"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="h-12 w-12 rounded-lg bg-purple-500/40"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            className="h-12 w-12 rounded-lg bg-orange-500/40"
          />
        </div>
      </div>
    );
  }
  if (variant === "docs") {
    return (
      <div className="relative flex h-32 w-full flex-1 flex-col gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={isMobile ? false : { width: "0%" }}
            animate={isMobile ? { width: "70%" } : { width: ["0%", "70%", "70%"] }}
            transition={
              isMobile ? undefined : { duration: 3, repeat: Infinity, delay: i * 0.3 }
            }
            className="h-2 rounded bg-emerald-500/40"
          />
        ))}
      </div>
    );
  }
  if (variant === "db") {
    return (
      <div className="relative flex h-32 w-full flex-1 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 font-mono text-xs text-blue-500/70 dark:text-blue-400/70">
        <pre className="leading-tight">{`SELECT count(*)
FROM orders
WHERE status = 'paid'
GROUP BY client_id;`}</pre>
      </div>
    );
  }
  if (variant === "qa") {
    return (
      <div className="relative flex h-32 w-full flex-1 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="h-16 w-16 rounded-full border-2 border-dashed border-amber-500/40"
        />
      </div>
    );
  }
  return (
    <div className="relative flex h-32 w-full flex-1 items-end gap-1 overflow-hidden rounded-xl bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-4">
      {[40, 70, 50, 90, 60, 80].map((h, i) => (
        <motion.div
          key={i}
          initial={isMobile ? false : { height: 0 }}
          animate={{ height: `${h}%` }}
          transition={
            isMobile
              ? undefined
              : {
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2,
                }
          }
          className="flex-1 rounded-t bg-sky-500/50"
        />
      ))}
    </div>
  );
};

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-sm font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            // навыки и стек
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Что я умею
          </h2>
        </motion.div>

        <BentoGrid className="md:auto-rows-[22rem] max-w-none mx-0">
          <BentoGridItem
            title="Бизнес-анализ"
            description={
              <div>
                Сбор требований, моделирование процессов, спецификации,
                декомпозиция, приёмочное тестирование.
                <Tags
                  items={[
                    "User Story",
                    "Use Case",
                    "BPMN",
                    "AS-IS / TO-BE",
                    "SRS",
                    "Системный анализ",
                  ]}
                />
              </div>
            }
            header={<Header variant="analysis" />}
            icon={<IconChartBar className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Базы данных"
            description={
              <div>
                Пишу SQL-запросы для аналитики, проверяю гипотезы.
                <Tags items={["SQL", "PostgreSQL", "DBeaver", "JSON"]} />
              </div>
            }
            header={<Header variant="db" />}
            icon={<IconDatabase className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="Документация"
            description={
              <div>
                Веду базу знаний, пишу инструкции, ТЗ, спецификации.
                <Tags
                  items={["Confluence", "Jira", "Obsidian", "Notion", "GitLab"]}
                />
              </div>
            }
            header={<Header variant="docs" />}
            icon={<IconFileText className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="Дизайн и прототипы"
            description={
              <div>
                User Flow, дерево метрик, дизайн-система, презентации.
                <Tags
                  items={["Figma", "FigJam", "Slides", "Keynote", "Дизайн-система"]}
                />
              </div>
            }
            header={<Header variant="design" />}
            icon={<IconPalette className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="QA и приёмка"
            description={
              <div>
                Критерии приёмки, ad-hoc тестирование, API-тесты.
                <Tags items={["Postman", "Ad-hoc", "Чек-листы"]} />
              </div>
            }
            header={<Header variant="qa" />}
            icon={<IconTestPipe className="h-4 w-4 text-neutral-500" />}
          />
          <BentoGridItem
            title="BI и аналитика"
            description={
              <div>
                Дашборды, продуктовые метрики, ретроспективные отчёты.
                <Tags items={["ReDash", "Excel", "Google Sheets"]} />
              </div>
            }
            header={<Header variant="bi" />}
            icon={<IconCode className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </div>
    </section>
  );
}
