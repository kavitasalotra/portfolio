import React from 'react';
import Image from 'next/image';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';

const galleryImages = [
  {
    id: 1,
    image: '/images/instagram-image1.jpg.webp',
  },
  {
    id: 2,
    image: '/images/instagram-image2.jpg.webp',
  },
  {
    id: 3,
    image: '/images/instagram-image3.jpg.webp',
  },
  {
    id: 4,
    image: '/images/instagram-image4.jpg.webp',
  },
  {
    id: 5,
    image: '/images/instagram-image5.jpg.webp',
  },
  {
    id: 6,
    image: '/images/instagram-image6.jpg.webp',
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
      <div className="space-y-2 md:space-y-4 py-2 md:py-4">
        <Heading>Follow Instagram</Heading>
        <Paragraph>@Alime_photographer</Paragraph>
      </div>
      <div className="flex-wrap flex justify-center">
        {galleryImages &&
          galleryImages.map((item) => (
            <div className="" key={item.id}>
              <Image
                src={item.image}
                height={250}
                width={312}
                alt="galleryImage"
                className="object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryItem;
