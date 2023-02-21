import React from 'react';
import Button from '../atoms/Button';

import Title from '../atoms/Title';

const CallToAction = () => {
  return (
    <section className="py-6 bg-backgroundLite">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
        <Title className="font-bold text-2xl">
          We love meeting new people. If you want to work with us send a message
        </Title>
        <Button className="px-8 py-3">Contact Us</Button>
      </div>
    </section>
  );
};

export default CallToAction;
