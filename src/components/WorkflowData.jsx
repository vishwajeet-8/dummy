import React, { useState } from "react";
import { Filter, ChevronDown, Eye, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WorkflowData = () => {
  const navigate = useNavigate();
  // Sample data from the image
  const initialData = [
    {
      id: 1,
      company: "Inditex",
      source: "District Heating & Cooling",
      year2022: "n/a",
      year2023: "n/a",
      year2024: "n/a",
    },
    {
      id: 2,
      company: "Inditex",
      source: "Fossil",
      year2022: "n/a",
      year2023: "7.00 %",
      year2024: "8.00 %",
    },
    {
      id: 3,
      company: "Inditex",
      source: "Nuclear",
      year2022: "n/a",
      year2023: "0.00 %",
      year2024: "0.00 %",
    },
    {
      id: 4,
      company: "Inditex",
      source: "Renewable",
      year2022: "100.00 %",
      year2023: "93.00 %",
      year2024: "92.00 %",
    },
    {
      id: 5,
      company: "LIFCO",
      source: "District Heating & Cooling",
      year2022: "n/a",
      year2023: "n/a",
      year2024: "n/a",
    },
    {
      id: 6,
      company: "LIFCO",
      source: "Fossil",
      year2022: "41.30 %",
      year2023: "35.80 %",
      year2024: "36.10 %",
    },
    {
      id: 7,
      company: "LIFCO",
      source: "Fossil",
      year2022: "41.30 %",
      year2023: "35.80 %",
      year2024: "36.10 %",
    },
    {
      id: 8,
      company: "LIFCO",
      source: "Fossil",
      year2022: "41.30 %",
      year2023: "35.80 %",
      year2024: "36.10 %",
    },
    {
      id: 9,
      company: "LIFCO",
      source: "Nuclear",
      year2022: "0.20 %",
      year2023: "1.00 %",
      year2024: "2.10 %",
    },
    {
      id: 10,
      company: "LIFCO",
      source: "Renewable",
      year2022: "44.10 %",
      year2023: "47.90 %",
      year2024: "61.90 %",
    },
    {
      id: 11,
      company: "Linde",
      source: "District Heating & Cooling",
      year2022: "n/a",
      year2023: "n/a",
      year2024: "n/a",
    },
    {
      id: 12,
      company: "Linde",
      source: "District Heating & Cooling",
      year2022: "n/a",
      year2023: "n/a",
      year2024: "n/a",
    },
    {
      id: 13,
      company: "Linde",
      source: "District Heating & Cooling",
      year2022: "n/a",
      year2023: "n/a",
      year2024: "n/a",
    },
    {
      id: 14,
      company: "Linde",
      source: "District Heating & Cooling",
      year2022: "n/a",
      year2023: "n/a",
      year2024: "n/a",
    },
    {
      id: 15,
      company: "Linde",
      source: "District Heating & Cooling",
      year2022: "n/a",
      year2023: "n/a",
      year2024: "n/a",
    },
  ];

  const [data] = useState(initialData);

  // Function to determine row background color based on energy source
  const getRowBackgroundColor = (source, value) => {
    if (source === "Renewable" && value !== "n/a") {
      return "bg-amber-100";
    }
    return value === "0.20 %" ? "bg-gray-100" : "";
  };

  return (
    <div className="w-full mx-auto p-2 sm:p-4 font-sans">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="p-3 sm:p-4 border-b border-gray-200">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Energy Consumption Percentage by Source
          </h1>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center mb-3 sm:mb-0">
              <span className="text-sm text-gray-600">Filters:</span>

              <div className="relative">
                <button className="flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md bg-white">
                  <Filter size={14} className="mr-1 sm:mr-2" />
                  <span>Company Name</span>
                  <ChevronDown size={14} className="ml-1 sm:ml-2" />
                </button>
              </div>

              <div className="relative">
                <button className="flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md bg-white">
                  <Filter size={14} className="mr-1 sm:mr-2" />
                  <span>Energy Source</span>
                  <ChevronDown size={14} className="ml-1 sm:ml-2" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              <button className="flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md bg-white">
                <Eye size={14} className="mr-1 sm:mr-2" />
                <span>Hide Empty Rows</span>
              </button>

              <button className="flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md bg-white">
                <BarChart size={14} className="mr-1 sm:mr-2" />
                <span>Create Chart</span>
              </button>
            </div>
          </div>

          {/* Configuration Buttons */}
          <div className="flex flex-wrap gap-2 mt-4 justify-start sm:justify-end">
            <button className="flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md bg-white">
              <span className="inline-block h-4 w-4 sm:h-5 sm:w-5 rounded-md border border-gray-400 mr-1 sm:mr-2"></span>
              Configure Agent
            </button>

            <button className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-600 rounded-md bg-white">
              Missing
            </button>

            <button className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-600 rounded-md bg-white">
              Conflicting
            </button>

            <button className="flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md bg-white">
              <span>Format Numbers</span>
              <ChevronDown size={14} className="ml-1 sm:ml-2" />
            </button>

            <button className="flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm border border-gray-300 rounded-md bg-white">
              <span>Configure Layout</span>
              <ChevronDown size={14} className="ml-1 sm:ml-2" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-600 border-b border-r">
                  <div className="w-24 sm:w-40">Company Name</div>
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-600 border-b border-r">
                  <div className="w-24 sm:w-40">Energy Source</div>
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium text-gray-600 border-b border-r">
                  <div className="w-16 sm:w-24">2022</div>
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium text-gray-600 border-b border-r">
                  <div className="w-16 sm:w-24">2023</div>
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium text-gray-600 border-b">
                  <div className="w-16 sm:w-24">2024</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate("/workflow-consistency")}
                >
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 border-b border-r">
                    {row.company}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 border-b border-r">
                    {row.source}
                  </td>
                  <td
                    className={`px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 text-center border-b border-r ${getRowBackgroundColor(
                      row.source,
                      row.year2022
                    )}`}
                  >
                    {row.year2022}
                  </td>
                  <td
                    className={`px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 text-center border-b border-r ${getRowBackgroundColor(
                      row.source,
                      row.year2023
                    )}`}
                  >
                    {row.year2023}
                  </td>
                  <td
                    className={`px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 text-center border-b ${getRowBackgroundColor(
                      row.source,
                      row.year2024
                    )}`}
                  >
                    {row.year2024}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View (Alternative for very small screens) */}
        <div className="block sm:hidden mt-4 px-2">
          <div className="text-xs font-medium text-gray-500 mb-2">
            Mobile View (Swipe table above for all data)
          </div>
          <div className="bg-gray-100 p-1 rounded-md text-xs">
            <span className="inline-block px-1">
              Tip: Rotate device for better view
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowData;
