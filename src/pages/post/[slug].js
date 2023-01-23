import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import path from 'path';
import Layout from '../../components/Layout';

import { postFilePaths, POSTS_PATH } from '../../../utils/mdxUtils';

export default function PostPage({ source, frontMatter }) {
  // console.log(frontMatter);
  return (
    <Layout>
      <div className="container mx-auto my-3 md:my-16">
        <Image
          className="object-cover mx-auto min-h-screen"
          src={frontMatter.image}
          alt=""
          width={1100}
          height={800}
        />
        <h1 className="sm:text-3xl text-2xl  text-center text-gray-800  font-bold my-2">
          {frontMatter.title}
        </h1>
        <main className="max-w-screen-lg mx-auto my-4 text-left prose prose-a:text-blue-500">
          <MDXRemote {...source} />
        </main>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  // console.log(params);
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
