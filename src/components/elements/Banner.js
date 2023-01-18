import React from 'react';
import Heading from '../atoms/Heading';
import { AiOutlineHome } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';

const Banner = ({ pageTitle, pageName }) => {
  return (
    <div>
      <section className="relative bg-[url('/images/Homehero.jpg.webp')] bg-cover bg-left-top bg-no-repeat">
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex justify-center lg:min-h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center md:text-center ">
            <Heading className="text-white">{pageTitle}</Heading>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-base font-medium text-white hover:text-primaryDark">
                    <AiOutlineHome className="mr-1" /> Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <RiArrowRightSLine className="text-white w-6 h-5" />
                    <a
                      href="#"
                      className="ml-1 text-base font-normal text-primaryDark md:ml-2">
                      {pageName}
                    </a>
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

export default Banner;
