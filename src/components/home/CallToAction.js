import React from 'react';
import Button from '../atoms/Button';

import Title from '../atoms/Title';

const CallToAction = () => {
  return (
    <section className="py-6 bg-[url('/images/Home-hero-31.jpg')] bg-cover bg-fixed  bg-no-repeat">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
        <Title hasTextColorWhite>
          We love meeting new people. If you want to work with us send a message
        </Title>
        <Button className="px-8 py-3">Contact Us</Button>
      </div>
    </section>
  );
};

export default CallToAction;
