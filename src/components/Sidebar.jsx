import React, { useState, useEffect } from "react";
import {
  Home,
  Database,
  Users,
  FileText,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { id: 1, title: "Home", icon: <Home size={18} />, url: "/" },
    {
      id: 2,
      title: "Source Data",
      icon: <Database size={18} />,
      url: "/source-data",
    },
    {
      id: 3,
      title: "Data Agents",
      icon: <Users size={18} />,
      url: "/data-agents",
    },
    {
      id: 4,
      title: "Workflow Results",
      icon: <FileText size={18} />,
      url: "/workflow-results",
    },
  ];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {/* Mobile menu toggle button - only visible on mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100 text-gray-700"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-40 flex flex-col justify-between 
          bg-gray-50 border-r border-gray-200 
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          ${isSidebarOpen ? "md:w-60" : "md:w-16"} 
          w-60 p-4
          md:translate-x-0 md:static
          min-h-screen
        `}
      >
        {/* Toggle button for expanded/collapsed sidebar - only visible on desktop */}
        <button
          className="hidden md:block absolute -right-3 top-20 bg-white p-1 rounded-full border border-gray-200 text-gray-500"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <ChevronLeft size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
        </button>

        {/* Menu items */}
        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              to={item.url}
              key={item.id}
              className={`
                flex items-center rounded-md hover:bg-gray-100 cursor-pointer transition-colors
                ${
                  isSidebarOpen || isMobile ? "px-3 py-3" : "p-3 justify-center"
                }
              `}
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#E7E9EB" : "",
              })}
            >
              <div
                className={`text-gray-500 ${
                  isSidebarOpen || isMobile ? "mr-3" : "mr-0"
                }`}
              >
                {item.icon}
              </div>
              {(isSidebarOpen || isMobile) && (
                <span className="text-gray-700 font-medium">{item.title}</span>
              )}
            </NavLink>
          ))}
        </div>

        {/* User profile */}
        <div
          className={`
            flex items-center cursor-pointer
            ${isSidebarOpen || isMobile ? "p-3" : "py-3 justify-center"}
          `}
          onClick={() => setIsProfileExpanded(!isProfileExpanded)}
        >
          <div className={`${isSidebarOpen || isMobile ? "mr-3" : "mr-0"}`}>
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs">
              <span>👤</span>
            </div>
          </div>
          {(isSidebarOpen || isMobile) && (
            <>
              <span className="text-gray-700 text-sm font-medium flex-1">
                vishwajeetrout@123.com
              </span>
              {isProfileExpanded ? (
                <ChevronDown size={16} className="text-gray-500" />
              ) : (
                <ChevronUp size={16} className="text-gray-500" />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
