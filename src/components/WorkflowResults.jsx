import React, { useState } from "react";
import {
  Info,
  FileText,
  FileSpreadsheet,
  Download,
  Database,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
} from "lucide-react";

const WorkflowResults = () => {
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showUnderHood, setShowUnderHood] = useState(false);

  // Sample data to match the image
  const agentData = [
    {
      id: 1,
      name: "Energy Consumption Percentage by Source",
      extractions: 48,
      consistency: {
        consistent: 18,
        inconsistent: 2,
        missing: 28,
      },
      status: "Processed",
    },
    {
      id: 2,
      name: "Energy Consumption by Source",
      extractions: 48,
      consistency: {
        consistent: 23,
        inconsistent: 0,
        missing: 25,
      },
      status: "Processed",
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

  // Helper function to render progress bar
  const renderProgressBar = (consistent, inconsistent, missing) => {
    const total = consistent + inconsistent + missing;
    const consistentWidth = (consistent / total) * 100;
    const inconsistentWidth = (inconsistent / total) * 100;

    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="flex rounded-full h-full overflow-hidden">
          <div
            className="bg-green-400"
            style={{ width: `${consistentWidth}%` }}
          />
          {inconsistent > 0 && (
            <div
              className="bg-yellow-400"
              style={{ width: `${inconsistentWidth}%` }}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mx-auto h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <h1 className="text-xl font-medium text-gray-800">
            Investigate & Export Agent Results
          </h1>
          <Info size={18} className="ml-2 text-gray-400" />
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded border border-gray-200 transition-colors">
            <FileText size={16} className="mr-2" />
            <span>Fill Report</span>
          </button>
          <button className="flex items-center bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded border border-gray-200 transition-colors">
            <FileSpreadsheet size={16} className="mr-2" />
            <span>Fill Excel</span>
          </button>
          <button className="flex items-center bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded border border-gray-200 transition-colors">
            <Download size={16} className="mr-2" />
            <span>Excel</span>
          </button>
          <button className="flex items-center bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded border border-gray-200 transition-colors">
            <Database size={16} className="mr-2" />
            <span>External DB</span>
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by agent name ..."
          className="w-full sm:w-1/3 px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded mb-4 overflow-x-auto">
        {/* Table Header */}
        <div className="grid grid-cols-12 border-b border-gray-200 py-3 px-4 bg-gray-50 text-gray-600 text-sm">
          <div className="col-span-4 md:col-span-4 flex items-center">
            <input type="checkbox" className="mr-3" onChange={() => {}} />
            Data Agent
          </div>
          <div className="col-span-2 md:col-span-2 flex items-center justify-center">
            # Extractions
          </div>
          <div className="col-span-3 md:col-span-4 flex items-center">
            Data Consistency
          </div>
          <div className="col-span-3 md:col-span-2 flex items-center justify-center">
            Progress
          </div>
        </div>

        {/* Table Body */}
        {agentData.map((agent) => (
          <div
            key={agent.id}
            className="grid grid-cols-12 border-b border-gray-200 py-4 px-4 hover:bg-gray-50"
          >
            <div className="col-span-4 md:col-span-4 flex items-center">
              <input
                type="checkbox"
                className="mr-3"
                checked={selectedRows.includes(agent.id)}
                onChange={() => toggleRowSelection(agent.id)}
              />
              <span className="font-medium">{agent.name}</span>
            </div>
            <div className="col-span-2 md:col-span-2 flex items-center justify-center">
              {agent.extractions}
            </div>
            <div className="col-span-3 md:col-span-4 flex flex-col space-y-2">
              <div>
                {renderProgressBar(
                  agent.consistency.consistent,
                  agent.consistency.inconsistent,
                  agent.consistency.missing
                )}
              </div>
              <div className="text-xs text-gray-500">
                <span className="text-green-600">
                  {agent.consistency.consistent} consistent
                </span>
                {agent.consistency.inconsistent > 0 && (
                  <span className="text-yellow-600">
                    {" "}
                    / {agent.consistency.inconsistent} inconsistent
                  </span>
                )}
                {agent.consistency.inconsistent === 0 && (
                  <span className="text-gray-400">
                    {" "}
                    / {agent.consistency.inconsistent} inconsistent
                  </span>
                )}
                <span className="text-gray-400">
                  {" "}
                  / {agent.consistency.missing} missing
                </span>
              </div>
            </div>
            <div className="col-span-3 md:col-span-2 flex justify-center items-center">
              <div className="flex items-center">
                <CheckCircle size={18} className="text-green-500 mr-2" />
                <span className="text-green-600">{agent.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-sm text-gray-600">
        <div className="mb-4 sm:mb-0">
          <span>
            {selectedRows.length} of {agentData.length} row(s) selected.
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

      {/* Look under the hood section */}
      <div className="mt-6 border-t border-gray-200 pt-4 text-center">
        <button
          className="flex items-center mx-auto text-gray-600 hover:text-gray-800"
          onClick={() => setShowUnderHood(!showUnderHood)}
        >
          <span>Look under the hood</span>
          <ChevronDown size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default WorkflowResults;
