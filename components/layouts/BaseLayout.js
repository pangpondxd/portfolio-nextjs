import Header from "@/components/shared/Header";
import React from "react";

const BaseLaout = (props) => {
    const {className, children} = props
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLaout;
