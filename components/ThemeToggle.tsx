import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";

import { useBrowserLayoutEffect } from "../hooks";
import { Moon, Sun } from "./icons";

type Theme = "light" | "dark" | null;

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const ThemeToggle = ({ ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(null);

  const label = `Activate ${theme} mode`;

  useBrowserLayoutEffect(() => {
    setTheme(localStorage.getItem("theme") as Theme);
  }, []);

  const toggleTheme = () => {
    const html = document.querySelector("html")!;

    if (localStorage.theme === "light") {
      localStorage.setItem("theme", "dark");
      html.className = "dark";
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      html.className = "light";
      setTheme("light");
    }
  };

  return (
    <button onClick={toggleTheme} aria-label={label} title={label} {...props}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};
