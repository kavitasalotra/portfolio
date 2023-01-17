import React from 'react';
import Image from 'next/image';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

const image = [
  {
    id: 1,
    image: '/images/gallery-6.webp',
  },
  {
    id: 2,
    image: '/images/gallery-5.webp',
  },
  {
    id: 3,
    image: '/images/gallery-3.webp',
  },
  {
    id: 4,
    image: '/images/gallery-1.jpg.webp',
  },
  {
    id: 5,
    image: '/images/gallery-2.jpg.webp',
  },
  {
    id: 6,
    image: '/images/gallery-4.webp',
  },
  // {
  //   id: 7,
  //   image: '/images/gallery-7.jpg.webp',
  //   width: '301',
  //   height: '324',
  // },
  // {
  //   id: 8,
  //   image: '/images/gallery-8.jpg.webp',
  //   width: '301',
  //   height: '324',
  // },
];

const GalleryItem = () => {
  return (
    <div className="py-3 md:py-8">
      <div className="space-y-4">
        <Heading>Follow Instagram</Heading>
        <Paragraph>@Alime_photographer</Paragraph>
      </div>
      <div className="flex">
        {image &&
          image.map((item) => (
            <div className="" key={item.id}>
              <Image
                src={item.image}
                height={250}
                width={312}
                alt="galleryImage"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryItem;
