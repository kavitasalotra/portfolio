import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="">
      <div className="bg-backgroundLite fixed z-10 top-0 left-0 right-0">
        <div className="container mx-auto">
          <nav className="py-4 md:py-8 px-6 md:px-16">
            <div className="flex items-center space-x-4 justify-around">
              <Link href="/">
                <div className="block">
                  <Image
                    src="/images/logo.png.webp"
                    alt="logo"
                    width={82}
                    height={39}
                  />
                </div>
              </Link>
              <div className="flex items-center sm:hidden">
                <button
                  onClick={() => setActive(!active)}
                  type="button"
                  className="inline-flex items-center justify-center rounded-md ml-28 "
                  aria-controls="mobile-menu"
                  aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  {active ? (
                    <AiOutlineClose
                      className="h-10 w-12 md:w-24 stroke-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <GiHamburgerMenu
                      className="h-8 w-12 md:w-24 text-white"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
              <div className="flex font-poppins items-center justify-end sm:items-stretch sm:justify-center">
                <div className="hidden sm:block">
                  <div className="flex space-x-8">
                    <Link href="/">
                      <span
                        className="p-2 text-white rounded-md text-base font-medium hover:text-primaryDark hover-underline-primaryLight"
                        aria-current="page">
                        Home
                      </span>
                    </Link>
                    <Link href="/about">
                      <span className="p-2 text-white rounded-md text-base font-medium hover:text-primaryDark hover-underline-primaryLight">
                        About
                      </span>
                    </Link>
                    <Link href="/blog">
                      <span className="p-2 text-white rounded-md text-base font-medium hover:text-primaryDark hover-underline-primaryLight">
                        Blog
                      </span>
                    </Link>
                    <Link href="/contact">
                      <span className="p-2 text-white rounded-md text-base font-medium hover:text-primaryDark hover-underline-primaryLight">
                        Contact
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {active && (
            <div className="sm:hidden flex flex-col space-y-2 text-center bg-white px-2 pt-6 mx-2">
              <Link href="/">
                <span
                  className="text-textDark px-5 py-2 rounded-md text-base font-medium"
                  aria-current="page">
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className="text-textDark px-5 py-2 rounded-md text-base font-medium">
                  About
                </span>
              </Link>
              <Link href="/blog">
                <span className="text-textDark px-5 py-2 rounded-md text-base font-medium">
                  Blog
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-textDark px-5 py-2 rounded-md text-base font-medium">
                  Contact
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
