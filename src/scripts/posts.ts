import { readdirSync, readFileSync } from "fs";
import { join } from "path";

import { serialize } from "next-mdx-remote/serialize";

const POST_DIR_PATH = join(process.cwd(), "posts");

export const collectMdxSourcePromises = () => {
  const postPaths = readdirSync(POST_DIR_PATH);
  const mdxSourcePromises = postPaths.map((path) =>
    serialize(readFileSync(join(POST_DIR_PATH, path)).toString(), { parseFrontmatter: true })
  );

  return Promise.all(mdxSourcePromises);
};
