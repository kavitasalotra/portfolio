import React from 'react';
import Image from 'next/image';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import Title from '../atoms/Title';

const data = [
  {
    id: 1,
    image: '/images/team-image-1.jpg.webp',
    teamMemberName: 'Andrew Dean',
  },
  {
    id: 2,
    image: '/images/team-image-2.jpg.webp',
    teamMemberName: 'Andrew Dean',
  },
  {
    id: 3,
    image: '/images/team-image-3.jpg.webp',
    teamMemberName: 'Andrew Dean',
  },
  {
    id: 4,
    image: '/images/team-image-4.jpg.webp',
    teamMemberName: 'Andrew Dean',
  },
];

const Teams = () => {
  return (
    <section className="container mx-auto mb-11 md:mb-16 space-y-11">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Heading>Our team</Heading>
        <Paragraph>
          We’re Gleam, a destination photo agency based in New York. Check our
          amazing team.
        </Paragraph>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-14">
        {data.map((item) => (
          <div key={item.id} className="group px-11 md:px-3">
            <div className="flex py-8 md:py-11 rounded-lg group-hover:bg-primaryDark group-hover:transition group-hover:ease-in-out delay-100 group-hover:-translate-y-1 group-hover:rotate-2  group-hover:scale-110 group-hover:duration-500  md:px-6 px-8 flex-col justify-center md:space-y-4 text-center shadow-[0_4px_20px_10px_rgba(87,87,87,0.1)]">
              <Image
                alt="team-image"
                className="self-center flex-shrink-0 mb-4 bg-center bg-cover rounded-full"
                src={item.image}
                width={165}
                height={165}
              />
              <div>
                <Title className="group-hover:text-white ">
                  {item.teamMemberName}
                </Title>
                <span className="text-primaryDark group-hover:text-white">
                  PHOTOGRAPHER
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
