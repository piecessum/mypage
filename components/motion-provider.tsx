"use client";

import * as React from "react";
import { MotionConfig } from "motion/react";
import { useIsMobile } from "@/lib/use-is-mobile";

/**
 * На мобильных отключаем анимации с трансформами/лейаутом — на телефоне они
 * дёргаются. reducedMotion="always" гасит перемещения/масштаб/layout,
 * оставляя только мгновенную отрисовку.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      {children}
    </MotionConfig>
  );
}
