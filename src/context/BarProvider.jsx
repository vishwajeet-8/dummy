import { useState } from "react";
import { BarContext } from "./barContext";

export const BarProvider = ({ children }) => {
  const [logs, setLogs] = useState([
    {
      id: 1,
      status: "success",
      message: "Agent initialization successful",
      timestamp: "00:00",
      details: "Environment loaded. Resources allocated.",
    },
    {
      id: 2,
      status: "success",
      message: "Connecting to Gmail API",
      timestamp: "00:03",
      details: "Authentication successful. Using service account credentials.",
    },
    {
      id: 3,
      status: "success",
      message: "Fetched 24 new emails from inbox",
      timestamp: "00:08",
      details:
        'Filter applied: subject:(invoice OR "purchase order" OR payment) AND after:2025/04/20',
    },
    {
      id: 4,
      status: "success",
      message: "Extracted 17 PDF attachments",
      timestamp: "00:12",
      details: "12 invoices, 3 purchase orders, 2 receipts identified.",
    },
    {
      id: 5,
      status: "success",
      message: "OCR processing complete",
      timestamp: "00:23",
      details:
        "Average confidence: 94.2%. Used enhanced OCR for 3 low-quality scans.",
    },
    {
      id: 6,
      status: "info",
      message: "Connecting to SAP ERP system",
      timestamp: "00:34",
      details: "Using production credentials with read-write access.",
    },
    {
      id: 7,
      status: "info",
      message: "SAP connection established",
      timestamp: "00:38",
      details: "Session ID: SAP-2025-05-02-F8A3. API version 3.1.4.",
    },
    {
      id: 8,
      status: "info",
      message: "Reading invoice headers from SAP",
      timestamp: "00:42",
      details:
        "Accessing tables: BKPF, BSEG, BSID. Pull rate: 145 records/sec.",
    },
  ]);

  return (
    <BarContext.Provider value={{ logs, setLogs }}>
      {children}
    </BarContext.Provider>
  );
};
