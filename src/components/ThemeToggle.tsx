import { useTheme } from "next-themes";
import { ButtonHTMLAttributes, DetailedHTMLProps, useEffect, useState } from "react";

import { Moon, Sun } from "./icons";

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ThemeToggle = ({ ...props }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const newTheme = resolvedTheme === "light" ? "dark" : "light";
  const label = `Activate ${newTheme} mode`;

  const toggleTheme = () => {
    setTheme(newTheme);
  };

  return (
    <button aria-label={label} title={label} onClick={toggleTheme} {...props}>
      {mounted && resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};
