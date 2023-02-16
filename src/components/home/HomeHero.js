import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
// import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const HomeHero = ({ item }) => {
  return (
    <div>
      <div class="relative py-14">
        <Image
          src={item.image}
          class="absolute inset-0 object-cover h-screen"
          height={800}
          width={1900}
          alt=""
        />
        <div
          class="relative flex h-[60vh] px-9"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="700"
          data-aos-easing="ease-in-out">
          <div class="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
            <div className=" md:max-w-full md:px-24 px-0">
              <div className="flex flex-col items-center justify-end xl:flex-row lg:py-24 ">
                <div className="w-full max-w-xl  mb-12  xl:pr-16 space-y-4 md:space-y-8 ">
                  <div className="border-r-primaryDark text-animate">
                    <Heading textExtraLarge>{item.title}</Heading>
                    <span className="text-primaryDark text-4xl font-bold">
                      {item.subTitle}
                    </span>
                  </div>
                  <Paragraph hasTextColorWhite textAlignLeft>
                    {item.description}
                  </Paragraph>
                  <div className="hover:bg-primaryDark">
                    <Button className="px-4 py-2">About Us</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
