"use client";

import { cn } from "@/lib/utils";

export const BackgroundGrid = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_95%)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
    </div>
  );
};
