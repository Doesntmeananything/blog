import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from "next";
import { BlockMapType } from "react-notion";

import { getAllPosts, Post } from ".";
import { BlogPost } from "../components/BlogPost";
import { Layout } from "../components/Layout";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((row) => `/${row.slug}`),
    fallback: true,
  };
};

type StaticPropsResult = Promise<
  GetStaticPropsResult<{ blocks: BlockMapType; post: Post }>
>;

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext): StaticPropsResult => {
  const posts = await getAllPosts();
  const post = posts.find((t) => t.slug === params?.slug);

  if (!post) return { notFound: true };

  const blocks: BlockMapType = await fetch(
    `${process.env.NOTION_API}/page/${post.id}`
  ).then((res) => res.json());

  return {
    props: {
      blocks,
      post,
    },
    revalidate: 10,
  };
};

const PostPage = ({
  blocks,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) return null;

  const formattedDate = new Date(
    post.date.split("-").join()
  ).toLocaleDateString();

  return (
    <Layout>
      <BlogPost title={post.title} date={formattedDate} notionBlocks={blocks} />
    </Layout>
  );
};
export default PostPage;
