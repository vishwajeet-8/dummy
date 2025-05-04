import {
  MoveLeft,
  Paperclip,
  SendIcon,
  Maximize2,
  Minimize2,
  X,
  Plus,
  Bot,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AiChatbotCard from "./AiChatbotCard";

function Chatbot() {
  const navigate = useNavigate();
  const location = useLocation();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! 👋  What would you like this agent to do?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [responseIndex, setResponseIndex] = useState(0);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Check if we should animate the entry
  useEffect(() => {
    const shouldAnimate = location.state?.animateEntry === true;
    if (shouldAnimate) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [location]);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus the input field when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      // Adjust container height for mobile devices with virtual keyboards
      if (window.innerWidth < 768) {
        document.documentElement.style.setProperty(
          "--vh",
          `${window.innerHeight * 0.01}px`
        );
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const orderedResponses = [
    "Got it. Which data sources should I use?",
    "Schedule?",
    <AiChatbotCard/>
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message
    const userMessage = {
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setIsThinking(true);

    // Simulate thinking delay
    setTimeout(() => {
      setIsThinking(false);
    }, 800);

    // Simulate response delay
    setTimeout(() => {
      const nextResponse = orderedResponses[responseIndex];
      if (nextResponse !== undefined) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: nextResponse,
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
        setResponseIndex((prevIndex) => prevIndex + 1); // increment only if more responses available
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleClick = () => {
    navigate("/data-agents");
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // List of example conversation starters
  const conversationStarters = [
    "Match invoices to POs and flag any price or quantity mismatches.",
    "Scan QC images for cracks or scratches, then email QA with defect shots.",
    "Check inventory levels every night and draft POs for items below reorder point.",
  ];

  return (
    <div className="relative">
      <div
        className={`${
          isFullscreen ? "fixed inset-0 z-50 bg-white" : "relative"
        } flex flex-col h-screen max-h-screen bg-slate-50 rounded-lg shadow-lg p-0 mx-auto overflow-hidden ${
          isAnimating ? "animate-slide-in-bottom" : ""
        }`}
        style={{ height: "calc(var(--vh, 1vh) * 100)" }} // Responsive height fix for mobile
      >
        {/* Header with glass effect */}
        <header className="bg-white bg-opacity-80 backdrop-blur-lg shadow-sm z-10 py-2 sm:py-3 px-3 sm:px-4 flex items-center sticky top-0 border-b border-slate-200 mx-2 sm:mx-3 md:mx-4 lg:mx-5 my-2 sm:my-3 md:my-4 rounded-xl">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <button
                className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 transition-colors flex items-center text-slate-700"
                onClick={handleClick}
                aria-label="Back to documents"
              >
                <MoveLeft size={18} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="" width="40px" />
              <h1 className="text-base sm:text-lg font-semibold text-slate-800">
                Data Agents AI
              </h1>
            </div>

            <div className="flex items-center">
              <button
                className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 transition-colors flex items-center text-slate-700"
                onClick={toggleFullscreen}
                aria-label={
                  isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                }
              >
                {isFullscreen ? (
                  <Minimize2 size={18} />
                ) : (
                  <Maximize2 size={18} />
                )}
              </button>
              {isFullscreen && (
                <button
                  className="p-1.5 sm:p-2 ml-1 rounded-full hover:bg-slate-100 transition-colors flex items-center text-slate-700"
                  onClick={toggleFullscreen}
                  aria-label="Close fullscreen"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Welcome message - Only show on first load or reset */}
        {messages.length === 1 && (
          <div className="px-3 sm:px-4 md:px-6 mt-2 mb-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5 max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-base sm:text-lg font-medium text-slate-800 mb-2 sm:mb-3">
                👋 Welcome to InfraHive AI Agent Studio
              </h2>
              <p className="text-sm text-slate-600 mb-3">
                I’m your factory’s data brain—ready to read, label, and act on
                every messy file so your team can focus on bigger wins.
              </p>
              <p className="text-sm text-slate-600 mb-3">
                Just tell me the outcome you need and I’ll spin up an agent that
                does the heavy lifting in the background.
              </p>

              <h3 className="text-xs sm:text-sm font-medium text-slate-700 mb-2">
                Try asking me to:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {conversationStarters.map((starter, index) => (
                  <button
                    key={index}
                    className="text-left p-2 sm:p-3 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-700 text-xs sm:text-sm transition-colors border border-slate-200 truncate"
                    onClick={() => {
                      setInput(starter);
                      inputRef.current.focus();
                    }}
                  >
                    {starter}
                  </button>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span>
                  <Bot />
                </span>
                <h3 className="text-xs sm:text-sm font-medium text-slate-700">
                  One chat, one click, hours saved. Let’s automate something
                  awesome!
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Chat Container */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto py-2 sm:py-4 px-3 sm:px-4 md:px-6"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.01) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0, 0, 0, 0.01) 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 pb-2 sm:pb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } group`}
              >
                <div
                  className={`flex flex-col space-y-1 ${
                    message.role === "user" ? "items-end" : "items-start"
                  } max-w-[85%] sm:max-w-[75%] md:max-w-[70%]`}
                >
                  {message.role === "assistant" && (
                    <div className="flex items-center ml-2 mb-1">
                      <img src="/logo.png" alt="" width="20px" />
                      <span className="text-xs font-medium text-slate-600 ml-2">
                        AI Assistant
                      </span>
                    </div>
                  )}

                  <div
                    className={`p-2.5 sm:p-3.5 md:p-4 rounded-2xl ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-gray-100 to-gray-200 text-black shadow-md"
                        : "bg-white border border-slate-200 text-slate-800 shadow-sm"
                    } text-sm sm:text-base`}
                  >
                    {message.content}
                  </div>

                  <div
                    className={`text-xs text-slate-500 mx-2 opacity-0 group-hover:opacity-100 transition-opacity ${
                      message.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex flex-col max-w-[85%] sm:max-w-[75%] md:max-w-[70%] space-y-1">
                  <div className="flex items-center ml-2 mb-1">
                    <img src="/logo.png" alt="" width="20px" />
                    <span className="text-xs font-medium text-slate-600 ml-2">
                      AI Assistant
                    </span>
                  </div>

                  <div className="p-3 sm:p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    {isThinking ? (
                      <div className="flex items-center text-slate-500 text-xs sm:text-sm">
                        <span className="mr-2 sm:mr-3">Thinking</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full animate-pulse delay-150"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center text-slate-500 text-xs sm:text-sm">
                        <span className="mr-2 sm:mr-3">
                          Generating response
                        </span>
                        <div className="flex space-x-1">
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                          <div
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-bounce"
                            style={{ animationDelay: "600ms" }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Enhanced Input Form with glass effect */}
        <div className="px-2 sm:px-3 md:px-4 lg:px-5 pb-2 sm:pb-3 md:pb-4 pt-1 sm:pt-2 bg-slate-50">
          <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto">
            <div className="relative flex items-center bg-white rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-400 transition-all duration-200">
              {/* Input field */}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder="Message the AI assistant..."
                className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 bg-transparent focus:outline-none text-slate-800 placeholder-slate-400 rounded-xl text-sm sm:text-base"
                style={{ caretColor: "#3b82f6" }}
              />

              {/* Mobile add button (for additional actions on small screens) */}
              <button
                type="button"
                className="md:hidden text-slate-400 hover:text-slate-600 p-1.5 sm:p-2 hover:bg-slate-50 rounded-full transition-colors"
                title="Add attachment"
              >
                <Plus size={18} />
              </button>

              {/* Attachment button (hidden on smallest screens) */}
              <button
                type="button"
                className="hidden md:block text-slate-400 hover:text-slate-600 p-1.5 sm:p-2 hover:bg-slate-50 rounded-full transition-colors"
                title="Add attachment"
              >
                <Paperclip size={18} />
              </button>

              {/* Send button with animation */}
              <button
                type="submit"
                disabled={isLoading || input.trim() === ""}
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mx-1 my-1 rounded-lg transition-all duration-200 ${
                  isLoading || input.trim() === ""
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transform hover:scale-105"
                }`}
              >
                {isLoading ? (
                  <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <SendIcon size={16} className="sm:hidden" />
                    <SendIcon size={18} className="hidden sm:block" />
                  </>
                )}
              </button>
            </div>

            {/* Hint text - hidden on small screens */}
            <div className="mt-1 text-xs text-slate-500 text-center hidden sm:block">
              <span>Type / to see available commands</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
