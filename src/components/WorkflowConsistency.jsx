import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCheckIcon,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  CircleX,
  FileText,
  X,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { BarContext } from "../context/barContext";

const WorkflowConsistency = () => {
  const [expandedInvoices, setExpandedInvoices] = useState({});
  const [pdfUrl, setPdfUrl] = useState(null);
  const [showContract, setShowContract] = useState(false);
  const [contract, setContract] = useState();
  const [invoices, setInvoices] = useState([]);
  const { agreement } = useContext(BarContext);
  const { filename } = useParams();

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
    setShowContract((prev) => !prev);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/get-pdf/${filename}`,
        { responseType: "blob" }
      );
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      console.log(url);
      setPdfUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getContractInvoices = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/contract-invoices/${filename}`
        );
        setContract(response.data.contract);
        setInvoices(response.data.invoices);
      } catch (error) {
        console.log(error);
      }
    };

    getContractInvoices();
  }, []);

  return (
    <div className="flex border-t-2 border-gray-200 mt-5 bg-white rounded-lg shadow-md">
      {/* Left side - Invoice list */}
      <div
        className={`${
          showContract ? "w-2/5" : "w-full"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-gray-800">{agreement}</h1>

            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              {contract}
            </span>
          </div>
          <button
            className="mt-2 flex items-center text-sm text-gray-600 hover:text-blue-600"
            onClick={() => getPdf(filename)}
          >
            <FileText size={16} className="text-gray-500 mr-2" />
            <span>Show contract</span>
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-md font-medium text-gray-700 mb-3">
            Reconciled Invoices:
          </h3>

          <div className="space-y-4">
            {invoices.map((invoice, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md p-4"
              >
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-5">
                    <h2 className="font-medium">{invoice}</h2>
                    <ArrowRight />
                    <h2>{agreement}</h2>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    className="mt-2 flex items-center text-sm text-gray-600 hover:text-blue-600"
                    onClick={() => {
                      toggleInvoice(index);
                      getPdf(invoice);
                    }}
                  >
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${
                        expandedInvoices[index] ? "transform rotate-90" : ""
                      }`}
                    />
                    <span className="ml-1">Show invoice</span>
                  </button>
                  <div>
                    <CircleCheck className="text-green-600" />
                    <CircleX className="text-red-600" />
                  </div>
                </div>
                {expandedInvoices[index] && (
                  <div className="mt-2 p-2 bg-gray-50 rounded">
                    <p className="text-sm text-gray-600">
                      Invoice details would display here
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Contract PDF viewer */}
      {showContract && (
        <div className="w-3/5 border-l border-gray-200 transition-all duration-300 ease-in-out">
          <div className="p-2 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-md font-medium text-gray-700">
              Contract Details
            </h3>
            <button
              className="p-1 hover:bg-gray-100 rounded-full"
              onClick={toggleContractView}
            >
              <X size={18} className="text-gray-500" />
            </button>
          </div>
          <div className="h-full">
            {pdfUrl ? (
              <iframe
                src={pdfUrl}
                className="w-full h-screen max-h-[calc(100vh-10rem)]"
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

export default WorkflowConsistency;
