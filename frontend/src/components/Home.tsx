// MainPage.tsx
import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import Sidebar
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Alert, AlertDescription } from "./ui/alert";
import {
  FileText,
  Upload,
  FileSearch,
  BarChart2,
  Zap,
  Info,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for API calls

export default function MainPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // State for file input
  const [uploading, setUploading] = useState(false); // State to track upload status

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Handle PDF upload
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a PDF file.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/uploadPDF",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { text } = response.data;
      localStorage.setItem("pdfText", text); // Store extracted text in local storage
      alert("PDF uploaded and parsed successfully!");
      console.log("PDF text:", localStorage.getItem("pdfText"));
    } catch (error) {
      console.error("Error uploading PDF:", error);
      alert("Failed to upload and parse PDF.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-950 text-gray-200 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
      </div>

      {/* Hamburger button */}
      <button
        className="md:hidden absolute top-4 left-4 z-20 p-2 bg-gray-800 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <span>Close</span> : <span>Menu</span>}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">
          Welcome to AuditSafe
        </h2>

        <div className="bg-gray-800/70 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-100">
            Upload Your Audit Report
          </h3>
          <p className="text-gray-300 mb-6">
            Upload your PDF audit report to get started. Our AI-powered system
            will analyze your report and provide valuable insights.
          </p>
          <div className="flex items-center space-x-4">
            <Input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="bg-gray-700/50 border-gray-600 text-gray-200 file:bg-blue-600 file:text-gray-100 file:rounded-md hover:file:bg-blue-700"
            />
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleUpload}
              disabled={uploading}
            >
              <Upload className="mr-2 h-4 w-4" />
              {uploading ? "Uploading..." : "Upload"}
            </Button>
          </div>
        </div>

        <Alert className="mb-6 bg-blue-900/50 border-blue-700">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Please upload your audit report to unlock the features below.
          </AlertDescription>
        </Alert>

        <h3 className="text-2xl font-bold mb-4 text-gray-100">
          Audit Report Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gray-800/50 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-400">
                <FileSearch className="mr-2 h-5 w-5" />
                Summarize Report
              </CardTitle>
              <CardDescription>
                Get a concise summary of your audit report
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-4 flex justify-center items-center space-x-2">
                <Link to="/home/generate-summary">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                    Generate Summary
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <BarChart2 className="mr-2 h-5 w-5" />
                Visualization
              </CardTitle>
              <CardDescription>
                Visualize key metrics from your audit report
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 justify-center items-center mt-4">
                <Link to="/home/generate-visualizations">
                  <Button className="w-full bg-green-600 hover:bg-green-700 transition-colors">
                    Generate Visualization
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-400">
                <Zap className="mr-2 h-5 w-5" />
                Security Suggestions
              </CardTitle>
              <CardDescription>
                Get recommendations for improving security measures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center space-x-4 mt-4">
                <Link to="/home/get-suggestions">
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 transition-colors">
                    Get Suggestions
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-teal-400">
                <FileText className="mr-2 h-5 w-5" />
                Detailed Analysis
              </CardTitle>
              <CardDescription>
                Get a detailed analysis of your audit findings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center space-x-4 mt-4">
                <Link to="/home/generate-analysis">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 transition-colors">
                    Generate Analysis
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
