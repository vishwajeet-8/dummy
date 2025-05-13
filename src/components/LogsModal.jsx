import ProgressBar from "./logsFile/ProgressBar";
import { useNavigate } from "react-router-dom";

const LogsModal = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      <div
        className="z-10 w-full max-w-md mx-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">System Logs</h3>
        </div>

        <ProgressBar />
        <div className="px-6 py-4 flex justify-end">
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
