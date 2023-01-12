import React from 'react';

const Heading = ({
  children,
  hasTextColorPrimaryDark,
  textAlignLeft,
  textExtraLarge,
  className,
  hasFontExtrabold,
  ...props
}) => (
  <h1
    className={`${textExtraLarge ? 'md:text-extraLarge' : 'md:text-4xl'} ${
      hasFontExtrabold ? 'font-extrabold' : 'font-semibold'
    }  ${className} ${textAlignLeft ? 'text-left' : 'text-center'} ${
      hasTextColorPrimaryDark ? 'text-primaryDark' : 'text-textDark'
    } text-3xl leading-none font-poppins `}
    {...props}>
    {children}
  </h1>
);

export default Heading;
