import Sidebar from "./Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-1/4">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="p-4 flex-3/4">
        <Outlet /> {/* Renders the nested route content here */}
      </main>
    </div>
  );
};

export default Layout;
