import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const navbarMenu = [
  { navItem: 'Home', navLink: '/' },
  { navItem: 'About', navLink: '/about' },
  { navItem: 'Blog', navLink: '/blog' },
  { navItem: 'Contact', navLink: '/contact' },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="">
      <div className="bg-black/20 z-20">
        <div className="container mx-auto">
          <nav className="py-4 md:py-0 px-0 md:px-16">
            <div className="flex items-center justify-around">
              <Link href="/">
                <div className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={90}
                    height={35}
                    className="object-cover pr-1"
                  />
                  <span className="uppercase text-white text-sm mt-3">
                    photography
                  </span>
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
                      className="h-10 w-12 md:w-24 text-white"
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
                    {navbarMenu.map((item) => (
                      <Link href={item.navLink} key={item.id}>
                        <span
                          className="p-2 text-white rounded-md text-base font-medium hover:text-primaryDark transition duration-1000 ease-in-out"
                          aria-current="page">
                          {item.navItem}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {active && (
            <div className="sm:hidden flex flex-col space-y-2 text-center bg-primaryDark/30 px-2 pt-6 mx-2 ">
              {navbarMenu.map((item) => (
                <Link href={item.navLink} key={item.id}>
                  <span
                    className="text-white px-5 py-2 rounded-md text-base font-medium hover:text-primaryDark transition duration-1000 ease-in-out"
                    aria-current="page">
                    {item.navItem}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
