import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
// import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const HomeHero = () => {
  return (
    <div>
      <div className="container mx-auto py-24 lg:py-24" data-aos="flip-left">
        <div className="flex items-center md:px-16">
          <div className="sm:max-w-xl md:max-w-full md:px-24 px-16">
            <div className="flex flex-col items-center justify-end xl:flex-row lg:py-24 ">
              <div className="w-full max-w-xl  mb-12  xl:pr-16 space-y-4 md:space-y-8">
                <div className="border-r-primaryDark text-animate">
                  Hello
                  <Heading textExtraLarge>I&apos;m Jackson</Heading>
                  {/* <span className="text-secondaryLight text-3xl pl-2 md:pl-6 ">
                    I&apos;m Jackson
                  </span> */}
                </div>
                <Paragraph hasTextColorWhite textAlignLeft>
                  I photograph very instinctively. I see how it is taken like
                  that. I do not follow certain styles, philosophies or
                  teachers.
                </Paragraph>
                <Button className="px-3 py-2">Get a quote</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
