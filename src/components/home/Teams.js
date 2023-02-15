import React from 'react';
import Image from 'next/image';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from 'react-icons/ti';
import { FaPinterestP } from 'react-icons/fa';
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
    <section>
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <Heading>Our team</Heading>
        <Paragraph>
          We’re Gleam, a destination photo agency based in New York. Check our
          amazing team.
        </Paragraph>
        <div className="flex flex-wrap flex-row md:space-x-14 justify-center">
          {data.map((item) => (
            <div key={item.id} className="group">
              <div className="flex py-6 rounded-lg group-hover:bg-primaryDark  group-hover:transition group-hover:ease-in-out delay-100 group-hover:-translate-y-1 group-hover:rotate-2  group-hover:scale-110 group-hover:duration-500  md:py-9 md:px-14 px-8 flex-col justify-center my-3 md:my-8 md:space-y-4 text-center shadow-[0_4px_20px_10px_rgba(87,87,87,0.1)]">
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
                  <span className="text-primaryDark group-hover:text-white ">
                    PHOTOGRAPHER
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
