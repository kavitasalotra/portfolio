import React from 'react';
import Image from 'next/image';
import Heading from '../atoms/Heading';
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
    <div>
      <section className="py-6">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <Heading>Our team</Heading>
        </div>
        <div className="flex flex-wrap md:space-x-14 justify-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex p-4 md:py-9 md:px-8 flex-col justify-center my-3 md:my-8 md:space-y-4 text-center shadow-[0_4px_20px_10px_rgba(87,87,87,0.1)]">
              <Image
                alt="team-image"
                className="self-center flex-shrink-0 mb-4 bg-center bg-cover rounded-full"
                src={item.image}
                width={165}
                height={165}
              />
              <div>
                <Title>{item.teamMemberName}</Title>
                <span className="text-primaryDark">PHOTOGRAPHER</span>
              </div>
              <div className="flex justify-center space-x-1 md:space-x-2">
                <a href="#" title="Instagram">
                  <TiSocialFacebook className="w-6 h-6" />
                </a>
                <a href="#" title="Pinterest">
                  <TiSocialTwitter className="w-6 h-6" />
                </a>
                <a href="#" title="Twitter">
                  <TiSocialLinkedin className="w-6 h-6" />
                </a>
                <a href="#" title="Facebook">
                  <FaPinterestP className="w-4 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teams;
