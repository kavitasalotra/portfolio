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
        ? 'md:text-extraLarge text-primaryDark font-extrabold'
        : 'md:text-4xl'
    }  font-semibold ${className} text-textDark text-3xl leading-none font-poppins `}
    {...props}>
    {children}
  </h1>
);

export default Heading;
