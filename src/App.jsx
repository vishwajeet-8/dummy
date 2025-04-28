import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SourceData from "./components/SourceData";
import DataAgentsScreen from "./components/DataAgentsScreen";
import WorkflowResults from "./components/WorkflowResults";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/source-data" element={<SourceData />} />
          <Route path="/data-agents-screen" element={<DataAgentsScreen />} />
          <Route path="/workflow-results" element={<WorkflowResults />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
