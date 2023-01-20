import React from 'react';
import PostItem from '../components/home/PostItem';
import Layout from '../components/Layout';
import Banner from '../components/elements/Banner';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

const blog = ({ posts }) => {
  return (
    <Layout>
      <div>
        <Banner pageTitle="Latest Blog" pageName="blog" />
        <div class="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
          <div class="grid grid-cols-1 md:gap-4 md:grid-cols-4">
            {posts &&
              posts.map((item, i) => {
                return (
                  <PostItem
                    key={item.filePath}
                    item={item.data}
                    filePath={item.filePath}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default blog;
export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
