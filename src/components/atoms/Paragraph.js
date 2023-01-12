import React from 'react';

const Paragraph = ({
  children,
  hasTextColorWhite,
  textAlignLeft,
  className,
  ...props
}) => {
  return (
    <p
      className={`font-normal ${hasTextSmall ? 'text-sm' : 'text-base'} ${
        hasTextColorWhite ? 'text-white' : 'text-textGray'
      }   ${textAlignLeft ? 'text-left' : 'text-center'} ${className}`}
      {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
