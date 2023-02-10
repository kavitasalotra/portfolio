import React from 'react';
import Image from 'next/image';
import Heading from '../atoms/Heading';
import Link from 'next/link';

import { TiSocialInstagram } from 'react-icons/ti';

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
];

const GalleryItem = () => {
  return (
    <div className="py-3 md:py-8">
      <div className="space-y-2 md:space-y-4 py-2 md:py-4 text-center">
        <Heading className="pb-3 md:pb-6 hover:underline hover:underline-offset-2">
          Follow Instagram
        </Heading>
        <Link href="mailto:admin@rehgeorgia.com">
          <span className="text-textGray text-sm hover:text-primaryDark">
            @Alime_photographer
          </span>
        </Link>
      </div>
      <div className="flex-wrap flex md:flex-nowrap justify-center">
        {galleryImages &&
          galleryImages.map((item) => (
            <>
              <a href="#" className="group relative">
                <div key={item.id} className="hover:bg-primaryDark/40 ">
                  <Image
                    alt=""
                    src={item.image}
                    height={350}
                    width={312}
                    className="object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />
                </div>
                <div className="relative p-6">
                  <div className="-mt-56">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-4 group-hover:opacity-100">
                      <span className="flex justify-center">
                        <TiSocialInstagram className="w-16 h-16 text-primaryDark" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </>
          ))}
      </div>
    </div>
  );
};
export default GalleryItem;
