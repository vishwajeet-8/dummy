import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SourceData from "./components/SourceData";
import DataAgents from "./components/DataAgents";
import WorkflowResults from "./components/WorkflowResults";
import Chatbot from "./components/Chatbot";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/source-data" element={<SourceData />} />
          <Route path="/data-agents" element={<DataAgents />} />
          <Route path="/workflow-results" element={<WorkflowResults />} />
          <Route path="/agents-chatbot" element={<Chatbot />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
