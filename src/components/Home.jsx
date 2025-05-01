import React, { useState, useEffect } from "react";
import {
  Home as HomeIcon,
  Database,
  Bot,
  Activity,
  Plus,
  PlayCircle,
  Bell,
  User,
  Menu,
  ChevronRight,
  ChevronsUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Cpu,
  HardDrive,
  BarChart2,
  X,
  ArrowLeft,
  MoveRight,
  AlignRight,
  ArrowRight,
} from "lucide-react";

{
  /* Top Navigation Bar */
}
<header className="bg-white backdrop-blur-sm bg-opacity-90 px-4 md:px-6 py-3 flex items-center justify-between shadow-md border-b border-gray-200">
  <div className="flex items-center">
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg mr-3 shadow-md">
      <Database className="text-white" size={20} />
    </div>
    <div>
      <h1 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
        InfraHive AI
      </h1>
      <p className="text-xs text-gray-500 hidden sm:block">
        AI Data Brain for Factories
      </p>
    </div>
  </div>

  {/* Horizontal Navigation */}
  <nav className="hidden md:flex items-center space-x-1">
    <a
      href="/"
      className="px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium flex items-center border border-blue-100"
    >
      <HomeIcon size={16} className="mr-2 text-blue-500" /> Home
    </a>
    <a
      href="/source-data"
      className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center hover:border hover:border-gray-200 transition-all duration-200"
    >
      <Database size={16} className="mr-2" /> Source Data
    </a>
    <a
      href="/agents"
      className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center hover:border hover:border-gray-200 transition-all duration-200"
    >
      <Bot size={16} className="mr-2" /> Data Agents
    </a>
    <a
      href="/results"
      className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center hover:border hover:border-gray-200 transition-all duration-200"
    >
      <Activity size={16} className="mr-2" /> Results
    </a>
  </nav>

  <div className="flex items-center space-x-2 md:space-x-4">
    <select className="bg-white text-gray-800 border border-gray-300 rounded-lg px-2 md:px-3 py-1 text-sm shadow-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-300 focus:outline-none hidden sm:block">
      <option>Factory HQ</option>
      <option>Plant 2</option>
      <option>Warehouse 3</option>
    </select>
    <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200 hidden sm:block">
      <Bell size={20} />
    </button>
    <button className="px-3 md:px-4 py-1 md:py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg flex items-center shadow-sm transition-all duration-200 ease-in-out text-xs md:text-sm">
      <PlayCircle size={16} className="mr-1" />
      <span className="hidden sm:inline">Run All</span>
      <span className="sm:hidden">Run</span>
    </button>
    <button className="p-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 shadow-sm hidden sm:block">
      <User size={22} className="text-gray-700" />
    </button>
    <button
      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 md:hidden"
      // onClick={toggleMobileMenu}
    >
      <Menu size={24} />
    </button>
  </div>
</header>;

const Home = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activityFeed, setActivityFeed] = useState([
    {
      id: 1,
      type: "success",
      text: "Invoice Agent processed 24 files",
      time: "2 min ago",
      link: "/results/inv-24",
    },
    {
      id: 2,
      type: "error",
      text: "PO Matching failed - missing reference data",
      time: "15 min ago",
      link: "/results/po-err-3",
    },
    {
      id: 3,
      type: "info",
      text: "New connector synced (SAP ERP - Invoices)",
      time: "45 min ago",
      link: "/connectors/sap-3",
    },
    {
      id: 4,
      type: "success",
      text: "Error Detection Agent found 3 discrepancies",
      time: "1 hour ago",
      link: "/results/err-3",
    },
    {
      id: 5,
      type: "success",
      text: "Inventory Agent updated 156 records",
      time: "2 hours ago",
      link: "/results/inv-156",
    },
    {
      id: 6,
      type: "info",
      text: "Email Scanner added 17 new documents",
      time: "3 hours ago",
      link: "/connectors/email-1",
    },
    {
      id: 7,
      type: "warning",
      text: "Low confidence on 2 scanned receipts",
      time: "5 hours ago",
      link: "/results/low-conf-2",
    },
    {
      id: 8,
      type: "success",
      text: "ERP Update Agent completed successfully",
      time: "6 hours ago",
      link: "/results/erp-upd-8",
    },
    {
      id: 9,
      type: "info",
      text: "System maintenance completed",
      time: "12 hours ago",
      link: "/system/maint-1",
    },
    {
      id: 10,
      type: "success",
      text: "Daily backup completed successfully",
      time: "23 hours ago",
      link: "/system/backup-daily",
    },
  ]);

  const [kpis, setKpis] = useState({
    filesProcessed: 12458,
    activeAgents: 8,
    errorsCaught: 326,
    hoursSaved: 214,
  });

  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 42,
    gpu: 68,
    db: 37,
  });

  // Mock data updates to simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update KPIs slightly
      setKpis((prev) => ({
        filesProcessed: prev.filesProcessed + Math.floor(Math.random() * 5),
        activeAgents: prev.activeAgents,
        errorsCaught: prev.errorsCaught + (Math.random() > 0.7 ? 1 : 0),
        hoursSaved: prev.hoursSaved + (Math.random() > 0.6 ? 1 : 0),
      }));

      // Update system metrics
      setSystemMetrics((prev) => ({
        cpu: Math.min(100, Math.max(20, prev.cpu + (Math.random() * 10 - 5))),
        gpu: Math.min(100, Math.max(30, prev.gpu + (Math.random() * 12 - 6))),
        db: Math.min(100, Math.max(10, prev.db + (Math.random() * 6 - 3))),
      }));

      // 20% chance to add a new activity
      if (Math.random() > 0.8) {
        const newTypes = ["success", "info", "warning", "error"];
        const newType = newTypes[Math.floor(Math.random() * newTypes.length)];
        const newMessages = [
          "Invoice batch processed successfully",
          "New documents detected in shared folder",
          "OCR confidence below threshold on 3 docs",
          "Agent execution completed",
          "Email connector sync completed",
        ];
        const newMessage =
          newMessages[Math.floor(Math.random() * newMessages.length)];

        setActivityFeed((prev) => [
          {
            id: Date.now(),
            type: newType,
            text: newMessage,
            time: "just now",
            link: `/results/${Date.now()}`,
          },
          ...prev.slice(0, 19),
        ]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Completion handlers for onboarding
  const [onboardingSteps, setOnboardingSteps] = useState({
    connector: false,
    agent: false,
    run: false,
  });

  const completeOnboardingStep = (step) => {
    const newSteps = { ...onboardingSteps, [step]: true };
    setOnboardingSteps(newSteps);
    if (Object.values(newSteps).every((step) => step)) {
      setTimeout(() => setShowOnboarding(false), 1500);
    }
  };

  // Icon mapping for activity feed
  const getActivityIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle size={18} className="text-green-500" />;
      case "error":
        return <AlertTriangle size={18} className="text-red-500" />;
      case "warning":
        return <AlertTriangle size={18} className="text-yellow-500" />;
      case "info":
      default:
        return <CheckCircle size={18} className="text-blue-500" />;
    }
  };

  // Color mapping for system gauges
  const getGaugeColor = (value) => {
    if (value < 50) return "bg-green-500";
    if (value < 75) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white px-4 md:px-6 py-3 flex items-center justify-between shadow-sm border-b border-gray-200">
        <div className="flex items-center">
          <Database className="mr-2 text-gray-700" size={24} />
          <div>
            <h1 className="text-lg md:text-xl font-bold text-gray-800">
              InfraHive AI
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block">
              AI Data Brain for Factories
            </p>
          </div>
        </div>

        {/* Horizontal Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-1">
          <a
            href="/"
            className="px-3 py-2 rounded bg-gray-100 text-gray-800 font-medium flex items-center"
          >
            <HomeIcon size={16} className="mr-2 text-gray-600" /> Home
          </a>
          <a
            href="/source-data"
            className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100 flex items-center"
          >
            <Database size={16} className="mr-2" /> Source Data
          </a>
          <a
            href="/agents"
            className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100 flex items-center"
          >
            <Bot size={16} className="mr-2" /> Data Agents
          </a>
          <a
            href="/results"
            className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100 flex items-center"
          >
            <Activity size={16} className="mr-2" /> Results
          </a>
        </nav>

        <div className="flex items-center space-x-2 md:space-x-4">
          <select className="bg-white text-gray-800 border border-gray-300 rounded-lg px-2 md:px-3 py-1 text-sm shadow-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-300 focus:outline-none hidden sm:block">
            <option>Factory HQ</option>
            <option>Plant 2</option>
            <option>Warehouse 3</option>
          </select>
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full hidden sm:block">
            <Bell size={20} />
          </button>
          <button className="px-3 md:px-4 py-1 md:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center shadow-sm transition-all duration-200 ease-in-out text-xs md:text-sm">
            <PlayCircle size={16} className="mr-1" />
            <span className="hidden sm:inline">Run All</span>
            <span className="sm:hidden">Run</span>
          </button>
          <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 hidden sm:block">
            <User size={22} className="text-gray-700" />
          </button>
          <button
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
          <div className="bg-white h-full w-4/5 max-w-xs pt-4 px-4 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Database className="mr-2 text-gray-700" size={20} />
                <h2 className="font-bold text-gray-800">InfraHive AI</h2>
              </div>
              <button
                className="p-2 text-gray-500 hover:text-gray-700"
                onClick={toggleMobileMenu}
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-4">
              <select className="w-full bg-white text-gray-800 border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Factory HQ</option>
                <option>Plant 2</option>
                <option>Warehouse 3</option>
              </select>
            </div>

            <nav className="space-y-1">
              <a
                href="/"
                className="px-4 py-3 rounded bg-gray-100 text-gray-800 font-medium flex items-center"
              >
                <HomeIcon size={18} className="mr-3 text-gray-600" /> Home
              </a>
              <a
                href="/source-data"
                className="px-4 py-3 rounded text-gray-600 hover:bg-gray-100 flex items-center"
              >
                <Database size={18} className="mr-3" /> Source Data
              </a>
              <a
                href="/agents"
                className="px-4 py-3 rounded text-gray-600 hover:bg-gray-100 flex items-center"
              >
                <Bot size={18} className="mr-3" /> Data Agents
              </a>
              <a
                href="/results"
                className="px-4 py-3 rounded text-gray-600 hover:bg-gray-100 flex items-center"
              >
                <Activity size={18} className="mr-3" /> Results
              </a>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
              <div className="flex items-center">
                <div className="p-1 rounded-full bg-gray-100">
                  <User size={20} className="text-gray-700" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">John Doe</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
        {/* Onboarding Checklist */}
        {showOnboarding && (
          <div className="bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm shadow-lg rounded-xl p-4 mb-6 border border-blue-100 overflow-hidden relative">
            <div className="flex justify-between items-center mb-3 relative z-10">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center">
                <div className="w-1 h-6 bg-blue-500 rounded-sm mr-3"></div>
                Get Started with InfraHive AI
              </h2>
              <button
                onClick={() => setShowOnboarding(false)}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-full transition-colors"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center relative z-10">
              <div
                className={`flex items-center px-3 py-2 rounded-lg ${
                  onboardingSteps.connector
                    ? "bg-green-50 text-green-600 border border-green-100"
                    : "text-gray-600"
                }`}
              >
                {onboardingSteps.connector ? (
                  <CheckCircle size={16} className="mr-2" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 bg-white shadow-sm">
                    1
                  </div>
                )}
                <span className="font-medium">Add connector</span>
              </div>
              <ChevronRight
                size={16}
                className="mx-2 sm:mx-3 text-gray-400 hidden sm:block"
              />

              <div
                className={`flex items-center mt-2 sm:mt-0 px-3 py-2 rounded-lg ${
                  onboardingSteps.agent
                    ? "bg-green-50 text-green-600 border border-green-100"
                    : "text-gray-600"
                }`}
              >
                {onboardingSteps.agent ? (
                  <CheckCircle size={16} className="mr-2" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 bg-white shadow-sm">
                    2
                  </div>
                )}
                <span className="font-medium">Create agent</span>
              </div>
              <ChevronRight
                size={16}
                className="mx-2 sm:mx-3 text-gray-400 hidden sm:block"
              />

              <div
                className={`flex items-center mt-2 sm:mt-0 px-3 py-2 rounded-lg ${
                  onboardingSteps.run
                    ? "bg-green-50 text-green-600 border border-green-100"
                    : "text-gray-600"
                }`}
              >
                {onboardingSteps.run ? (
                  <CheckCircle size={16} className="mr-2" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 bg-white shadow-sm">
                    3
                  </div>
                )}
                <span className="font-medium">Run agent</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 relative z-10">
              <button
                className="px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 text-xs sm:text-sm flex items-center shadow-sm transition-all duration-200 ease-in-out"
                onClick={() => completeOnboardingStep("connector")}
              >
                <Plus size={14} className="mr-1" />
                Add Connector
              </button>
              <button
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm flex items-center shadow-sm transition-all duration-200 ease-in-out ${
                  onboardingSteps.connector
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
                    : "bg-gray-200 text-gray-500"
                }`}
                disabled={!onboardingSteps.connector}
                onClick={() => completeOnboardingStep("agent")}
              >
                <Bot size={14} className="mr-1" />
                Create Agent
              </button>
              <button
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm flex items-center shadow-sm transition-all duration-200 ease-in-out ${
                  onboardingSteps.agent
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
                    : "bg-gray-200 text-gray-500"
                }`}
                disabled={!onboardingSteps.agent}
                onClick={() => completeOnboardingStep("run")}
              >
                <PlayCircle size={14} className="mr-1" />
                Run Agent
              </button>
            </div>
          </div>
        )}

        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 relative overflow-hidden group">
            <div className="flex items-center mb-2">
              <div className="w-1.5 h-8 rounded-sm bg-blue-500 mr-3"></div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-600">
                Files Processed (30d)
              </h3>
            </div>
            <div className="mt-3 flex items-baseline">
              <p className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {kpis.filesProcessed.toLocaleString()}
              </p>
              <span className="ml-2 text-xs text-green-500 font-semibold flex items-center bg-green-50 px-2 py-1 rounded-full">
                <ChevronsUp size={14} /> 12%
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors group/link"
              >
                View details
                <ArrowRight className="ml-3" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 relative overflow-hidden group">
            <div className="flex items-center mb-2">
              <div className="w-1.5 h-8 rounded-sm bg-green-500 mr-3"></div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-600">
                Active Agents
              </h3>
            </div>
            <div className="mt-3 flex items-baseline">
              <p className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                {kpis.activeAgents}
              </p>
              <span className="ml-2 text-xs text-green-500 font-semibold flex items-center bg-green-50 px-2 py-1 rounded-full">
                <ChevronsUp size={14} /> 3
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center text-xs font-medium text-green-600 hover:text-green-700 transition-colors group/link"
              >
                View details
                <ArrowRight className="ml-3" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 relative overflow-hidden group">
            <div className="flex items-center mb-2">
              <div className="w-1.5 h-8 rounded-sm bg-yellow-500 mr-3"></div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-600">
                Errors Caught
              </h3>
            </div>
            <div className="mt-3 flex items-baseline">
              <p className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                {kpis.errorsCaught}
              </p>
              <span className="ml-2 text-xs text-green-500 font-semibold flex items-center bg-green-50 px-2 py-1 rounded-full">
                <ChevronsUp size={14} /> 8%
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center text-xs font-medium text-yellow-600 hover:text-yellow-700 transition-colors group/link"
              >
                View details
                <ArrowRight className="ml-3" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 relative overflow-hidden group">
            <div className="flex items-center mb-2">
              <div className="w-1.5 h-8 rounded-sm bg-purple-500 mr-3"></div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-600">
                Hours Saved
              </h3>
            </div>
            <div className="mt-3 flex items-baseline">
              <p className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                {kpis.hoursSaved}
              </p>
              <span className="ml-2 text-xs text-green-500 font-semibold flex items-center bg-green-50 px-2 py-1 rounded-full">
                <ChevronsUp size={14} /> 18%
              </span>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="inline-flex items-center text-xs font-medium text-purple-600 hover:text-purple-700 transition-colors group/link"
              >
                View details
                <ArrowRight className="ml-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Activity Feed and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Activity Feed - Wider in this layout */}
          <div className="lg:col-span-3 bg-white backdrop-blur-sm bg-opacity-90 shadow-lg rounded-xl p-3 sm:p-4 hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 flex items-center">
              <div className="w-1 h-6 bg-blue-500 rounded-sm mr-3"></div>
              Activity Feed
            </h2>
            <div className="space-y-2 sm:space-y-3 max-h-80 sm:max-h-96 overflow-y-auto pr-1 sm:pr-2">
              {activityFeed.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <div className="mt-0.5 mr-2 sm:mr-3 flex-shrink-0">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-800 truncate">
                      {activity.text}
                    </p>
                    <div className="flex items-center mt-1 text-xs">
                      <span className="text-gray-500 flex-shrink-0">
                        <Clock size={12} className="inline mr-1" />
                        {activity.time}
                      </span>
                      <a
                        href={activity.link}
                        className="ml-auto text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 px-2 py-1 rounded-full transition-colors"
                      >
                        View details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Quick Actions and System Gauges */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            {/* Quick Actions */}
            <div className="bg-white backdrop-blur-sm bg-opacity-90 shadow-lg rounded-xl p-3 sm:p-4 hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center">
                <div className="w-1 h-6 bg-purple-500 rounded-sm mr-3"></div>
                Quick Actions
              </h2>
              <div className="flex flex-wrap gap-2 sm:space-y-2 lg:space-y-0 lg:block">
                <a
                  href="/connectors/new"
                  className="flex-1 min-w-0 lg:w-full text-left px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:bg-blue-50 text-xs sm:text-sm flex items-center shadow-sm transition-all duration-200 ease-in-out mb-5"
                >
                  <Plus
                    size={14}
                    className="mr-1 sm:mr-2 text-blue-500 flex-shrink-0"
                  />
                  <span className="truncate">Add Connector</span>
                </a>
                <a
                  href="/agents/new"
                  className="flex-1 min-w-0 lg:w-full text-left px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-200 hover:bg-blue-50 text-xs sm:text-sm flex items-center shadow-sm transition-all duration-200 ease-in-out mb-5"
                >
                  <Bot
                    size={14}
                    className="mr-1 sm:mr-2 text-blue-500 flex-shrink-0"
                  />
                  <span className="truncate">New Agent</span>
                </a>
                <button className="flex-1 min-w-0 lg:w-full px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 text-xs sm:text-sm flex items-center justify-center shadow-sm transition-all duration-200 ease-in-out">
                  <PlayCircle
                    size={14}
                    className="mr-1 sm:mr-2 flex-shrink-0"
                  />
                  <span className="truncate">Run All Agents</span>
                </button>
              </div>
            </div>

            {/* System Gauges */}
            <div className="bg-white backdrop-blur-sm bg-opacity-90 shadow-lg rounded-xl p-3 sm:p-4 hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center">
                <div className="w-1 h-6 bg-green-500 rounded-sm mr-3"></div>
                System Health
              </h2>
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm text-gray-600 flex items-center">
                      <Cpu size={14} className="mr-1" /> CPU Usage
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      {Math.round(systemMetrics.cpu)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`${getGaugeColor(
                        systemMetrics.cpu
                      )} h-2.5 rounded-full transition-all duration-500 ease-out`}
                      style={{ width: `${systemMetrics.cpu}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm text-gray-600 flex items-center">
                      <BarChart2 size={14} className="mr-1" /> GPU Tokens/min
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      {Math.round(systemMetrics.gpu)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`${getGaugeColor(
                        systemMetrics.gpu
                      )} h-2.5 rounded-full transition-all duration-500 ease-out`}
                      style={{ width: `${systemMetrics.gpu}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs sm:text-sm text-gray-600 flex items-center">
                      <HardDrive size={14} className="mr-1" /> DB Size
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">
                      {Math.round(systemMetrics.db)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`${getGaugeColor(
                        systemMetrics.db
                      )} h-2.5 rounded-full transition-all duration-500 ease-out`}
                      style={{ width: `${systemMetrics.db}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
