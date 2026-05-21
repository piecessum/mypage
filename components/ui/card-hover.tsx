"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    meta?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title + idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-neutral-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] group-hover:border-neutral-300 dark:group-hover:border-neutral-700 relative z-20">
            <div className="relative z-50 p-2">
              <h4 className="text-neutral-900 dark:text-zinc-100 font-bold tracking-wide">
                {item.title}
              </h4>
              {item.meta && (
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  {item.meta}
                </p>
              )}
              <p className="mt-4 text-neutral-600 dark:text-zinc-300 tracking-wide leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
