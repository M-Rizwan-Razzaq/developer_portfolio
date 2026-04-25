import { useEffect, useState } from "react";
import { Check, Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const TEXT_THEME_STORAGE_KEY = "artisan-text-theme";
const TEXT_THEMES = [
  { id: "violet", label: "Violet", className: "bg-violet-500" },
  { id: "blue", label: "Blue", className: "bg-blue-500" },
  { id: "emerald", label: "Emerald", className: "bg-emerald-500" },
  { id: "amber", label: "Amber", className: "bg-amber-500" },
  { id: "rose", label: "Rose", className: "bg-rose-500" },
  { id: "cyan", label: "Cyan", className: "bg-cyan-500" },
] as const;

type TextThemeId = (typeof TEXT_THEMES)[number]["id"];

const DEFAULT_THEME: TextThemeId = "violet";

const applyTextTheme = (theme: string) => {
  document.documentElement.dataset.textTheme = theme;
  window.localStorage.setItem(TEXT_THEME_STORAGE_KEY, theme);
};

const TextColorPicker = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<TextThemeId>(DEFAULT_THEME);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(TEXT_THEME_STORAGE_KEY) as TextThemeId | null;
    const initialTheme = storedTheme && TEXT_THEMES.some((theme) => theme.id === storedTheme) ? storedTheme : DEFAULT_THEME;

    setCurrentTheme(initialTheme);
    applyTextTheme(initialTheme);
    setMounted(true);
  }, []);

  const handleThemeChange = (theme: TextThemeId) => {
    setCurrentTheme(theme);
    applyTextTheme(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="hero-outline"
          size="icon"
          className="h-10 w-10 rounded-full relative overflow-hidden"
          aria-label="Choose text color"
          disabled={!mounted}
        >
          <Palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52 rounded-2xl p-2">
        <div className="px-2 pt-1 pb-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Text Colors
          </p>
        </div>
        {TEXT_THEMES.map((theme) => (
          <DropdownMenuItem
            key={theme.id}
            onSelect={() => handleThemeChange(theme.id)}
            className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 cursor-pointer"
          >
            <span className="flex items-center gap-3">
              <span className={`h-3.5 w-3.5 rounded-full ${theme.className}`} />
              <span className="text-sm font-medium">{theme.label}</span>
            </span>
            {currentTheme === theme.id ? <Check className="h-4 w-4 text-primary" /> : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TextColorPicker;
