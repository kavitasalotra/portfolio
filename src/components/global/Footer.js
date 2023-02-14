import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from 'react-icons/ti';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto">
        <div className="flex flex-col p-4 justify-evenly md:items-center mx-auto lg:flex-row md:space-y-0 md:pb-8 space-y-6">
          <span>
            Copyright ©2023 All rights reserved | This template is made by
            <Link href="https://www.zeiq.co/">
              <strong className="text-primaryDark pl-2">zeiq.co</strong>
            </Link>
          </span>
          <Image
            src="/images/logo.png"
            width={82}
            height={21}
            alt="logo"
            className="object-contain"
          />
          <div className="flex flex-col pt-6 lg:pt-0">
            <div className="flex justify-center space-x-6">
              <a href="https://twitter.com/Zeiqofficial">
                <TiSocialTwitter className="w-8 h-7 hover:text-primaryDark hover:transition duration-700 ease-in-out transform hover:translate-x-1 hover:scale-125" />
              </a>
              <a href="https://www.instagram.com/zeiqofficial/">
                <AiOutlineInstagram className="w-8 h-7 hover:text-primaryDark hover:transition duration-700 ease-in-out transform hover:translate-x-1 hover:scale-125" />
              </a>

              <a href="https://www.facebook.com/zeiq.co/" title="facebook">
                <TiSocialFacebook className="w-8 h-7 hover:text-primaryDark hover:transition duration-700 ease-in-out transform hover:translate-x-1 hover:scale-125" />
              </a>

              <a href="https://www.linkedin.com/company/zeiqofficial" title="">
                <TiSocialLinkedin className="w-8 h-7 hover:text-primaryDark hover:transition duration-700 ease-in-out transform hover:translate-x-1 hover:scale-125" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
