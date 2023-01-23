import React, { useState } from 'react';
import Image from 'next/image';

const images = [
  {
    id: 1,

    image: '/images/gallery-3.webp',
    category: 'All',
  },
  {
    id: 2,
    image: '/images/gallery-2.jpg.webp',
    category: 'Human',
  },
  {
    id: 3,
    image: '/images/gallery-3.webp',
    category: 'Nature',
  },
  {
    id: 4,
    image: '/images/gallery-2.jpg.webp',
    category: 'Country',
  },
  {
    id: 5,
    image: '/images/gallery-4.webp',
    category: 'Human',
  },
  {
    id: 6,
    image: '/images/gallery-5.webp',
    category: 'Human',
  },
  {
    id: 7,
    image: '/images/gallery-4.webp',
    category: 'Nature',
  },
  {
    id: 8,
    image: '/images/gallery-8.jpg.webp',
    category: 'Country',
  },
  {
    id: 9,
    image: '/images/gallery-1.jpg.webp',
    category: 'Human',
  },
  {
    id: 10,
    image: '/images/gallery-9.jpg.webp',
    category: 'Nature',
  },
  {
    id: 11,
    image: '/images/about-image.jpg.webp',
    category: 'Country',
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
      <div className="my-2 md:my-6 py-2 md:py-3">
        <div className="flex flex-col items-center justify-centers">
          <ul className="hidden font-semibold text-xl text-center sm:flex ">
            <li className="w-full">
              <button
                className="inline-block p-4 w-full text-textPrimaryDark active hover:underline hover:decoration-primaryDark"
                aria-current="page"
                onClick={() => setImageList(images)}>
                All
              </button>
            </li>
            <li className="w-full">
              <button
                className="inline-block p-4 w-full text-textPrimaryDark active hover:underline hover:decoration-primaryDark"
                onClick={() => filterItem('Human')}>
                Human
              </button>
            </li>
            <li className="w-full">
              <button
                className="inline-block p-4 w-full text-textPrimaryDark active hover:underline hover:decoration-primaryDark"
                onClick={() => filterItem('Nature')}>
                Nature
              </button>
            </li>
            <li className="w-full">
              <button
                className="inline-block p-4 w-full text-textPrimaryDark active hover:underline hover:decoration-primaryDark"
                aria-current="page"
                onClick={() => filterItem('Country')}>
                Country
              </button>
            </li>
          </ul>
          {active && (
            <div className="text-center lg:py-14 ">
              <div className="grid gap-3 lg:gap-8 md:grid-cols-4">
                {imageList.map((item) => (
                  <div key={item.id}>
                    <Image
                      alt=""
                      height={198}
                      width={349}
                      src={item.image}
                      className="object-contain"
                    />
                  </div>
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
