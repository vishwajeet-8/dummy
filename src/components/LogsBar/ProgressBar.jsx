import { Clock, Mail, FileText, Search, Database, Server } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { BarContext } from "../../context/bar/barContext";

const ProgressBar = () => {
  const { logs, setLogs } = useContext(BarContext);

  // Changed initial progress to 1% instead of 22%
  const [progress, setProgress] = useState(1);
  // Changed initial step to 1 instead of 3
  const [currentStep, setCurrentStep] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0); // Reset to 0 seconds

  const [isload, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false);
    }, 2000);
  }, []);

  // Define the workflow steps - updated completion status to match starting at step 1
  const workflowSteps = [
    {
      id: 1,
      name: "Email Scanning",
      icon: Mail,
      completed: false,
      active: true,
    },
    { id: 2, name: "Document Extraction", icon: FileText, completed: false },
    {
      id: 3,
      name: "Invoice Processing",
      icon: Search,
      completed: false,
      active: false,
    },
    { id: 4, name: "PO Matching", icon: Database, completed: false },
    { id: 5, name: "ERP Update", icon: Server, completed: false },
  ];

  // Stats for the execution
  const executionStats = {
    startTime: "10:43 AM",
    estimatedCompletion: "10:52 AM",
    docsProcessed: 5,
    docsRemaining: 12,
    errorsFound: 1,
    warnings: 2,
  };

  // Add this useEffect to update progress when currentStep changes
  useEffect(() => {
    const stepsCompleted = currentStep - 1;
    const totalSteps = workflowSteps.length;
    const newProgress = (stepsCompleted / totalSteps) * 100;
    setProgress(Math.max(1, newProgress)); // Ensure progress is at least 1%
  }, [currentStep]);

  // Simulated log progression - adjusted to start from the beginning
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);

      // Update progress
      if (progress < 100) {
        setProgress((prev) => {
          // Start with slower progress in the beginning
          const increment =
            prev < 10 ? Math.random() * 0.3 : Math.random() * 0.8;
          const newProgress = prev + increment;
          return newProgress > 100 ? 100 : newProgress;
        });
      } else {
        clearInterval(timer);
        setIsRunning(false);
      }

      // Add new logs at certain intervals - updated to match new timeline
      if (elapsedTime === 5) {
        addNewLog(
          "info",
          "Starting email scan",
          "Connecting to Exchange server and scanning for new invoices."
        );
      }
      if (elapsedTime === 10) {
        addNewLog(
          "info",
          "Identified 17 new invoice emails",
          "Filtering attachments for processing."
        );
      }
      if (elapsedTime === 15) {
        addNewLog(
          "success",
          "Email scan complete",
          "Found 17 emails with 22 attachments for processing."
        );
        setCurrentStep(2); // Move to document extraction
      }
      if (elapsedTime === 20) {
        addNewLog(
          "info",
          "Beginning document extraction",
          "Processing PDF attachments and identifying invoice documents."
        );
      }
      if (elapsedTime === 30) {
        addNewLog(
          "info",
          "Extracting data from documents",
          "Converting PDFs to structured data format."
        );
      }
      if (elapsedTime === 40) {
        addNewLog(
          "success",
          "Document extraction complete",
          "Successfully processed 17 documents."
        );
        setCurrentStep(3); // Move to invoice processing
      }
      if (elapsedTime === 45) {
        addNewLog(
          "info",
          "Analyzing invoice data from PDFs",
          "Extracting line items, total amounts, tax information, and vendor details."
        );
      }
      if (elapsedTime === 50) {
        addNewLog(
          "warning",
          "Missing tax ID on invoice #INV-2025-0423",
          "Will attempt to retrieve from vendor master data."
        );
      } else if (elapsedTime === 53) {
        addNewLog(
          "success",
          "Retrieved missing tax ID from vendor master",
          "Vendor: ABC Supplies, Tax ID: EU372819947"
        );
      } else if (elapsedTime === 58) {
        addNewLog(
          "info",
          "Starting PO matching process",
          "Comparing invoice line items with purchase order data."
        );
      } else if (elapsedTime === 62) {
        addNewLog(
          "error",
          "Price mismatch detected on invoice #INV-2025-0423",
          "Invoice amount: $4,235.60, PO amount: $3,890.25. Difference: $345.35"
        );
      } else if (elapsedTime === 65) {
        addNewLog(
          "info",
          'Retrieving contract terms for vendor "ABC Supplies"',
          "Checking for authorized price adjustments or rate changes."
        );
      } else if (elapsedTime === 70) {
        addNewLog(
          "success",
          "Found approved price adjustment in contract",
          "Contract #CT-ABC-2025-03 authorizes 8.9% increase effective 04/15/2025"
        );
        setCurrentStep(4); // Move to PO matching
      } else if (elapsedTime === 75) {
        addNewLog(
          "info",
          "Detailed PO matching in progress",
          "Line-by-line comparison of remaining documents."
        );
      } else if (elapsedTime === 80) {
        addNewLog(
          "info",
          "Connecting to SAP for posting",
          "Opening transaction MIRO for invoice posting."
        );
      } else if (elapsedTime === 85) {
        addNewLog(
          "success",
          "Successfully matched 4 invoices to POs",
          "Ready for ERP update processing."
        );
        setCurrentStep(5); // Move to ERP update
      } else if (elapsedTime === 90) {
        addNewLog(
          "info",
          "Preparing ERP updates for all matched documents",
          "Generating posting batch."
        );
      } else if (elapsedTime === 95) {
        addNewLog(
          "success",
          "Successfully posted 4 invoices to SAP",
          "Transaction IDs: 2025050201, 2025050202, 2025050203, 2025050204"
        );
      } else if (elapsedTime === 100) {
        addNewLog(
          "success",
          "Updated vendor payment status",
          "Payment terms: Net 30, Due date: 06/01/2025"
        );
        setProgress(100);
        setIsRunning(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, elapsedTime, progress]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Add a new log entry
  const addNewLog = (status, message, details) => {
    const newLog = {
      id: Date.now(),
      status,
      message,
      timestamp: formatTime(elapsedTime),
      details,
    };

    setLogs((prev) => [newLog, ...prev]);
  };

  return isload ? (
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
    <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Workflow Progress</h2>
        <div className="flex items-center text-sm">
          <Clock size={16} className="mr-1 text-gray-500" />
          <span className="font-medium">{formatTime(elapsedTime)}</span>
          <span className="mx-2 text-gray-400">|</span>
          <span className="text-gray-600">
            Started at {executionStats.startTime}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-medium">{Math.round(progress)}% Complete</span>
          <span className="text-gray-500">
            Est. completion: {executionStats.estimatedCompletion}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full transition-all duration-300"
            style={{
              width: `${Math.max(1, progress)}%`,
              backgroundColor: `#4f46e5`, // Using indigo-600 for better visibility
            }}
          ></div>
        </div>
      </div>

      {/* Workflow steps */}
      <div className="flex items-center justify-between">
        {workflowSteps.map((step, index) => {
          // Dynamically determine if step is completed based on currentStep
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <div key={step.id} className="flex-1 relative">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                ${
                  isCompleted
                    ? "bg-green-100 text-green-600"
                    : isActive
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-400"
                }`}
                >
                  <step.icon size={20} />
                </div>
                <span
                  className={`mt-2 text-xs ${
                    isActive ? "font-medium text-blue-600" : "text-gray-500"
                  }`}
                >
                  {step.name}
                </span>
              </div>

              {/* Connector line between steps */}
              {index < workflowSteps.length - 1 && (
                <div className="absolute top-5 h-0.5 w-full">
                  <div
                    className={`h-full ${
                      isCompleted ? "bg-green-500" : "bg-gray-200"
                    }`}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
