import React from 'react';
import Heading from '../atoms/Heading';
import { FiFilm, FiCamera } from 'react-icons/fi';
import { RiEditLine } from 'react-icons/ri';
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';

const features = [
  {
    id: 1,
    icon: <FiFilm className="text-white w-7 h-7" />,
    title: 'High Quality Images',
    description:
      'Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te',
  },
  {
    id: 2,
    icon: <RiEditLine className="text-white w-7 h-7 " />,
    title: 'Abundant Experience',
    description:
      'Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te',
  },
  {
    id: 3,
    icon: <FiCamera className="text-white w-7 h-7" />,
    title: 'Modern Equipments',
    description:
      'Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te',
  },
];

const FeaturedItem = ({ item }) => {
  return (
    <div>
      <div className="relative bg-white">
        <div class="absolute left-32 -top-14 w-20 h-20 bg-primaryDark hover:bg-black rounded-full flex justify-center items-center text-center p-5">
          {item.icon}
        </div>
        <blockquote class="flex flex-col justify-between rounded-lg py-12 text-center px-6 space-y-4">
          <Title>{item.title}</Title>
          <Paragraph hasTextSmall className="leading-6">
            {item.description}
          </Paragraph>
        </blockquote>
      </div>
    </div>
  );
};

const Features = () => (
  <section class="bg-backgroundGray">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-xl text-center py-4">
        <Heading>Why Choose Us</Heading>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
        {features.map((item) => (
          <FeaturedItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
