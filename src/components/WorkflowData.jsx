import { CheckCircle, Eye } from "lucide-react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarContext } from "../context/barContext";

const WorkflowData = () => {
  const { initialData, agreement, setAgreement } = useContext(BarContext);
  const navigate = useNavigate();
  const [data] = useState(initialData);

  return (
    <div className="w-full mx-auto p-2 sm:p-4 font-sans">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="p-3 sm:p-4 mb-10">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Acme Invoice Matcher Agent 1
          </h1>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-600 border-b border-r">
                  <div className="w-52 sm:w-64">Company Name</div>
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-600 border-b border-r">
                  <div className="w-52 sm:w-64">Energy Source</div>
                </th>
                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-600 border-b border-r">
                  <div className="w-4 sm:w-6">View</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 border-b border-r">
                    {row.company}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 border-b border-r">
                    {row.source}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 border-b border-r">
                    <Eye
                      onClick={() => {
                        localStorage.setItem("agreement", row.source);
                        navigate(`/workflow-data/${row.url}`);
                        setAgreement(row.source);
                      }}
                    />
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
