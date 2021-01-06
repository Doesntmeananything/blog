import { useBrowserLayoutEffect } from "./useBrowserLayoutEffect";

export const useThemeDetector = () => {
  useBrowserLayoutEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.setItem("theme", "dark");
      document.querySelector("html")?.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);
};
