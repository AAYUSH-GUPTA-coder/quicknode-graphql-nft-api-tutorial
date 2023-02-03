import React from "react";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-full flex flex-col p-10">
      <div className="w-full h-full flex flex-col">{children}</div>
    </div>
  );
};

export default Layout;
