"use client";

import { Moon, Sun } from "lucide-react";
import moment from "moment";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "~/lib/utils";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}
export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return;
    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme ? "dark" : "light");
      });
    }).ready;
    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [isDark, duration]);
  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export function Footer() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time on mount to avoid hydration mismatch
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Changed to 1000ms (1 second) - no need for 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 border-x border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          {/* Clock */}
          <div className="font-mono tabular-nums min-w-80 text-center sm:text-left">
            {time ? moment(time).format("h:mm:ss A") : "--:--:--"}
          </div>

          {/* Theme Toggle */}
          <div className="sm:ml-auto">
            <AnimatedThemeToggler className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
