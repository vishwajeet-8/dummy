import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { AgentContext } from "../context/agent/agentContext";
import {
  Info,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpDown,
  MoreHorizontal,
} from "lucide-react";

const DataAgents = () => {
  const navigate = useNavigate();

  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  // const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const { agents } = useContext(AgentContext);
  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleClick = () => {
    navigate("/agents-chatbot");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <h1 className="text-xl font-bold text-gray-800">Agent Studio</h1>
          <Info size={18} className="ml-2 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded border border-gray-200 transition-colors font-semibold">
            <RefreshCw size={16} className="mr-2" />
            <span>Refresh</span>
          </button>
          <button
            onClick={handleClick}
            className="flex items-center bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded transition-colors font-medium"
          >
            <span>New Agents</span>
          </button>
        </div>
      </div>

      {/* Filter and Columns */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Search Agent"
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded mb-4 overflow-x-auto">
        {/* Table Header */}
        <div className="grid grid-cols-14 border-b border-gray-200 py-3 px-4 bg-gray-50 text-gray-600 text-sm">
          <div className="col-span-4 flex items-center">
            <input type="checkbox" className="mr-3" onChange={() => {}} />
            Agent Name <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
          <div className="col-span-2 flex items-center">
            Template <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
          <div className="col-span-2 flex items-center">
            Schedule <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
          <div className="col-span-2 flex items-center">
            Last Run <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
          <div className="col-span-2 flex items-center">
            Next Run <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
          <div className="col-span-2 flex items-center">
            Status <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
        </div>

        {/* Table Body */}
        {agents.map((agent, index) => (
          <div
            key={index}
            className="grid grid-cols-14 border-b border-gray-200 py-3 px-4 hover:bg-gray-50 relative"
          >
            <div className="col-span-4 flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="truncate">{agent.agentName}</span>
            </div>
            <div className="col-span-2 text-gray-400">{agent.template}</div>
            <div className="col-span-2">{agent.schedule}</div>
            <div className="col-span-2">{agent.lastRun}</div>
            <div className="col-span-2">{agent.nextRun}</div>
            <div className="col-span-1 flex items-center">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-gray-400">{agent.status}</span>
              </div>
            </div>
            <div className="col-span-1 flex justify-end relative">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownAnchor(
                    dropdownAnchor === e.currentTarget ? null : e.currentTarget
                  );
                }}
              >
                <MoreHorizontal size={18} />
              </button>
              {dropdownAnchor && (
                <DropdownMenu
                  anchorEl={dropdownAnchor}
                  onClose={() => setDropdownAnchor(null)}
                  navigate={navigate}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-sm text-gray-600 font-medium">
        <div className="mb-4 sm:mb-0">
          <span>1 of 50 row(s) selected.</span>
        </div>
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center mr-4">
            <span className="mr-2">Rows per page</span>
            <select
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="border border-gray-200 rounded p-1 bg-white"
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Page {currentPage} of 1</span>
            <div className="flex">
              <button className="p-1 border border-gray-200 rounded-l hover:bg-gray-50">
                <ChevronsLeft size={16} />
              </button>
              <button className="p-1 border-t border-b border-gray-200 hover:bg-gray-50">
                <ChevronLeft size={16} />
              </button>
              <button className="p-1 border-t border-b border-gray-200 hover:bg-gray-50">
                <ChevronRight size={16} />
              </button>
              <button className="p-1 border border-gray-200 rounded-r hover:bg-gray-50">
                <ChevronsRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAgents;

// Dropdown////////////////////
const DropdownMenu = ({ anchorEl, onClose, navigate }) => {
  const menuRef = useRef(null);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 4, // Add small offset
        left: rect.left - 100, // Adjust based on menu width
      });
    }
  }, [anchorEl]);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        !menuRef.current?.contains(e.target) &&
        !anchorEl?.contains(e.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [onClose, anchorEl]);

  const handleAction = (action) => {
    onClose();
    switch (action) {
      case "Logs":
        navigate("/logs");
        break;
      case "Edit":
        navigate("/edit");
        break;
      // Add other cases as needed
    }
  };

  if (!position) return null;

  return createPortal(
    <div
      ref={menuRef}
      className="absolute z-50 w-40 bg-white border border-gray-300 rounded shadow-lg"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 1000, // Ensure higher z-index
      }}
    >
      {["Run now", "Pause/Resume", "Logs", "Edit", "Delete"].map((item) => (
        <button
          key={item}
          onClick={() => handleAction(item)}
          className="w-full px-4 py-2 text-left text-gray-500 hover:bg-gray-100"
        >
          {item}
        </button>
      ))}
    </div>,
    document.body
  );
};
