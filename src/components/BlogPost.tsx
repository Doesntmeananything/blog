import { BlockMapType, NotionRenderer } from "react-notion";

interface Props {
  title: string;
  date: string;
  notionBlocks: BlockMapType;
}

export const BlogPost = ({ title, date, notionBlocks }: Props) => (
  <article>
    <h1 className="mb-2 text-3xl font-semibold">{title}</h1>

    <p className="mb-4 text-sm">{date}</p>

    <NotionRenderer blockMap={notionBlocks} />
  </article>
);
