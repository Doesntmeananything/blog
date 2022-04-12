import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { NextSeo } from "next-seo";

import { BlogPost } from "../components/BlogPost";
import { collectMdxSourcePromises } from "../scripts/posts";
import { PostMeta } from "../typings/post";

export const getStaticPaths: GetStaticPaths = async () => {
  const postSources = await collectMdxSourcePromises();
  const paths = postSources.map((source) => "/" + (source.frontmatter as unknown as PostMeta).slug);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}> = async ({ params }) => {
  const postSources = await collectMdxSourcePromises();
  const source = postSources.find((source) => source.frontmatter?.slug === params?.slug);

  if (!source) return { notFound: true };

  return {
    props: {
      source,
    },
  };
};

const PostPage = ({ source }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!source.frontmatter) return;

  const { date, title } = source.frontmatter;
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <>
      <NextSeo title={title} />
      <BlogPost date={formattedDate} source={source} title={title} />
    </>
  );
};

export default PostPage;
