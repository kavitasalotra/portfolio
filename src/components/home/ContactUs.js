import React from 'react';
import Banner from '../elements/Banner';

const ContactUs = () => {
  return (
    <div>
      <Banner pageTitle="Contact Us" pageName="Contact" />
      <div className="container mx-auto">
        <section className="md:my-16 px-6 ">
          <div className="flex flex-wrap justify-center">
            <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-3/12 px-3 lg:px-6">
              <h1 className="text-textDark text-xl md:text-5xl font-semibold md:tracking-wide">
                Let’s Work Together
              </h1>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
              <div className="flex flex-wrap justify-center">
                <div className="mb-12 grow-0 shrink-0 basis-auto px-3 lg:px-6 space-y-9">
                  <div className="flex items-start">
                    <div className="ml-6">
                      <p className="font-normal text-sm text-textGray mb-1">
                        Email
                      </p>
                      <p className="text-textDark font-semibold">
                        info.deercreative@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="ml-6">
                      <p className="font-normal text-sm text-textGray mb-1">
                        Call Us
                      </p>
                      <p className="text-textDark font-semibold">
                        +6511.188.888
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                  <div className="flex justify-center md:items-start">
                    <div className="ml-6">
                      <p className="font-normal text-sm text-textGray mb-1">
                        Visit Us
                      </p>
                      <p className="text-textDark font-semibold">
                        60-49 Road 11378 New York
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
            marginheight="0"
            marginwidth="0"
            title="map"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex"></div>
      </section>
    </div>
  );
};

export default ContactUs;
