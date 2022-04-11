import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";

import { Home } from "../components/Home";
import { collectPostSources } from "../scripts/posts";
import type { PostMeta } from "../typings/post";

export const getStaticProps: GetStaticProps<{ posts: PostMeta[] }> = async () => {
  const postSources = await collectPostSources();
  const postsMeta = postSources.map((source) => source.frontmatter as unknown as PostMeta);

  // Sort posts by date in descending order
  const posts = postsMeta.sort(
    (postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime()
  );

  return {
    props: { posts },
  };
};

const HomePage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <NextSeo title="Home" />
    <Home posts={posts} />
  </>
);

export default HomePage;
