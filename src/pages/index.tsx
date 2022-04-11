import { InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

import { Home } from "../components/Home";

export interface Post {
  id: string;
  slug: string;
  date: string;
  title: string;
  description: string;
}

export const getAllPosts = async (): Promise<Post[]> => {
  const posts = await fetch(`${process.env.NOTION_API}/table/${process.env.NOTION_BLOG_ID}`);

  return await posts.json();
};

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

const HomePage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <NextSeo title="Home" />
    <Home posts={posts} />
  </>
);

export default HomePage;
