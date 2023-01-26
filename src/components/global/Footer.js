import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from 'react-icons/ti';
import { FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto">
        <div className=" flex flex-col p-4 justify-evenly md:items-center mx-auto lg:flex-row md:space-y-0 md:pb-8 space-y-6">
          <span>
            Copyright ©2023 All rights reserved | This template is made with ♡
            by
            <Link href="https://www.zeiq.co/">
              <strong className="text-primaryDark pl-2">zeiq.co</strong>
            </Link>
          </span>
          <Image
            src="/images/logoBlack.png.webp"
            width={82}
            height={21}
            alt="logo"
            className="object-contain"
          />
          <div className="flex flex-col pt-6 lg:pt-0">
            <div className="flex justify-center space-x-6">
              <a href="#" title="Instagram">
                <TiSocialFacebook className="w-6 h-6" />
              </a>
              <a href="#" title="Pinterest">
                <TiSocialTwitter className="w-6 h-6" />
              </a>
              <a href="#" title="Twitter">
                <TiSocialLinkedin className="w-6 h-6" />
              </a>
              <a href="#" title="Facebook">
                <FaPinterestP className="w-4 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
