import { Clock } from "./clock";
import { AnimatedThemeToggler } from "./theme-toggler";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto py-6 px-4 md:px-6 border-x border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          {/* Clock */}
          <Clock />

          {/* Theme Toggle */}
          <div className="sm:ml-auto">
            <AnimatedThemeToggler className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
