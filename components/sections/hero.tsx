"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { motion } from "motion/react";
import Image from "next/image";
import { MapPin, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <BackgroundGrid />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="var(--accent)"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 overflow-hidden rounded-full border-2 border-neutral-200 dark:border-neutral-800"
        >
          <Image
            src="/avatar.jpg"
            alt="Алексей Масюта"
            width={224}
            height={224}
            className="h-28 w-28 object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/40 px-3 py-1 text-xs text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/40 dark:text-neutral-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Открыт к предложениям
        </motion.div>

        <TextGenerateEffect
          words="Алексей Масюта"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground"
        />

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-3 text-xl font-medium text-neutral-600 sm:text-2xl md:text-3xl dark:text-neutral-400"
        >
          Бизнес-аналитик{" "}
          <span className="text-neutral-400 dark:text-neutral-600">·</span>{" "}
          UX/UI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400"
        >
          5+ лет в B2B-продуктах. Веду полный цикл работы с требованиями: от
          интервью со стейкхолдерами до приёмки результатов разработки.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-4 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500"
        >
          <MapPin className="h-4 w-4" />
          Санкт-Петербург · Готов к удалёнке и командировкам
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <MovingBorderButton
            as="a"
            href="#contact"
            containerClassName="w-44 h-12"
            className="font-medium"
          >
            Связаться
          </MovingBorderButton>
          <a
            href="#experience"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[1.75rem] border border-neutral-200 bg-transparent px-6 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900"
          >
            Посмотреть опыт
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
