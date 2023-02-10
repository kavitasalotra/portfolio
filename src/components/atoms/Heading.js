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
        ? 'md:text-extraLarge text-primaryDark font-extrabold bg-gradient-to-r from-primaryDark via-yellow-500 to-orange-500 bg-clip-text text-transparent'
        : 'md:text-4xl'
    }  font-semibold ${className} text-textDark text-3xl leading-none font-poppins `}
    {...props}>
    {children}
  </h1>
);

export default Heading;
