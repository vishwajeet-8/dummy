import React, { useState } from "react";
import {
  RefreshCw,
  Copy,
  Clock,
  Trash2,
  ChevronDown,
  ChevronUp,
  Check,
  X,
} from "lucide-react";

const WorkflowConsistency = () => {
  const [summaryExpanded, setSummaryExpanded] = useState(true);

  return (
    <div className="mx-auto p-2 sm:p-4 font-sans">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border-b border-gray-200">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Energy Consumption Percentage by Source
          </h1>

          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <button className="flex items-center px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100">
              <RefreshCw size={16} className="mr-1" />
              <span>Rerun Resolution</span>
              <ChevronDown size={16} className="ml-1" />
            </button>

            <button className="flex items-center px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm text-white font-medium bg-red-500 hover:bg-red-600 rounded-md">
              <Trash2 size={16} className="mr-1" />
              <span>Delete</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="p-3 sm:p-4 border-b border-gray-100">
          <div className="flex flex-wrap gap-2">
            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              LIFCO
            </div>
            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              2022
            </div>
            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
              Renewable
            </div>
          </div>
        </div>

        {/* Actions and Date */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border-b border-gray-100">
          <button className="flex items-center px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50">
            <Copy size={16} className="mr-1" />
            <span>Copy</span>
          </button>

          <div className="flex items-center mt-2 sm:mt-0">
            <div className="flex items-center mr-4">
              <span className="text-xs sm:text-sm text-gray-600 mr-2">
                Format Numbers
              </span>
              <ChevronDown size={16} className="text-gray-600" />
            </div>

            <div className="flex items-center">
              <span className="text-xs sm:text-sm text-gray-600 mr-2">
                Updated:
              </span>
              <span className="flex items-center text-xs sm:text-sm text-gray-800">
                <Clock size={14} className="mr-1" />
                Apr 20, 2025, 12:23 PM
              </span>
            </div>
          </div>
        </div>

        {/* Result Value */}
        <div className="p-3 sm:p-4 border-b border-gray-100">
          <div className="text-xl sm:text-2xl font-semibold">44.10 %</div>
        </div>

        {/* Data Consistency Summary */}
        <div className="border-b border-gray-100">
          <button
            className="flex justify-between items-center w-full p-3 sm:p-4 text-left"
            onClick={() => setSummaryExpanded(!summaryExpanded)}
          >
            <h2 className="text-base sm:text-lg font-semibold">
              Data Consistency Summary
            </h2>
            {summaryExpanded ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          {summaryExpanded && (
            <div className="p-3 sm:p-4 bg-gray-50">
              <p className="text-xs sm:text-sm text-gray-700 mb-3">
                Two different values were extracted for LIFCO's 2022 renewable
                energy share percentage from the same document: 44.1% (page 31,
                in a detailed energy mix table) and 61.1% (page 25, in a goals
                and results summary table). The value 44.1% was deemed
                consistent, while 61.1% was inconsistent.
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                No explanation found in document pages.
              </p>
            </div>
          )}
        </div>

        {/* Underlying Sources */}
        <div>
          <div className="p-3 sm:p-4 flex justify-between items-center border-b border-gray-100">
            <h2 className="text-base sm:text-lg font-semibold">
              Underlying Sources
            </h2>
            <span className="text-xs sm:text-sm text-gray-600">
              1 document and 2 pages
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 py-2 w-10"></th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 w-20">
                    Consistent
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">
                    Document
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 w-16">
                    Page
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-600">
                    Extraction Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-amber-100">
                  <td className="px-3 py-2 text-center">
                    <ChevronDown
                      size={16}
                      className="inline-block text-gray-600"
                    />
                  </td>
                  <td className="px-3 py-2 text-center">
                    <X size={16} className="inline-block text-gray-800" />
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm">
                    annual-and-sustainability-report-2024.pdf
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm">25</td>
                  <td className="px-3 py-2 text-xs sm:text-sm">
                    Apr 20, 2025, 12:23 PM
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center">
                    <ChevronDown
                      size={16}
                      className="inline-block text-gray-600"
                    />
                  </td>
                  <td className="px-3 py-2 text-center">
                    <Check size={16} className="inline-block text-gray-800" />
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm">
                    annual-and-sustainability-report-2024.pdf
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm">31</td>
                  <td className="px-3 py-2 text-xs sm:text-sm">
                    Apr 20, 2025, 12:23 PM
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-center">
                    <ChevronDown
                      size={16}
                      className="inline-block text-gray-600"
                    />
                  </td>
                  <td className="px-3 py-2 text-center">
                    <Check size={16} className="inline-block text-gray-800" />
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm">
                    annual-and-sustainability-report-2024.pdf
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm">31</td>
                  <td className="px-3 py-2 text-xs sm:text-sm">
                    Apr 20, 2025, 12:23 PM
                  </td>
                </tr>
                <tr className="bg-amber-100">
                  <td className="px-3 py-2 text-center">
                    <ChevronDown
                      size={16}
                      className="inline-block text-gray-600"
                    />
                  </td>
                  <td className="px-3 py-2 text-center">
                    <X size={16} className="inline-block text-gray-800" />
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm">
                    annual-and-sustainability-report-2024.pdf
                  </td>
                  <td className="px-3 py-2 text-xs sm:text-sm">25</td>
                  <td className="px-3 py-2 text-xs sm:text-sm">
                    Apr 20, 2025, 12:23 PM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowConsistency;
