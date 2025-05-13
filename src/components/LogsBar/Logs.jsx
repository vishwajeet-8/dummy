import React, { useContext } from "react";
import {
  RefreshCw,
  Download,
  Check,
  AlertTriangle,
  Info,
  XCircle,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import ProgressBar from "./ProgressBar";
import { BarContext } from "../../context/bar/barContext";

const Logs = () => {
  const { logs, setLogs } = useContext(BarContext);
  // Sample data for what the agent will process
  const documentSummary = {
    totalDocuments: 17,
    invoices: 12,
    purchaseOrders: 3,
    receipts: 2,
    averageConfidence: 94.2,
  };

  // Stats for the execution
  const executionStats = {
    startTime: "10:43 AM",
    estimatedCompletion: "10:52 AM",
    docsProcessed: 5,
    docsRemaining: 12,
    errorsFound: 1,
    warnings: 2,
  };

  // Get appropriate icon for log status
  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <Check size={18} className="text-green-500" />;
      case "error":
        return <XCircle size={18} className="text-red-500" />;
      case "warning":
        return <AlertTriangle size={18} className="text-yellow-500" />;
      case "info":
      default:
        return <Info size={18} className="text-blue-500" />;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {/* <header className="bg-white shadow-sm px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/agents"
              className="mr-4 text-gray-500 hover:text-gray-700"
            >
              <ArrowLeft size={20} />
            </a>
            <div className="flex items-center">
              <Database className="mr-2" size={24} />
              <h1 className="text-lg font-medium">
                InfraHive AI: Invoice Processing Agent
              </h1>
            </div>
            <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
              Running
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>

            <button
              className={`p-2 rounded ${
                isRunning
                  ? "bg-red-100 text-red-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {isRunning ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button className="p-1 rounded-full bg-gray-200">
              <User size={22} />
            </button>
          </div>
        </header> */}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          {/* Progress Overview */}
          <ProgressBar />

          <div className="flex gap-6 mb-6">
            {/* Document Summary */}
            <div
              className="bg-white shadow-sm rounded-lg p-4 col-span-1"
              style={{ width: "300px" }}
            >
              <h2 className="text-lg font-medium mb-4">Document Summary</h2>
              <div className="">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Total Documents</span>
                  <span className="font-medium">
                    {documentSummary.totalDocuments}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Invoices</span>
                  <span className="font-medium">
                    {documentSummary.invoices}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Purchase Orders</span>
                  <span className="font-medium">
                    {documentSummary.purchaseOrders}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Receipts</span>
                  <span className="font-medium">
                    {documentSummary.receipts}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className="text-sm text-gray-600"
                    style={{ marginRight: "20px" }}
                  >
                    Avg. OCR Confidence
                  </span>
                  <span className="font-medium">
                    {documentSummary.averageConfidence}%
                  </span>
                </div>
              </div>
            </div>

            {/* Execution Stats */}
            <div
              className="bg-white shadow-sm rounded-lg p-4 col-span-2"
              style={{ width: "900px" }}
            >
              <h2 className="text-lg font-medium mb-4">Execution Statistics</h2>
              <div className="flex flex-wrap gap-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "#F0EFFA", width: "200px" }}
                >
                  <div className="text-sm text-indigo-600 mb-1">
                    Documents Processed
                  </div>
                  <div className="text-2xl font-bold">
                    {executionStats.docsProcessed}
                  </div>
                </div>
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "#8BD0FB", width: "200px" }}
                >
                  <div className="text-sm text-blue-600 mb-1">
                    Documents Remaining
                  </div>
                  <div className="text-2xl font-bold">
                    {executionStats.docsRemaining}
                  </div>
                </div>
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "#ECE9FC", width: "200px" }}
                >
                  <div className="text-sm text-purple-600 mb-1">
                    Processing Speed
                  </div>
                  <div className="text-2xl font-bold">3.4 docs/min</div>
                </div>
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "#FBDAD4", width: "200px" }}
                >
                  <div className="text-sm text-red-600 mb-1">Errors Found</div>
                  <div className="text-2xl font-bold">
                    {executionStats.errorsFound}
                  </div>
                </div>
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: "#FFFECA", width: "200px" }}
                >
                  <div className="text-sm text-yellow-600 mb-1">Warnings</div>
                  <div className="text-2xl font-bold">
                    {executionStats.warnings}
                  </div>
                </div>
                <div
                  className="bg-green-50 p-3 rounded-lg"
                  style={{ width: "200px" }}
                >
                  <div className="text-sm text-green-600 mb-1">Time Saved</div>
                  <div className="text-2xl font-bold">~3.2 hrs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Execution Logs */}
          <div className="bg-white shadow-sm rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Execution Logs</h2>
              <div className="flex items-center space-x-2">
                <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-100">
                  <RefreshCw size={16} />
                </button>
                <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded hover:bg-gray-100">
                  <Download size={16} />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto max-h-96 border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                      Time
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {logs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-mono text-gray-500">
                        {log.timestamp}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          {getStatusIcon(log.status)}
                          <span className="ml-1 text-xs capitalize hidden">
                            {log.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-900">
                        {log.message}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-indigo-600 hover:text-indigo-800">
                          <ChevronRight size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Log details panel (expandable) */}
            <div className="mt-4 border border-gray-200 rounded-lg bg-gray-50 p-3">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-sm font-medium">
                  Error details: Price mismatch on invoice #INV-2025-0423
                </h3>
                <ChevronDown size={16} className="text-gray-500" />
              </div>
              <div className="mt-2 bg-gray-100 p-3 rounded font-mono text-xs overflow-x-auto">
                <p className="text-red-600">
                  ERROR [62s]: Price mismatch detected
                </p>
                <p className="text-gray-600 mt-1">
                  - Invoice #INV-2025-0423 from vendor "ABC Supplies" (ID:
                  VN-37829)
                </p>
                <p className="text-gray-600">- Invoice amount: $4,235.60</p>
                <p className="text-gray-600">- PO amount: $3,890.25</p>
                <p className="text-gray-600">- Difference: $345.35 (+8.9%)</p>
                <p className="text-gray-600 mt-1">
                  ACTION: Checking contract terms for authorized adjustments...
                </p>
                <p className="text-green-600 mt-1">
                  RESOLVED [70s]: Found approved price adjustment
                </p>
                <p className="text-gray-600">
                  - Contract #CT-ABC-2025-03 authorizes 8.9% increase
                </p>
                <p className="text-gray-600">- Effective date: 04/15/2025</p>
                <p className="text-gray-600">- Approved by: J. Martinez</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Logs;
