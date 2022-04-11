import Link from "next/link";
import type { ReactElement } from "react";

import { GitHub, Twitter } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

interface Props {
  children: ReactElement | ReactElement[];
}

export const Layout = ({ children }: Props) => (
  <div className="mx-auto grid min-h-screen max-w-screen-sm grid-rows-layout px-8 md:max-w-screen-md">
    <header className="flex items-center justify-between space-x-7 py-10 sm:items-baseline sm:space-x-20">
      <Link href="/">
        <a className="max-w-xs text-4xl font-bold sm:max-w-md">Doesn&apos;t Mean Anything</a>
      </Link>

      <nav className="box-content flex flex-col space-y-3 text-2xl sm:flex-row sm:space-y-0 sm:space-x-4 sm:text-xl">
        <a
          aria-label="Link to the GitHub profile"
          className="nav-item"
          href="https://github.com/doesntmeananything"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub className="stroke-current transition-colors duration-200 ease-in-out hover:text-green-500" />
        </a>

        <a
          aria-label="Link to the Twitter profile"
          className="nav-item"
          href="https://twitter.com/andrey_krasnoff"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter className="stroke-current transition-colors duration-200 ease-in-out hover:text-blue-500" />
        </a>

        <ThemeToggle className="nav-item stroke-current transition-colors duration-200 ease-out hover:text-purple-500 focus:text-purple-500 dark:hover:text-yellow-500 dark:focus:text-yellow-500" />
      </nav>
    </header>

    {children}

    <footer className="py-10 text-center text-xs">
      © {new Date().getFullYear()}, Andrey Krasnov
    </footer>
  </div>
);
