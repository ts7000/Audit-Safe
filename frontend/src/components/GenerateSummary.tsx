// src/pages/GenerateSummaryPage.tsx

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import {
  BarChart,
  FileText,
  Home,
  PieChart,
  Settings,
  User,
  LogOut,
  Download,
  ChevronRight,
  Bookmark,
  AlertTriangle,
  CheckCircle,
  EggFriedIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader"; // Import your loader component

// Define an interface for the summary data
interface SummaryData {
  keyFinding: string;
  riskAreas: string;
  complianceScore: number;
  summary: string;
}

export default function GenerateSummaryPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [summaryData, setSummaryData] = useState<SummaryData | null>(null); // Use the interface here
  const [loading, setLoading] = useState(true); // State to manage loading
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSummaryData = async () => {
      const apiUrl =
        "https://audit-safe.onrender.com/api/summarize-audit-report";
      const auditReport = localStorage.getItem("pdfText");

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ auditReport }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setSummaryData(data);
      } catch (error) {
        console.error("Error fetching summary data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchSummaryData();
  }, []);

  return (
    <div className="flex h-screen bg-gray-950 text-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        ></div>
      </div>

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 flex flex-col justify-between relative z-10">
        <div>
          <h1 className="text-2xl font-bold text-blue-400 mb-8">AuditSafe</h1>
          <nav className="space-y-2">
            <Link to="/home">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-gray-800 transition-colors"
              >
                <Home className="mr-2 h-4 w-4" /> Home
              </Button>
            </Link>
            <Link to="/home/dashboard">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-gray-800 transition-colors"
              >
                <EggFriedIcon className="mr-2 h-4 w-4" /> Dashboard
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-gray-800 transition-colors"
            >
              <FileText className="mr-2 h-4 w-4" /> Reports
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-gray-800 transition-colors"
            >
              <BarChart className="mr-2 h-4 w-4" /> Analytics
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-gray-800 transition-colors"
            >
              <PieChart className="mr-2 h-4 w-4" /> Insights
            </Button>
          </nav>
        </div>
        <div>
          <Separator className="my-4 bg-gray-700" />
          <Link to="/profile">
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-gray-800 transition-colors"
            >
              <User className="mr-2 h-4 w-4" /> Profile
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-800 transition-colors"
          >
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20 transition-colors"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto relative z-10">
        <div className="text-sm text-gray-400 mb-4">
          <span className="hover:text-blue-400 cursor-pointer">Home</span>
          <ChevronRight className="inline h-4 w-4 mx-2" />
          <span className="hover:text-blue-400 cursor-pointer">Reports</span>
          <ChevronRight className="inline h-4 w-4 mx-2" />
          <span className="text-gray-200">Generate Summary</span>
        </div>

        <h2 className="text-3xl font-bold mb-2 text-gray-100">
          Audit Report Summary
        </h2>
        <p className="text-gray-400 mb-6">
          Review the generated summary of your audit report and explore key
          insights.
        </p>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <Loader size="small" />{" "}
            {/* Display loader while data is being fetched */}
          </div>
        ) : (
          <>
            {/* Summary Cards */}
            {summaryData && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-400">
                      <Bookmark className="mr-2 h-5 w-5" />
                      Key Findings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">
                      {summaryData.keyFinding}
                    </p>
                    <p className="text-sm text-gray-400 mx-2">
                      Important points identified
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-400">
                      <AlertTriangle className="mr-2 h-5 w-5" />
                      Risk Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">
                      {summaryData.riskAreas}
                    </p>
                    <p className="text-sm text-gray-400 mx-2">
                      Potential risks detected
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Compliance Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">
                      {summaryData.complianceScore}%
                    </p>
                    <p className="text-sm text-gray-400 mx-2">
                      Overall compliance level
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-lg">
              <h3 className="text-xl font-bold text-gray-100 mb-4">
                Summary Report
              </h3>
              {summaryData ? (
                <p className="text-gray-300">{summaryData.summary}</p>
              ) : (
                <p className="text-gray-400">No summary available.</p>
              )}
            </div>
            <Button
              variant="outline"
              className="mb-6 text-blue-400 my-4 hover:bg-blue-600/10 transition-colors"
              onClick={() => console.log("Download report")}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Summary
            </Button>
          </>
        )}
      </main>
    </div>
  );
}
