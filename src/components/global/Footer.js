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
      <footer className="">
        <div className="container flex flex-col p-4 justify-evenly mx-auto lg:flex-row divide-gray-400">
          <span>
            Copyright ©2023 All rights reserved | This template is made with ♡
            by{' '}
            <Link href="/">
              <strong className="text-primaryDark">Colorlib</strong>
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
              <a rel="noopener noreferrer" href="#" title="Instagram">
                <TiSocialFacebook className="w-6 h-6" />
              </a>
              <a rel="noopener noreferrer" href="#" title="Pinterest">
                <TiSocialTwitter className="w-6 h-6" />
              </a>
              <a rel="noopener noreferrer" href="#" title="Twitter">
                <TiSocialLinkedin className="w-6 h-6" />
              </a>
              <a rel="noopener noreferrer" href="#" title="Facebook">
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
