import React from 'react';
import Link from 'next/link';
import Badge from '../elements/Badge';
import Title from '../atoms/Title';
import Image from 'next/image';

const Blog = ({ item, filePath }) => {
  return (
    <div
      className={`group relative  overflow-hidden md:max-h-[450px]  ${
        item.isLarge && 'md:col-span-2'
      }`}>
      <Image
        src={item.image}
        alt="postItem"
        width={700}
        height={400}
        className=" z-20 transition ease-in-out delay-150  group-hover:-translate-y-1 group-hover:scale-110 group-hover:origin-bottom  duration-500 .."
      />
      <div className="p-4 absolute top-0 left-0 right-0 bottom-0 z-10 ">
        <Link href={`/post/${filePath.replace(/\.mdx?$/, '')}`}>
          <div className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-48 md:h-96">
            <div className="absolute top-0 left-0 right-0 flex items-center justify-end mx-5 mt-3">
              <div>
                <Badge>{item.category}</Badge>
              </div>
            </div>
            <div class="z-10 p-5 md:space-y-3">
              <div className="text-sm text-white font-normal">
                <span>{item.date}</span>
                <span className="px-1 md:px-3">∣</span>
                <span className="text-sm text-white">3 comment</span>
              </div>
              <Title
                hasTextColorWhite
                textAlignLeft
                className="font-medium hover:text-primaryDark">
                {item.title}
              </Title>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
