import React from 'react';

const Title = ({
  children,
  hasTextColorWhite,
  textAlignLeft,
  className,
  ...props
}) => {
  return (
    <h3
      className={`font-medium ${className} ${
        hasTextColorWhite ? 'text-white' : 'text-textDark'
      }  ${textAlignLeft ? 'text-left' : 'text-center'} text-xl`}
      {...props}>
      {children}
    </h3>
  );
};

export default Title;
