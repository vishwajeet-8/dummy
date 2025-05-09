import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronRight, CircleCheck, CircleX, FileText, X } from "lucide-react";
import { invoicesError, initialData } from "../utils";

const WorkflowData = () => {
  const [expandedInvoices, setExpandedInvoices] = useState({});
  const [pdfUrl, setPdfUrl] = useState(null);
  const [showContract, setShowContract] = useState(false);
  const [allPdf, setAllPdf] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const toggleInvoice = (id) => {
    setExpandedInvoices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleContractView = () => {
    setShowContract((prev) => !prev);
  };

  const getPdf = async (filename) => {
    setShowContract(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/get-pdf/${filename}`,
        { responseType: "blob" }
      );
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getContractInvoices = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/contract-invoices`
        );
        setAllPdf(response.data);
        setIsLoad(false);
      } catch (error) {
        console.log(error);
      }
    };

    getContractInvoices();
  }, []);

  return isLoad ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          width: "2rem",
          height: "2rem",
          borderWidth: "4px",
          borderStyle: "solid",
          borderColor: "#93c5fd", // Tailwind's blue-300
          borderTopColor: "#2563eb", // Tailwind's blue-600
          borderRadius: "9999px",
          animation: "spin 1s linear infinite",
        }}
      />
      <style>
        {`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}
      </style>
    </div>
  ) : (
    <div className="flex">
      {/* Left side - Invoice list */}
      <div
        className={`flex flex-col ${
          showContract ? "w-1/2" : "w-full"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="h-screen overflow-y-auto bg-white rounded-l-lg">
          {allPdf.map((pdf, index) => (
            <div
              key={index}
              className="mb-4 mx-2 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-5 border-b border-gray-100">
                <div className="flex flex-col space-y-3">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-semibold text-gray-800">
                      {initialData[index].company}
                    </h1>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {pdf.contract}
                    </span>
                  </div>
                  <button
                    className="mt-2 flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors group"
                    onClick={() => getPdf(pdf.contract)}
                  >
                    <FileText
                      size={16}
                      className="text-gray-500 mr-2 group-hover:text-blue-600 transition-colors"
                    />
                    <span>Show contract</span>
                    <ChevronRight
                      size={16}
                      className="ml-1 group-hover:transform group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-md font-medium text-gray-700 mb-4">
                  Reconciled Invoices:
                </h3>

                <div className="space-y-4">
                  {pdf.invoices.map((invoice, invoiceIndex) => (
                    <div
                      key={invoiceIndex}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-200 transition-colors"
                    >
                      <div className="flex flex-col space-y-2">
                        <div className="flex flex-col space-y-2">
                          <h2 className="font-medium text-gray-800">
                            {invoice}
                          </h2>
                          <h2 className="font-medium text-gray-700">
                            {initialData[index].source}
                          </h2>
                        </div>

                        <div className="flex justify-between items-center">
                          <button
                            className="mt-2 flex items-center text-sm text-gray-600 hover:text-blue-600 group transition-colors"
                            onClick={() => {
                              toggleInvoice(invoiceIndex);
                              getPdf(invoice);
                            }}
                          >
                            <ChevronRight
                              size={16}
                              className={`transition-transform group-hover:text-blue-600 ${
                                expandedInvoices[invoiceIndex]
                                  ? "transform rotate-90"
                                  : ""
                              }`}
                            />
                            <span className="ml-1">Show invoice</span>
                          </button>
                          <div>
                            {!invoicesError[index].invoices[invoiceIndex] ? (
                              <CircleCheck className="text-green-600" />
                            ) : (
                              <CircleX className="text-red-600" />
                            )}
                          </div>
                        </div>

                        {expandedInvoices[invoiceIndex] && (
                          <div
                            className={`mt-2 p-3 rounded-md ${
                              !invoicesError[index].invoices[invoiceIndex]
                                ? ""
                                : "bg-red-50"
                            }`}
                          >
                            <p className="text-sm text-gray-600">
                              {!invoicesError[index].invoices[invoiceIndex]
                                ? "Invoice is valid"
                                : invoicesError[index].invoices[invoiceIndex]}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Contract PDF viewer */}
      {showContract && (
        <div className="w-1/2 border-l border-gray-200 bg-white rounded-r-lg transition-all duration-300 ease-in-out">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h3 className="text-md font-medium text-gray-700">
              Contract Details
            </h3>
            <button
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              onClick={toggleContractView}
            >
              <X size={18} className="text-gray-500" />
            </button>
          </div>
          <div className="h-full">
            {pdfUrl ? (
              <iframe
                src={pdfUrl}
                className="w-full h-screen max-h-[calc(100vh-4rem)]"
                title="PDF Viewer"
              />
            ) : (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500">Loading contract...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkflowData;
