import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight, EggFriedIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader"; // Import Loader component
import { Separator } from "./ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

import {
  BarChart,
  FileText,
  Home,
  PieChart,
  Settings,
  User,
  LogOut,
  Download,
  RefreshCw,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line,
} from "recharts";

export default function GenerateVisualizationPage() {
  const [chartType, setChartType] = useState(""); // Store selected chart type
  const [data, setData] = useState([]); // Store chart data
  const [colors, setColors] = useState([]); // Store chart colors
  const [loading, setLoading] = useState(false); // Loader state
  const [chartFetched, setChartFetched] = useState(false); // Control chart rendering
  const navigate = useNavigate();
  const fetchChartData = async () => {
    setLoading(true); // Start Loader
    try {
      const auditReport = localStorage.getItem("pdfText");

      const response = await fetch(
        "https://audit-safe.onrender.com/api/get-visualization",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ auditReport }),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      setData(result.sampleData);
      setColors(result.colors);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop Loader
    }
  };

  const handleGenerateChart = () => {
    setChartFetched(true); // Mark chart as ready to render
    fetchChartData(); // Fetch data and show loader
  };

  const renderChart = () => {
    if (loading) return <Loader size="small" />; // Show Loader if data is loading
    if (!chartFetched || !chartType) return null; // Render only if chart is ready

    switch (chartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={data}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </RechartsBarChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </RechartsPieChart>
          </ResponsiveContainer>
        );
      case "line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsLineChart data={data}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </RechartsLineChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-950 text-gray-200 relative overflow-hidden">
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

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-4">
          <span className="hover:text-blue-400 cursor-pointer">Home</span>
          <ChevronRight className="inline h-4 w-4 mx-2" />
          <span className="hover:text-blue-400 cursor-pointer">Reports</span>
          <ChevronRight className="inline h-4 w-4 mx-2" />
          <span className="text-gray-200">Generate Visualization</span>
        </div>

        <h2 className="text-3xl font-bold mb-4">Generate Visualization</h2>

        <Card className="bg-gray-800/50 border-gray-700 mb-6">
          <CardHeader>
            <CardTitle>Select Chart Type</CardTitle>
            <CardDescription>
              Choose the type of chart you want to generate.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              {/* Radio Buttons for Chart Type */}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="chartType"
                  value="bar"
                  onChange={() => setChartType("bar")}
                  className="mr-2"
                />
                Bar Chart
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="chartType"
                  value="pie"
                  onChange={() => setChartType("pie")}
                  className="mr-2"
                />
                Pie Chart
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="chartType"
                  value="line"
                  onChange={() => setChartType("line")}
                  className="mr-2"
                />
                Line Chart
              </label>
            </div>

            {/* Generate Chart Button */}
            <div className="">
              <Button onClick={handleGenerateChart} disabled={!chartType}>
                Generate Chart
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Render Chart */}
        {renderChart()}
        <div className="fixed bottom-0  p-4 text-center">
          <div className="flex space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
              <RefreshCw className="mr-2 h-4 w-4" /> Regenerate Chart
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download Chart as Image
            </Button>
            <Button variant="ghost">Go Back to Dashboard</Button>
          </div>

          {/* Footer */}
          <footer className="mt-12 text-center text-gray-400 text-sm">
            <p>
              &copy; 2024 AuditSafe. All rights reserved. |{" "}
              <a href="#" className="hover:text-blue-400">
                Contact Support
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
