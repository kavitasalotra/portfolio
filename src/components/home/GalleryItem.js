import React from 'react';
import Image from 'next/image';
import Heading from '../atoms/Heading';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const GalleryItem = ({ item }) => {
  return (
    <div>
      <a className="group">
        <div className=" ">
          <Image
            alt=""
            src={item.image}
            height={450}
            width={412}
            className="object-cover opacity-75 transition-opacity group-hover:opacity-50 mx-auto "
          />
          <div className="relative py-3">
            <div className="-mt-64 ml-40 md:-mt-64 md:ml-40 md:pl-0.5">
              <div className="translate-y-8 transform opacity-0 transition-all mx-auto group-hover:translate-y-4 group-hover:opacity-100">
                <span className="flex ">
                  <TiSocialInstagram className="w-16 h-16 text-primaryDark" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-3 md:py-8 md:mb-8">
      <div className="space-y-2 md:space-y-4 py-2 md:py-4 text-center">
        <Heading className="pb-3 md:pb-6 hover:underline hover:underline-offset-2">
          Follow Instagram
        </Heading>
        <Link href="mailto:admin@rehgeorgia.com"  className="text-textGray text-sm hover:text-primaryDark">
            @kk_photographer
        </Link>
      </div>
      <div className="container mx-auto">
        <Slider {...settings}>
          {galleryImages.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
