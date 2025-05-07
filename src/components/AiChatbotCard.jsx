import React, { useState } from "react";

const AiChatbotCard = ({ onRunClick }) => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Acme Invoice Matcher
      </h2>

      <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
        <table className="w-full text-sm text-left">
          <tbody>
            <tr className="border-b">
              <td className="font-medium bg-gray-50 px-4 py-3 text-gray-700 w-1/3">
                Template
              </td>
              <td className="px-4 py-3 text-gray-700">Matching</td>
            </tr>
            <tr className="border-b">
              <td className="font-medium bg-gray-50 px-4 py-3 text-gray-700">
                Sources
              </td>
              <td className="px-4 py-3 text-gray-700">
                Invoices Mailbox, SAP Purchase Orders
              </td>
            </tr>
            <tr className="border-b">
              <td className="font-medium bg-gray-50 px-4 py-3 text-gray-700">
                Schedule
              </td>
              <td className="px-4 py-3 text-gray-700">Hourly</td>
            </tr>
            <tr>
              <td className="font-medium bg-gray-50 px-4 py-3 text-gray-700">
                Actions
              </td>
              <td className="px-4 py-3 text-gray-700">
                Flag mismatch, write note back to SAP
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <button
          onClick={onRunClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create & Run
        </button>
      </div>
    </>
  );
};

export default AiChatbotCard;
