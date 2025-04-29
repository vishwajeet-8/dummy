import { MoveLeft, Pin, SendIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Chatbot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus the input field when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate API response delay
    setTimeout(() => {
      // Add bot response
      const responses = [
        "I'm here to help! What would you like to know?",
        "That's an interesting question. Let me think about it...",
        "I understand what you're asking. Here's what I know.",
        "Thanks for sharing that with me.",
        "I'd be happy to assist with that request.",
        "I'm not entirely sure, but here's my best answer.",
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: randomResponse },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  const handleClick = () => {
    navigate("/data-agents");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 rounded-lg shadow-sm p-6 mx-auto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 py-4 px-4 flex items-center rounded">
        <div className="mx-auto flex justify-between items-center w-full">
          <button className="cursor-pointer" onClick={handleClick}>
            <MoveLeft />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Data Agents</h1>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mx-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`my-4 flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl ${
                  message.role === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white border border-gray-200 shadow-sm text-gray-800 rounded-bl-none"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="my-4 flex justify-start">
              <div className="bg-white border border-gray-200 shadow-sm rounded-lg rounded-bl-none p-4 text-gray-800">
                <div className="flex space-x-2">
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "600ms" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Enhanced Input Form */}
      <div className="mx-auto w-full">
        <div className="relative flex items-center bg-gray-100 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
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
            placeholder="Type your message..."
            className="flex-1 py-4 px-3 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
          />

          {/* Attachment button */}
          <button
            className="text-gray-400 hover:text-gray-600 mr-2"
            title="Add attachment"
          >
            <Pin />
          </button>

          {/* Send button with animation */}
          <button
            onClick={handleSubmit}
            disabled={isLoading || input.trim() === ""}
            className={`flex items-center justify-center min-w-[50px] h-10 mx-2 my-2 rounded-lg transition-all duration-200 ${
              isLoading || input.trim() === ""
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg transform hover:scale-105"
            }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <SendIcon />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
