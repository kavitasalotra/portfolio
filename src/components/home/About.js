import Image from 'next/image';
import React from 'react';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import HomeHeroWrapper from '../elements/HomeHeroWrapper';

const content = {
  image: '/images/about-image.jpg.webp',
  title: 'We Live For Passion',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n   eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo  \n   enim ipsam et dolore magnam aliquam quaerat voluptatem. \n Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  \n eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo \n  enim ipsam et dolore magnam aliquam quaerat voluptatem.',
};
const About = () => {
  return (
    <div>
      <HomeHeroWrapper pageTitle="About Us" pageName="About" />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image alt="Party" src={content.image} width={540} height={387} />
            </div>
            <div className="lg:py-24 space-y-6">
              <Heading textAlignLeft>{content.title}</Heading>
              <Paragraph
                textAlignLeft
                className="whitespace-pre-line leading-6">
                {content.description}
              </Paragraph>
              <Button hasTextDark className="py-2 px-4">
                contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
