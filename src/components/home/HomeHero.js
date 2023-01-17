import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
// import styled from 'styled-components';

const HomeHero = () => {
  return (
    <div className="container mx-auto lg:py-24">
      <div className="flex items-center md:px-16">
        <div className="px-4 sm:max-w-xl md:max-w-full md:px-24">
          <div className="flex flex-col items-center justify-end xl:flex-row lg:py-24 ">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 space-y-8">
              <Heading
                hasTextColorPrimaryDark
                textExtraLarge
                textAlignLeft
                hasFontExtrabold>
                Hello
                <span className="text-secondaryLight">I&apos;m Jackson</span>
              </Heading>
              <Paragraph hasTextColorWhite textAlignLeft>
                I photograph very instinctively. I see how it is taken like
                that. I do not follow certain styles, philosophies or teachers.
              </Paragraph>
              <Button className="px-3 py-2">Get a quote</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
