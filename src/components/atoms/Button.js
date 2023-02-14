import React from 'react';

const Button = ({ children, className, hasTextDark, ...props }) => (
  <button
    className={`text-base
    font-medium rounded-md ${hasTextDark ? 'text-textDark' : 'text-white'}
  ${className} bg-transparent border-2 border-primaryDark hover:bg-primaryDark hover:transition duration-700 ease-in-out transform hover:translate-x-1 hover:scale-100 `}
    type="button"
    {...props}>
    {children}
  </button>
);

export default Button;
