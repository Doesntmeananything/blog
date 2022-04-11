import { readdirSync, readFileSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";

const POST_DIR_PATH = join(process.cwd(), "posts");

export const collectPostSources = () => {
  const postPaths = readdirSync(POST_DIR_PATH);
  const postSourcePromises = postPaths.map((path) =>
    serialize(readFileSync(join(POST_DIR_PATH, path)).toString(), { parseFrontmatter: true })
  );

  return Promise.all(postSourcePromises);
};
