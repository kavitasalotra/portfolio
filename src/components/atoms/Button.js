import React from 'react';

const Button = ({
  children,
  isPaddingLarge,
  hasFullWidth,
  className,
  ...props
}) => (
  <button
    className={`text-base
    font-medium rounded-full text-textDark ${hasFullWidth ? 'w-full' : 'w-auto'}
  ${className} bg-transparent border-2 border-primaryDark font-poppins hover:bg-primaryDark hover:text-white`}
    type="button"
    {...props}>
    {children}
  </button>
);

export default Button;
