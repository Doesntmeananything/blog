import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
  title: string;
  date: string;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export const BlogPost = ({ title, date, source }: Props) => (
  <main>
    <h1 className="mb-2 text-3xl font-semibold">{title}</h1>

    <p className="mb-4 text-sm">{date}</p>

    <article>
      <MDXRemote {...source} />
    </article>
  </main>
);
