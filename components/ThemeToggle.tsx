import { useTheme } from "next-themes";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useLayoutEffect,
  useState,
} from "react";

import { Moon, Sun } from "./icons";

const useBrowserEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const ThemeToggle = ({ ...props }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useBrowserEffect(() => setMounted(true), []);

  const newTheme = theme === "light" ? "dark" : "light";
  const label = `Activate ${newTheme} mode`;

  const toggleTheme = () => {
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} aria-label={label} title={label} {...props}>
      {mounted && theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};
