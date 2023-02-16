import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import HomeHeroWrapper from './HomeHeroWrapper';

const content = {
  image: '/images/about-image.jpg',
  title: 'We Live For Passion',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do \n   eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo  \n   enim ipsam et dolore magnam aliquam quaerat voluptatem. \n Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  \n eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo \n  enim ipsam et dolore magnam aliquam quaerat voluptatem.',
};
const About = () => {
  return (
    <div>
      <HomeHeroWrapper
        pageTitle="About Us"
        pageName="About"
        pageLink="/about"
      />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden">
              <Image alt="Party" src={content.image} width={540} height={387} />
            </div>
            <div className="lg:py-24 space-y-8">
              <Heading textAlignLeft>{content.title}</Heading>
              <Paragraph
                textAlignLeft
                className="whitespace-pre-line leading-6">
                {content.description}
              </Paragraph>
              <div>
                <Link href="/contact">
                  <Button hasTextDark className="py-3 px-6">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
