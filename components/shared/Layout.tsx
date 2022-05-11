import React from 'react';

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`px-2 sm:px-8 ${className && className}`}>{children}</div>
  );
};

export default Layout;
