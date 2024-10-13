import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
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
  TrendingUp,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample analysis data
const sampleAnalysis = {
  overallScore: 78,
  riskLevel: "Medium",
  keyFindings: [
    "Improved compliance in financial reporting",
    "Potential vulnerabilities in data security protocols",
    "Inconsistencies in internal control procedures",
  ],
  metrics: [
    { name: "Financial Accuracy", score: 85 },
    { name: "Regulatory Compliance", score: 92 },
    { name: "Operational Efficiency", score: 68 },
    { name: "Risk Management", score: 72 },
  ],
};

export default function GenerateAnalysisPage() {
  return (
    <div className="flex h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
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
            <Link to="/home/dashboard">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-gray-800 transition-colors"
              >
                <Home className="mr-2 h-4 w-4" /> Dashboard
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
          >
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto relative z-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-300 mb-4">
          <span className="hover:text-blue-400 cursor-pointer">Home</span>
          <ChevronRight className="inline h-4 w-4 mx-2" />
          <span className="text-gray-100">Generate Analysis</span>
        </div>

        <h2 className="text-3xl font-bold mb-2 text-gray-100">
          Audit Analysis
        </h2>
        <p className="text-gray-300 mb-6">
          Review the comprehensive analysis of your audit report.
        </p>

        {/* Overall Score */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg mb-6 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-100">Overall Audit Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-5xl font-bold text-blue-400">
                {sampleAnalysis.overallScore}%
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-300">Risk Level</p>
                <p className="text-lg font-semibold text-yellow-400">
                  {sampleAnalysis.riskLevel}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Findings */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg mb-6 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-100">Key Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {sampleAnalysis.keyFindings.map((finding, index) => (
                <li key={index} className="flex items-start">
                  <AlertTriangle className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{finding}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Metrics */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg mb-6 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-gray-100">Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sampleAnalysis.metrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-300">
                      {metric.name}
                    </span>
                    <span className="text-sm font-medium text-gray-300">
                      {metric.score}%
                    </span>
                  </div>
                  <Progress value={metric.score} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
            <TrendingUp className="mr-2 h-4 w-4" /> Generate Detailed Report
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download Analysis
          </Button>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-300 text-sm">
          <p>
            &copy; 2023 AuditSafe. All rights reserved. |{" "}
            <a href="#" className="hover:text-blue-400">
              Contact Support
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
