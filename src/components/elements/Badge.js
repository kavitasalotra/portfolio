import React from 'react';

const Badge = ({ children, isTransparent }) => {
  return (
    <span
      class={`${
        isTransparent
          ? 'bg-transparent text-primaryDark'
          : 'bg-primaryDark text-white mr-2 px-2.5 py-0.5 rounded-sm'
      } text-xs font-medium text-center`}>
      {children}
    </span>
  );
};

export default Badge;
