import React, { useRef, useState } from 'react';
// import Heading from './atoms/Heading';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import HomeHero from './HomeHero';
const data = [
  {
    id: 1,
    image: '/images/Home-hero-image.jpg',
    title: 'Hello I am',
    subTitle: 'jackson passionate photographer ',
    description:
      'Cum et labore appareat, te est nostrum eligendi adipisci. Tota quas habeo eu vel. Vel autem apeirian primis.',
  },
  {
    id: 2,
    image: '/images/gallery_img_11.jpg',
    title: 'Creative',
    subTitle: ' Photography Studio',
    description:
      'Cum et labore appareat, te est nostrum eligendi adipisci. Tota quas habeo eu vel. Vel autem apeirian primis.',
  },
  {
    id: 3,
    image: '/images/gallery_img_3.jpg',
    title: 'Creative',
    subTitle: ' Photography View',
    description:
      'Cum et labore appareat, te est nostrum eligendi adipisci. Tota quas habeo eu vel. Vel autem apeirian primis.',
  },
];

const HomeSlider = () => {
  const [number, setNumber] = useState(0);
  console.log(number, 'number');
  const sliderRef = useRef();
  const goNext = () => {
    sliderRef?.current?.slickNext();
  };
  const goPrev = () => {
    sliderRef?.current?.slickPrev();
  };
  const beforeChange = (prev, next) => {
    setNumber(Math.floor(next));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="relative">
      <Slider {...settings} ref={sliderRef}>
        {data.map((item) => (
          <HomeHero key={item.id} item={item} />
        ))}
      </Slider>
      <div className="flex md:px-11 md:mx-0 md:flex justify-between md:absolute inset-0 items-center md:justify-between">
        <div className="group">
          <button
            className="p-2.5  bg-white group-hover:bg-primaryDark rounded-full group-hover:transition group-hover:ease-in-out delay-100 group-hover:-translate-y-1 group-hover:rotate-2  group-hover:scale-110 group-hover:duration-500"
            onClick={goPrev}
            type="button">
            <AiOutlineLeft className="text-primaryDark/80 group-hover:text-white  h-7 w-8" />
          </button>
        </div>
        <div className="group">
          <button
            className="p-2.5 rounded-full  group-hover:bg-primaryDark bg-white group-hover:transition group-hover:ease-in-out delay-100 group-hover:-translate-y-1 group-hover:rotate-2  group-hover:scale-110 group-hover:duration-500"
            onClick={goNext}
            type="button">
            <AiOutlineRight className="text-primaryDark/80  group-hover:text-white h-7 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomeSlider;
