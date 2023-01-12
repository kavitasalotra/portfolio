import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Heading from '../atoms/Heading';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url('/images/Homehero.jpg.webp');
  background-repeat: no-repeat;
  background-size: cover;
`;

const HomeHero = () => {
  return (
    <Wrapper className="bg-center-top">
      <div className="min-h-screen">
        <div className="relative">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <Heading
                  hasTextColorPrimaryDark
                  textExtraLarge
                  textAlignLeft
                  hasFontExtrabold>
                  Hello
                  <span className="text-secondaryLight">I&apos;m Jackson</span>
                </Heading>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                <Link
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeHero;
