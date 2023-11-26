import React from "react";
import { NavBar } from "./NavBar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <NavBar />
        {children}
      </div>
      ;
    </React.Fragment>
  );
}

export { Layout };
