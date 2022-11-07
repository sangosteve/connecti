import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Header from "./header";
const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      {/* <Nav /> */}
      <Header />
      <main className="w-full h-full  flex">
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
