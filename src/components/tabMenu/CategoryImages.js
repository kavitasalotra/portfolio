import React, { useState } from 'react';
import Image from 'next/image';
import Title from '../atoms/Title';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const images = [
  {
    id: 1,

    image: '/images/gallery-1.jpg',
    category: 'Nature',
    title: 'Find Your Peace in Nature',
  },
  {
    id: 2,
    image: '/images/gallery-2.jpg',
    category: 'Human',
    title: 'Live life to the fullest!',
  },
  {
    id: 3,
    image: '/images/gallery-3.jpg',
    category: 'Human',
    title: 'Be the best you can be!',
  },
  {
    id: 4,
    image: '/images/gallery-4.jpg',
    category: 'Nature',
    title: "Take a Moment to Reflect on Nature's Beauty",
  },
  {
    id: 5,
    image: '/images/gallery-5.jpg',
    category: 'Nature',
    title: 'Unplug & Connect with Nature ',
  },
  {
    id: 6,
    image: '/images/gallery-6.jpg',
    category: 'Human',
    title: 'Make every day count!',
  },
  {
    id: 7,
    image: '/images/gallery-7.jpg',
    category: 'Country',
    title: 'Embrace the beauty of the countryside',
  },
  {
    id: 8,
    image: '/images/gallery-8.jpg',
    category: 'Country',
    title: 'Be inspired by the sights of the countryside.',
  },
  {
    id: 9,
    image: '/images/gallery-9.jpg',
    category: 'Country',
    title: 'Explore the wonders of the countryside.',
  },
  {
    id: 10,
    image: '/images/gallery-10.jpg',
    category: 'Country',
    title: 'Nature Is beauty awaits in the countryside.',
  },

  {
    id: 11,
    image: '/images/gallery-11.jpg',
    category: 'Human',
    title: 'Life is what you make it!',
  },
  {
    id: 12,
    image: '/images/gallery-4.jpg',
    category: 'Nature',
    title: 'Nature is Timeless Beauty',
  },
];

export const CategoryImages = () => {
  const [active, setActive] = useState('all');
  const [imageList, setImageList] = useState(images);

  const filterItem = (cateItem) => {
    const updateItems = images?.filter((curEle) => {
      return curEle.category === cateItem;
    });
    setImageList(updateItems);
    setActive(updateItems);
  };
  // console.log(filterItem, 'filterItem');
  return (
    <section className="container mx-auto">
      <div className="my-2 md:my-6 py-2 md:py-3 px-4 md:px-0">
        <div className="flex flex-col items-center justify-center">
          <ul className="font-semibold text-lg md:text-xl text-center flex py-4">
            <li className="w-full">
              <button
                className="inline-block  p-2 md:p-4 w-full text-textPrimaryDark  hover:underline hover:decoration-primaryDark  hover:text-primaryDark transition duration-1000 ease-in-out"
                aria-current="page"
                onClick={() => setImageList(images)}>
                All
              </button>
            </li>
            <li className="w-full">
              <button
                className="inline-block p-2 md:p-4 w-full text-textPrimaryDark hover:underline hover:decoration-primaryDark  hover:text-primaryDark transition duration-1000 ease-in-out"
                onClick={() => filterItem('Human')}>
                Human
              </button>
            </li>
            <li className="w-full">
              <button
                className="inline-block p-2 md:p-4 w-full text-textPrimaryDark  hover:underline hover:decoration-primaryDark  hover:text-primaryDark transition duration-1000 ease-in-out"
                onClick={() => filterItem('Nature')}>
                Nature
              </button>
            </li>
            <li className="w-full">
              <button
                className="inline-block p-2 md:p-4  w-full text-textPrimaryDark  hover:underline hover:decoration-primaryDark hover:text-primaryDark transition duration-1000 ease-in-out"
                aria-current="page"
                onClick={() => filterItem('Country')}>
                Country
              </button>
            </li>
          </ul>
          {active && (
            <div className="text-center lg:pt-6">
              <div className="grid gap-3 justify-center lg:gap-8 md:grid-cols-4">
                {imageList.map((item) => (
                  <>
                    <a href="#" className="group relative">
                      <div key={item.id}>
                        <Image
                          alt=""
                          height={198}
                          width={349}
                          src={item.image}
                          data-aos="flip-left"
                          data-aos-offset="200"
                          data-aos-delay="50"
                          data-aos-duration="1000"
                          data-aos-easing="ease-in-out"
                          className="object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                      </div>
                      <div className="relative p-3">
                        <div className="-mt-36">
                          <div className="translate-y-8 transform opacity-0 group-hover:ease-in-out transition-all group-hover:duration-700 group-hover:translate-y-4 group-hover:opacity-100">
                            <div className="flex justify-center">
                              <figcaption class="absolute bottom-0 z-90 w-3/4 bg-black/40 px-5 py-2 ">
                                <span class="text-2xl text-white pr-3">→</span>
                                <Title className=" text-white">
                                  {item.title}
                                </Title>
                              </figcaption>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryImages;
