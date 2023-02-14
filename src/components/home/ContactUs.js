import Link from 'next/link';
import React from 'react';
import HomeHeroWrapper from '../elements/HomeHeroWrapper';

const ContactUs = () => {
  return (
    <div>
      <HomeHeroWrapper pageTitle="Contact Us" pageName="Contact" />
      <div className="container mx-auto">
        <section className="md:my-16 my-6 px-6 ">
          <div className="flex flex-wrap justify-center">
            <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 md:w-full lg:w-3/12 px-3 lg:px-6">
              <h1 className="text-textDark text-xl md:text-5xl font-semibold md:tracking-wide">
                Let’s Work Together
              </h1>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
              <div className="flex flex-wrap md:justify-center">
                <div className="mb-12 grow-0 shrink-0 basis-auto px-3 lg:px-6 space-y-9">
                  <div className="flex items-start">
                    <div className="ml-6">
                      <p className="font-normal text-sm text-textGray mb-1">
                        Email
                      </p>
                      <Link href="mailto:admin@rehgeorgia.com">
                        <span className="text-textDark font-semibold">
                          sales@zeiq.co
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="ml-6">
                      <p className="font-normal text-sm text-textGray mb-1">
                        Call Us
                      </p>
                      <Link href="tel:+44-7747810130">
                        <span className="text-textDark font-semibold">
                          +44-7747810130
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div className="flex md:justify-center md:items-start">
                    <div className="ml-6">
                      <p className="font-normal text-sm text-textGray mb-1">
                        Visit Us
                      </p>
                      <p className="text-textDark font-semibold">
                        London, UK Punjab, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="container mx-auto body-font relative py-3 md:py-36">
        <div className="absolute inset-0 my-2 md:my-11 mx-2 md:mx-9">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97134.54867678047!2d75.47077556623!3d31.35393758269289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51bb415a9707%3A0xbbe5446476710bbe!2sZeiq!5e0!3m2!1sen!2sin!4v1676362592815!5m2!1sen!2sin"
            // width="600"
            // height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex"></div>
      </section>
    </div>
  );
};

export default ContactUs;
