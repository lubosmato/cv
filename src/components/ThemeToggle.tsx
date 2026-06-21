"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme()

  const toggle = () => {
    // State 1: follow OS (theme === "system"). State 2: snapshot the opposite of OS.
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark")
    } else {
      setTheme("system")
    }
  }

  return (
    // Align with the page content container (max-w-6xl + matching padding) instead of the screen edge.
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 mx-auto flex max-w-6xl justify-end px-4 sm:px-6 md:px-8 print:hidden">
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle theme"
        className="pointer-events-auto rounded-lg border border-border bg-background p-2 text-foreground shadow-sm transition-colors hover:bg-secondary"
      >
        {/* Icons driven by the .dark class on <html> (set pre-hydration by next-themes),
            so they are visible immediately without waiting for a mount effect. */}
        <Moon className="h-5 w-5 block dark:hidden" />
        <Sun className="h-5 w-5 hidden dark:block" />
      </button>
    </div>
  )
}
