import React from 'react';
import Link from 'next/link';
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
    <div className="relative h-full">
      <Image
        src={item.image}
        class="object-cover -z-10 h-[70vh]"
        height={800}
        width={1900}
        alt=""
      />
      <div
        class="h-full absolute top-0 left-0 right-0 bottom-0 z-50 flex px-9"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in-out">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-center  xl:flex-row">
          <div className="md:px-32 px-6 my-24 lg:my-32">
            <div className="space-y-6 md:space-y-10">
              <div className="">
                <Heading textExtraLarge>{item.title}</Heading>
                <span className="text-primaryDark md:text-6xl text-4xl font-bold">
                  {item.subTitle}
                </span>
              </div>
              <Paragraph hasTextColorWhite textAlignLeft>
                {item.description}
              </Paragraph>
              <div>
                <Link href="/about">
                  <Button className="px-4 py-2">About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default HomeHero;
