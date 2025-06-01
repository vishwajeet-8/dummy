import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SourceData from "./pages/SourceData";
import DataAgents from "./pages/DataAgents";
import WorkflowResults from "./pages/WorkflowResults";
import Chatbot from "./pages/Chatbot";
import WorkflowData from "./pages/WorkflowData";
import Logs from "./components/LogsBar/Logs";
import { BarProvider } from "./context/bar/BarProvider";
import { AgentProvider } from "./context/agent/AgentProvider";
// import { record } from "rrweb";

import Tracker from "@openreplay/tracker";
import trackerAssist from "@openreplay/tracker-assist";
import WorkflowImport from "./pages/WorkflowImport";

const tracker = new Tracker({
  projectKey: "ING9EYwhdmfytCUe1C7q",
  __DISABLE_SECURE_MODE: true,
});
tracker.start();
tracker.use(trackerAssist());

// import { record } from "rrweb";

// let events = [];

// record({
//   emit(event) {
//     events.push(event);
//   },
// });

const App = () => {
  // const eventsRef = useRef([]);

  // useEffect(() => {
  //   // Start recording
  //   const stopFn = record({
  //     emit(event) {
  //       eventsRef.current.push(event);
  //       // Optional: log to console
  //       console.log("Recorded event:", event);
  //     },
  //   });

  //   return () => {
  //     // Stop recording when component unmounts
  //     stopFn();
  //   };
  // }, []);
  return (
    <AgentProvider>
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
              <Route path="/logs" element={<Logs />} />
              <Route path="/workflow-import" element={<WorkflowImport />} />
            </Route>
          </Routes>
        </Router>
      </BarProvider>
    </AgentProvider>
  );
};

export default App;
