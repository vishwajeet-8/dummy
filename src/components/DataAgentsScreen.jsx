import React, { useState } from "react";
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

const DataAgentsScreen = () => {
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  // Sample data to match the image
  const files = [
    {
      id: 1,
      name: "2023-annual-report-to-security-holders.pdf",
      summary: "Pending",
      pages: 124,
      uploaded: "4/20/25, 6:12 PM",
      status: "Pending",
    },
    {
      id: 2,
      name: "Inditex_Group_Annual_Report_2024.pdf",
      summary: "Pending",
      pages: 514,
      uploaded: "4/20/25, 6:12 PM",
      status: "Pending",
    },
    {
      id: 3,
      name: "Y_2024_d.pdf",
      summary: "Pending",
      pages: 677,
      uploaded: "4/20/25, 6:12 PM",
      status: "Pending",
    },
    {
      id: 4,
      name: "annual-and-sustainability-report-2024.pdf",
      summary: "Pending",
      pages: 154,
      uploaded: "4/20/25, 6:12 PM",
      status: "Pending",
    },
  ];

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const toggleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mx-auto h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <h1 className="text-xl font-medium text-gray-800">
            Upload or Configure Source Documents
          </h1>
          <Info size={18} className="ml-2 text-gray-400" />
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded border border-gray-200 transition-colors">
            <RefreshCw size={16} className="mr-2" />
            <span>Synchronize Documents</span>
          </button>
          <button className="flex items-center bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded transition-colors">
            <span>Data Agents</span>
          </button>
        </div>
      </div>

      {/* Filter and Columns */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Filter by file name ..."
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
          Columns
        </button>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded mb-4 overflow-x-auto">
        {/* Table Header */}
        <div className="grid grid-cols-12 border-b border-gray-200 py-3 px-4 bg-gray-50 text-gray-600 text-sm">
          <div className="col-span-4 flex items-center">
            <input type="checkbox" className="mr-3" onChange={() => {}} />
            File Name <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
          <div className="col-span-2 flex items-center">
            Summary <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
          <div className="col-span-2 flex items-center">
            # Pages <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
          <div className="col-span-2 flex items-center">
            Uploaded <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
          <div className="col-span-2 flex items-center">
            Status <ArrowUpDown size={14} className="ml-1 text-gray-400" />
          </div>
        </div>

        {/* Table Body */}
        {files.map((file) => (
          <div
            key={file.id}
            className="grid grid-cols-12 border-b border-gray-200 py-3 px-4 hover:bg-gray-50"
          >
            <div className="col-span-4 flex items-center">
              <input
                type="checkbox"
                className="mr-3"
                checked={selectedRows.includes(file.id)}
                onChange={() => toggleRowSelection(file.id)}
              />
              <span className="truncate">{file.name}</span>
            </div>
            <div className="col-span-2 text-gray-400">{file.summary}</div>
            <div className="col-span-2">{file.pages}</div>
            <div className="col-span-2">{file.uploaded}</div>
            <div className="col-span-1 flex items-center">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
                <span className="text-gray-400">{file.status}</span>
              </div>
            </div>
            <div className="col-span-1 flex justify-end">
              <button className="text-gray-500 hover:text-gray-700">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-sm text-gray-600">
        <div className="mb-4 sm:mb-0">
          <span>
            {selectedRows.length} of {files.length} row(s) selected.
          </span>
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

export default DataAgentsScreen;
