import React from 'react';

const Button = ({ children, className, hasTextDark, ...props }) => (
  <button
    className={`text-base
    font-medium rounded-full ${hasTextDark ? 'text-textDark' : 'text-white'}
  ${className} bg-transparent border-2 border-primaryDark font-poppins hover:bg-primaryDark hover:text-white`}
    type="button"
    {...props}>
    {children}
  </button>
);

export default Button;
