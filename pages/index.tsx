import { InferGetStaticPropsType } from "next";

import { Home } from "../components/Home";
import { Layout } from "../components/Layout";

export interface Post {
  id: string;
  slug: string;
  date: string;
  title: string;
  description: string;
}

export const getAllPosts = async (): Promise<Post[]> => {
  const posts = await fetch(
    `${process.env.NOTION_API}/table/${process.env.NOTION_BLOG_ID}`
  );

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

const HomePage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
    <Home posts={posts} />
  </Layout>
);
export default HomePage;
