import { useState } from "react";
import { AgentContext } from "./agentContext";

export const AgentProvider = ({ children }) => {
  const [agents, setAgents] = useState(() => {
    try {
      const stored = localStorage.getItem("agents");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to parse agents from localStorage", error);
      return [];
    }
  });

  const setAgentsAndStore = (newAgents) => {
    setAgents(newAgents);
    localStorage.setItem("agents", JSON.stringify(newAgents));
  };

  return (
    <AgentContext.Provider value={{ agents, setAgents: setAgentsAndStore }}>
      {children}
    </AgentContext.Provider>
  );
};
