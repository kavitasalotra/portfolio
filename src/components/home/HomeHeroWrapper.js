import React from 'react';
import Heading from '../atoms/Heading';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';

const HomeHeroWrapper = ({ pageTitle, pageName, pageLink }) => {
  return (
    <div className="z-10-mt-[4.4rem]">
      <section className="  bg-[url('/images/Home-hero-image.jpg')] bg-cover bg-left-top md:h-[60vh] bg-no-repeat">
        <div className=" mx-auto max-w-screen-xl px-4 py-32 sm:px-6 md:text-amber-300 flex justify-center  md:h-[60vh] lg:items-center lg:px-8">
          <div className="max-w-xl text-center md:text-center ">
            <Heading className="text-primaryDark">{pageTitle}</Heading>
            <nav className="flex justify-center" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1">
                <li className="inline-flex items-center">
                  <Link href="/">
                    <span className="inline-flex items-center text-base font-medium  text-primaryDark">
                      <AiOutlineHome className="mr-1" /> Home
                    </span>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <RiArrowRightSLine className=" text-primaryDark w-6 h-5" />
                    <Link
                      href={`${pageLink}`}
                      className="ml-1 text-base font-normal text-primaryDark md:ml-2">
                      {pageName}
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHeroWrapper;
