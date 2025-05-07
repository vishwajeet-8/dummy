import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SourceData from "./components/SourceData";
import DataAgents from "./components/DataAgents";
import WorkflowResults from "./components/WorkflowResults";
import Chatbot from "./components/Chatbot";
import WorkflowData from "./components/WorkflowData";
import WorkflowConsistency from "./components/WorkflowConsistency";
import Logs from "./components/logs/Logs";
import { BarProvider } from "./context/BarProvider";

const App = () => {
  return (
    <BarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/source-data" element={<SourceData />} />
            <Route path="/data-agents" element={<DataAgents />} />
            <Route path="/workflow-results" element={<WorkflowResults />} />
            <Route path="/agents-chatbot" element={<Chatbot />} />
            <Route path="/workflow-data" element={<WorkflowData />} />
            <Route
              path="/workflow-data/:filename"
              element={<WorkflowConsistency />}
            />
            <Route path="/logs" element={<Logs />} />
          </Route>
        </Routes>
      </Router>
    </BarProvider>
  );
};

export default App;
