import { useState } from "react";
import { AgentContext } from "./agentContext";

export const AgentProvider = ({ children }) => {
  const [agents, setAgents] = useState(() => {
    const stored = localStorage.getItem("agents");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <AgentContext.Provider value={{ agents, setAgents }}>
      {children}
    </AgentContext.Provider>
  );
};
