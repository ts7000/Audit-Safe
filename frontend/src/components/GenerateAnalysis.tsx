import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Progress from "./ui/progress";
import {
  BarChart,
  FileText,
  Home,
  PieChart,
  Settings,
  User,
  LogOut,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  EggFriedIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Define TypeScript interface for API response
interface AnalysisData {
  overallScore: number;
  riskLevel: string;
  keyFindings: string[];
  metrics: { name: string; score: number }[];
}

// Component
export default function GenerateAnalysisPage() {
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchAnalysisData = async () => {
      const input = localStorage.getItem("pdfText");
      try {
        const response = await fetch(
          "https://audit-safe.onrender.com/api/get-analysis",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              auditReport: input,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load analysis data");
        }

        const data: AnalysisData = await response.json();
        setAnalysisData(data);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysisData();
  }, []);

  // Loader component
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-950 text-gray-100">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 animate-spin text-blue-500 mb-4" />
          <p className="text-lg">Loading analysis data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-950 text-gray-100">
        <div className="text-center">
          <AlertTriangle className="h-16 w-16 text-red-500 mb-4" />
          <p className="text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-400 mb-8">AuditSafe</h1>
          <nav className="space-y-2">
            <Link to="/home">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-gray-800 transition-colors"
              >
                <Home className="mr-2 h-4 w-4" /> Dashboard
              </Button>
            </Link>
            <Link to="/home/dashboard">
              <Button variant="ghost" className="w-full justify-start">
                <EggFriedIcon className="mr-2 h-4 w-4" /> Dashboard
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" /> Reports
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button variant="ghost" className="w-full justify-start">
                <BarChart className="mr-2 h-4 w-4" /> Analytics
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button variant="ghost" className="w-full justify-start">
                <PieChart className="mr-2 h-4 w-4" /> Insights
              </Button>
            </Link>
          </nav>
        </div>
        <div>
          <Separator className="my-4" />
          <Link to="/profile">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" /> Profile
            </Button>
          </Link>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-red-400"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="text-sm text-gray-300 mb-4">
          <span>Home</span>
          <ChevronRight className="inline h-4 w-4 mx-2" />
          <span>Generate Analysis</span>
        </div>

        <h2 className="text-3xl font-bold mb-2">Audit Analysis</h2>
        <p className="text-gray-300 mb-6">
          Review the comprehensive analysis of your audit report.
        </p>

        {/* Overall Score */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Overall Audit Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <div className="text-5xl font-bold text-blue-400">
                {analysisData?.overallScore}%
              </div>
              <div className="text-lg text-yellow-400">
                {analysisData?.riskLevel}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Key Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {analysisData?.keyFindings.map((finding, index) => (
                <li key={index} className="flex items-center mb-2">
                  <AlertTriangle className="text-yellow-400 mr-2" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Metrics */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            {analysisData?.metrics.map((metric, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <span>{metric.name}</span>
                  <span>{metric.score}%</span>
                </div>
                <Progress value={metric.score} />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex space-x-4">
          <Button>Generate Detailed Report</Button>
          <Button variant="outline">Download Analysis</Button>
        </div>
      </main>
    </div>
  );
}
