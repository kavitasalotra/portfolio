import React from 'react';
import Banner from '../elements/Banner';
import Badge from '../elements/Badge';
import Title from '../atoms/Title';

const PostItem = () => {
  return (
    <div>
      <Banner pageTitle="Latest Blog" pageName="blog" />
      <div class="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
        <div class="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          <div class="relative flex items-end justify-start w-full text-left bg-[url('/images/post-image-6.jpg.webp')] bg-center bg-cover h-96 dark:bg-gray-500">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-end mx-5 mt-3">
              <div class="flex flex-col justify-end text-center ">
                <Badge>PHOTOGRAPHY</Badge>
              </div>
            </div>
            <div class="z-10 p-5 md:space-y-3">
              <div className="text-sm text-white font-normal">
                <date>May 19,2019</date>
                <icon className="px-1 md:px-3 ">∣</icon>
                <span className="text-sm text-white">3 comment</span>
              </div>
              <Title
                hasTextColorWhite
                textAlignLeft
                className="font-medium hover:text-primaryDark">
                The Female Body Shape Men Find Most Attractive
              </Title>
            </div>
          </div>
          <div class="relative flex items-end justify-start w-full text-left bg-[url('/images/post-image-6.jpg.webp')] bg-center bg-cover h-96 dark:bg-gray-500">
            <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
            <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                class="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined">
                Health
              </a>
              <div class="flex flex-col justify-start text-center dark:text-gray-100">
                <span class="text-3xl font-semibold leading-none tracking-wide">
                  01
                </span>
                <span class="leading-none uppercase">Aug</span>
              </div>
            </div>
            <h2 class="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                class="font-medium text-md hover:underline dark:text-gray-100">
                Inventore reiciendis aliquam excepturi
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
