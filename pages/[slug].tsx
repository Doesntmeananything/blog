import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { BlockMapType } from "react-notion";

import { getAllPosts } from ".";
import { BlogPost } from "../components/BlogPost";
import { Layout } from "../components/Layout";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((row) => `/${row.slug}`),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const posts = await getAllPosts();
  const post = posts.find((t) => t.slug === params?.slug)!;
  const blocks: BlockMapType = await fetch(
    `${process.env.NOTION_API}/page/${post.id}`
  ).then((res) => res.json());

  return {
    props: {
      blocks,
      post,
    },
  };
};

const PostPage = ({
  blocks,
  post: { date, title },
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const formattedDate = new Date(date.split("-").join()).toLocaleDateString();

  return (
    <Layout>
      <BlogPost title={title} date={formattedDate} notionBlocks={blocks} />
    </Layout>
  );
};
export default PostPage;
