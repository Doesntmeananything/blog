import { useTheme } from "next-themes";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useState,
} from "react";

import { Moon, Sun } from "./icons";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const ThemeToggle = ({ ...props }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const newTheme = theme === "light" ? "dark" : "light";
  const label = `Activate ${newTheme} mode`;

  const toggleTheme = () => {
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} aria-label={label} title={label} {...props}>
      {theme === "dark" ? (
        <Sun className="transition-colors duration-200 ease-in-out stroke-current hover:text-yellow-500" />
      ) : (
        <Moon className="transition-colors duration-200 ease-in-out stroke-current hover:text-purple-500" />
      )}
    </button>
  );
};
