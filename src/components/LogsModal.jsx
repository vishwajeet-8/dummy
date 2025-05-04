import ProgressBar from "./logs/ProgressBar";
import { useNavigate } from "react-router-dom";

const LogsModal = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const closeModal = () => setIsOpen(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-opacity-30 backdrop-blur-sm transition-all duration-300"
        onClick={closeModal}
      ></div>

      {/* Modal content */}
      <div
        className="bg-white rounded-lg shadow-xl z-10 w-full max-w-md mx-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">System Logs</h3>
        </div>

        {/* Modal body */}
        <ProgressBar />

        {/* Modal footer */}
        <div className="px-6 py-4 bg-gray-50 flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 mr-2"
          >
            Close
          </button>
          <button
            onClick={() => navigate("/logs")}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            See Full Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogsModal;
