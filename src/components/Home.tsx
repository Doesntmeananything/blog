import Link from "next/link";

import type { Post } from "../pages";
import { ArrowRight } from "./icons";

interface Props {
  posts: Post[];
}

export const Home = ({ posts }: Props) => (
  <main className="flex flex-col">
    <h2 className="mb-12 text-lg font-semibold ">
      Welcome to my thoughts, ideas, and work.
    </h2>

    <section>
      <h3 className="mb-1 text-xl font-semibold">Recently published</h3>

      <hr className="h-1 mb-8 rounded-sm" />

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <Link href={`/${encodeURIComponent(post.slug)}`}>
              <a>
                <h4 className="flex items-center mb-2 text-lg font-semibold">
                  {post.title}
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 text-xs transition-transform duration-200 ease-in-out transform group-hover:translate-x-1"
                  />
                </h4>

                <p>{post.description}</p>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </section>
  </main>
);
