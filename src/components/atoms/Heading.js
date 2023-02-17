import React from 'react';

const Heading = ({
  children,
  textAlignLeft,
  textExtraLarge,
  className,
  ...props
}) => (
  <h1
    className={`${
      textExtraLarge
        ? 'md:text-extraLarge hover:no-underline hover:text-amber-300 text-amber-300 font-extrabold'
        : 'md:text-4xl'
    }  font-semibold ${className} text-textDark text-4xl leading-none font-poppins hover:underline hover:underline-offset-2 hover:text-primaryDark hover:transition duration-700 ease-in-out transform cursor-pointer hover:translate-x-1 hover:scale-100`}
    {...props}>
    {children}
  </h1>
);

export default Heading;
