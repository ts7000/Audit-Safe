import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuditSafeLanding from "./components/Landing"; // Adjust if necessary
import Login from "./components/Login"; // Adjust if necessary
import Signup from "./components/Signup"; // Adjust if necessary
import MainPage from "./components/Home";
import GenerateSummaryPage from "./components/GenerateSummary";
import GenerateVisualizationPage from "./components/GenerateVisualisation";
import GetSuggestionsPage from "./components/GetSuggestion";
import GenerateAnalysisPage from "./components/GenerateAnalysis";
import DashboardPage from "./components/Dashboard";
import ProfilePage from "./components/Profile";
import EditProfilePage from "./components/EditProfile";
import ComingSoon from "./components/ComingSoon";
import { CustomAlert } from "./components/CustomAlert";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuditSafeLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/home/generate-summary" element={<GenerateSummaryPage />} />
        <Route path="/home/generate-visualizations" element={<GenerateVisualizationPage />} />
        <Route path="/home/get-suggestions" element={<GetSuggestionsPage />} />
        <Route path="/home/generate-analysis" element={<GenerateAnalysisPage />} />
        <Route path="/home/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/alert" element={<CustomAlert />} />
      </Routes>
    </Router>
  );
}

export default App;
