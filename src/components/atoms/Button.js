import React from 'react';

const Button = ({
  children,
  isPaddingLarge,
  hasFullWidth,
  className,
  hasTextDark,
  ...props
}) => (
  <button
    className={`text-base
    font-medium rounded-full ${hasTextDark ? 'text-textDark' : 'text-white'} ${
      hasFullWidth ? 'w-full' : 'w-auto'
    }
  ${className} bg-transparent border-2 border-primaryDark font-poppins hover:bg-primaryDark hover:text-white`}
    type="button"
    {...props}>
    {children}
  </button>
);

export default Button;
