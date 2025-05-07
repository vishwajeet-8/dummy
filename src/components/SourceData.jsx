import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpDown,
  Database,
  Mail,
  RefreshCw,
} from "lucide-react";

const SourceData = () => {
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [connectingTo, setConnectingTo] = useState(null);
  const [connectionStatuses, setConnectionStatuses] = useState({
    sap: "disconnected",
    odoo: "disconnected",
    mailbox: "disconnected",
  });

  const fileTypes = [
    { type: "PDF", icon: "document" },
    { type: "Word", icon: "document-text" },
    { type: "Excel", icon: "document-spreadsheet" },
    { type: "PPT", icon: "presentation" },
    { type: "Images", icon: "photo" },
  ];

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleConnect = (source) => {
    setConnectingTo(source);
  };

  const handleConnectConfirm = () => {
    if (connectingTo) {
      setConnectionStatuses((prev) => ({
        ...prev,
        [connectingTo]: "connected",
      }));
      setConnectingTo(null);
    }
  };

  const renderConnectionCard = (title, description, icon, source, color) => (
    <div className="border border-gray-200 shadow-xl rounded-md  p-4 bg-white">
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color }}>{icon}</span>
        <h3
          className="text-lg font-medium px-3 text-white rounded"
          style={{ backgroundColor: color }}
        >
          {title}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <button
        className="text-sm bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
        onClick={() => handleConnect(source)}
      >
        {connectionStatuses[source] === "connected" ? "Connected" : "Connect"}
      </button>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mx-auto h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <h1 className="text-xl font-bold text-gray-800">
            Configure Data Sources
          </h1>
        </div>
        <button className="flex items-center font-semibold bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded border border-gray-200 transition-colors">
          <RefreshCw size={16} className="mr-2" />
          <span>Refresh</span>
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-semibold mb-4 bg-gray-100 p-3 rounded">
          Enterprise Connections
        </h2>
        <div className="flex gap-6">
          {renderConnectionCard(
            "SAP",
            "Connect to your SAP ERP system to import transaction data",
            <Database className="h-5 w-5" />,
            "sap",
            "#0FAAFF"
          )}
          {renderConnectionCard(
            "Odoo",
            "Import data from your Odoo business applications",
            <Database className="h-5 w-5" />,
            "odoo",
            "#714B67"
          )}
          {renderConnectionCard(
            "Mailbox",
            "Connect to email accounts to import data from attachments",
            <Mail className="h-5 w-5" />,
            "mailbox",
            "#4285F4"
          )}
        </div>
      </div>

      {/* Simple Dialog Modal */}
      {connectingTo && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 bg-opacity-30 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white rounded-md p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              Connect to {connectingTo.toUpperCase()}
            </h2>
            <div className="space-y-4">
              {connectingTo === "sap" && (
                <>
                  <div>
                    <label
                      htmlFor="sap-server"
                      className="block text-sm font-medium"
                    >
                      SAP Server URL
                    </label>
                    <input
                      id="sap-server"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="https://sap-server.company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sap-client"
                      className="block text-sm font-medium"
                    >
                      SAP Client
                    </label>
                    <input
                      id="sap-client"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="100"
                    />
                  </div>
                </>
              )}

              {connectingTo === "odoo" && (
                <>
                  <div>
                    <label
                      htmlFor="odoo-url"
                      className="block text-sm font-medium"
                    >
                      Odoo URL
                    </label>
                    <input
                      id="odoo-url"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="https://mycompany.odoo.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="odoo-database"
                      className="block text-sm font-medium"
                    >
                      Database Name
                    </label>
                    <input
                      id="odoo-database"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="mycompany-db"
                    />
                  </div>
                </>
              )}

              {connectingTo === "mailbox" && (
                <>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="yourname@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mail-server"
                      className="block text-sm font-medium"
                    >
                      Mail Server
                    </label>
                    <input
                      id="mail-server"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="imap.company.com"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>
                <input
                  id="username"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="username"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setConnectingTo(null)}
                className="px-4 py-2 border rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleConnectConfirm}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Columns */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Filter by file name ..."
            className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-4 border-b border-gray-200 py-3 px-4 bg-gray-50 rounded-t-lg font-medium text-gray-600 text-sm">
        <div className="flex items-center">
          File Name <ArrowUpDown size={14} className="ml-1 text-gray-400" />
        </div>
        <div className="flex items-center">
          Summary <ArrowUpDown size={14} className="ml-1 text-gray-400" />
        </div>
        <div className="flex items-center">
          # Pages <ArrowUpDown size={14} className="ml-1 text-gray-400" />
        </div>
        <div className="flex items-center">
          Uploaded <ArrowUpDown size={14} className="ml-1 text-gray-400" />
        </div>
      </div>

      {/* Empty State */}
      <div className="border border-dashed border-gray-300 rounded-lg bg-gray-50 p-10 flex flex-col items-center justify-center min-h-[300px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-6">
          {fileTypes.map((file, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center bg-black mb-2">
                {file.type === "PDF" && (
                  <div className="text-gray-100 text-xs font-bold">PDF</div>
                )}
                {file.type === "Word" && (
                  <div className="text-gray-100 text-xs font-bold">DOC</div>
                )}
                {file.type === "Excel" && (
                  <div className="text-gray-100 text-xs font-bold">XLS</div>
                )}
                {file.type === "PPT" && (
                  <div className="text-gray-100 text-xs font-bold">PPT</div>
                )}
                {file.type === "Images" && (
                  <div className="text-gray-100 text-xs font-bold">IMG</div>
                )}
              </div>
              <span className="text-xs text-gray-600 font-bold">
                {file.type}
              </span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-center font-semibold">
          Drag & drop files here.
        </p>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 text-sm text-gray-600 font-semibold">
        <div className="mb-4 sm:mb-0">
          <span>{selectedRows.length} of 0 row(s) selected.</span>
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
            <span className="mr-2">Page {currentPage} of 0</span>
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

export default SourceData;
