import React from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import { FaVideo, FaEdit } from 'react-icons/fa';
import Title from '../atoms/Title';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

const services = [
  {
    id: 1,
    icon: <MdPhotoCamera class="w-20 h-20 group-hover:text-white" />,
    title: 'Photography',
    description:
      ' Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? unde atque mollitia!',
  },
  {
    id: 2,
    icon: <FaVideo class="w-20 h-20 group-hover:text-white" />,
    title: 'Video',
    description:
      ' Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? unde atque mollitia!',
  },
  {
    id: 3,
    icon: <FaEdit class="w-20 h-20 group-hover:text-white" />,
    title: 'Editing',
    description:
      ' Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? unde atque mollitia!',
  },
];

const ServiceItem = ({ item }) => {
  return (
    <div className="group transition-transform duration-300 transform hover:scale-105 ">
      <div class=" bg-backgroundLite group-hover:bg-primaryDark/80 flex flex-col items-center w-full p-6 space-y-8 rounded-lg lg:h-full lg:p-8 ">
        {item.icon}
        <Title className="group-hover:text-white">{item.title}</Title>
        <blockquote class="max-w-lg text-lg italic font-medium text-center group-hover:text-white">
          {item.description}
        </blockquote>
        <div class="text-center group-hover:text-white">
          <p>Leroy Jenkins</p>
          <p>CEO of Company Co.</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="my-3 md:my-11">
      <section class="p-6">
        <div class="container mx-auto">
          <div className="space-y-8 text-center">
            <Heading>Our services</Heading>
            <Paragraph>
              We’re Gleam, a destination photo agency based in New York. Check
              our amazing services.
            </Paragraph>
          </div>
          <div className="flex gap-6 py-4 md:py-10">
            {services.map((el) => (
              <ServiceItem key={el.id} item={el} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
