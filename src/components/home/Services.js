import React from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import { FaVideo, FaEdit } from 'react-icons/fa';
import Title from '../atoms/Title';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

const services = [
  {
    id: 1,
    icon: (
      <MdPhotoCamera class="w-20 h-20 group-hover:text-primaryDark/70 text-white" />
    ),
    title: 'Photography',
    description:
      ' Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? unde atque mollitia!',
  },
  {
    id: 2,
    icon: (
      <FaVideo class="w-20 h-20  group-hover:text-primaryDark/70 text-white" />
    ),
    title: 'Video',
    description:
      ' Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? unde atque mollitia!',
  },
  {
    id: 3,
    icon: (
      <FaEdit class="w-20 h-20 group-hover:text-primaryDark/70 text-white" />
    ),
    title: 'Editing',
    description:
      ' Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? unde atque mollitia!',
  },
];

const ServiceItem = ({ item }) => {
  return (
    <div className="group transition-transform duration-700 hover:scale-105 px-7 md:px-2">
      <div class=" bg-primaryDark/70 group-hover:bg-white border-4 border-transparent  group-hover:border-4 group-hover:border-primaryDark/70 flex flex-col items-center p-6 space-y-8 rounded-lg lg:p-8">
        {item.icon}
        <Title className="group-hover:text-black text-white">
          {item.title}
        </Title>
        <div class="text-lg italic font-medium text-center group-hover:text-black text-white">
          {item.description}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section class="container mx-auto my-11 md:my-16">
      <div className="space-y-4 text-center">
        <Heading>Our services</Heading>
        <Paragraph>
          We’re Gleam, a destination photo agency based in New York. Check our
          amazing services.
        </Paragraph>
      </div>
      <div className="flex flex-wrap md:flex-wrap justify-center lg:flex-nowrap gap-6 pt-4 md:pt-10">
        {services.map((el) => (
          <ServiceItem key={el.id} item={el} />
        ))}
      </div>
    </section>
  );
};

export default Services;
