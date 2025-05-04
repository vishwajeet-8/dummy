import React, { useState } from "react";
import LogsModal from "./LogsModal";

const AiChatbotCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Acme Invoice Matcher
      </h2>
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium">Template:</span> Matching
        </p>
        <p>
          <span className="font-medium">Sources:</span> Invoices Mailbox, SAP
          Purchase Orders
        </p>
        <p>
          <span className="font-medium">Schedule:</span> Hourly
        </p>
        <p>
          <span className="font-medium">Actions:</span> Flag mismatch, write
          note back to SAP
        </p>
      </div>
      <div className="mt-6">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create & Run
        </button>
        {isOpen && <LogsModal setIsOpen={setIsOpen} />}
      </div>
    </>
  );
};

export default AiChatbotCard;
