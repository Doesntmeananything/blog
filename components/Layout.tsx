import Link from "next/link";
import type { ReactElement } from "react";

import { GitHub, Twitter } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

interface Props {
  children: ReactElement | ReactElement[];
}

export const Layout = ({ children }: Props) => (
  <div className="grid max-w-screen-sm min-h-screen px-8 mx-auto md:max-w-screen-md grid-rows-layout">
    <header className="flex items-center justify-between py-10 space-x-7 sm:space-x-20 sm:items-baseline">
      <Link href="/">
        <a className="max-w-xs text-4xl font-bold sm:max-w-md">
          Doesn't Mean Anything
        </a>
      </Link>

      <nav className="box-content flex flex-col space-y-3 text-2xl sm:space-y-0 sm:flex-row sm:space-x-4 sm:text-xl">
        <a
          href="https://github.com/doesntmeananything"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
          aria-label="Link to the GitHub profile"
        >
          <GitHub className="transition-colors duration-200 ease-in-out stroke-current hover:text-green-500" />
        </a>

        <a
          href="https://twitter.com/andrey_krasnoff"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-item"
          aria-label="Link to the Twitter profile"
        >
          <Twitter className="transition-colors duration-200 ease-in-out stroke-current hover:text-blue-500" />
        </a>

        <ThemeToggle className="transition-colors duration-200 ease-in-out stroke-current nav-item hover:text-purple-500 dark:hover:text-yellow-500 focus:text-purple-500 dark:focus:text-yellow-500" />
      </nav>
    </header>

    {children}

    <footer className="py-10 text-xs text-center">
      © {new Date().getFullYear()}, Andrey Krasnov
    </footer>
  </div>
);
