import React, { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
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
  ChevronRight,
  LineChart,
  BarChart2,
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
import { Link } from "react-router-dom";

const sampleData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 280 },
  { name: "May", value: 200 },
  { name: "Jun", value: 450 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

export default function GenerateVisualizationPage() {
  const [chartType, setChartType] = useState("bar");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleValueChange = (value: string) => {
    setChartType(value);
    setIsDisabled(true); // Disable the Select component
  };

  const handleGenerateChart = () => {
    if (chartType) {
      console.log(`Generating ${chartType} chart...`);
      // Add chart generation logic here
    }
  };
  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={sampleData}>
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
                data={sampleData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {sampleData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
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
            <RechartsLineChart data={sampleData}>
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
        <div className="text-sm text-gray-400 mb-4">
          <span className="hover:text-blue-400 cursor-pointer">Home</span>
          <ChevronRight className="inline h-4 w-4 mx-2" />
          <span className="hover:text-blue-400 cursor-pointer">Reports</span>
          <ChevronRight className="inline h-4 w-4 mx-2" />
          <span className="text-gray-200">Generate Visualization</span>
        </div>

        <h2 className="text-3xl font-bold mb-2 text-gray-100">
          Generate Visualization
        </h2>
        <p className="text-gray-400 mb-6">
          Create visual representations of your audit report data to gain
          insights at a glance.
        </p>

        <Card className="bg-gray-800/50 border-gray-700 shadow-lg mb-8 backdrop-sm">
          <CardHeader>
            <CardTitle>Visualization Options</CardTitle>
            <CardDescription>
              Select the type of chart you want to generate
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              {/* Radio Buttons for Chart Selection */}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="chartType"
                  value="bar"
                  checked={chartType === "bar"}
                  onChange={() => setChartType("bar")}
                  className="form-radio text-blue-500"
                />
                <span>Bar Chart</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="chartType"
                  value="pie"
                  checked={chartType === "pie"}
                  onChange={() => setChartType("pie")}
                  className="form-radio text-blue-500"
                />
                <span>Pie Chart</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="chartType"
                  value="line"
                  checked={chartType === "line"}
                  onChange={() => setChartType("line")}
                  className="form-radio text-blue-500"
                />
                <span>Line Chart</span>
              </label>

              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
                  <RefreshCw className="mr-2 h-4 w-4" /> Generate Chart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chart Display */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg mb-8 backdrop-sm">
          <CardHeader>
            <CardTitle>Generated Visualization</CardTitle>
            <CardDescription>
              Preview of your selected chart type
            </CardDescription>
          </CardHeader>
          <CardContent>{renderChart()}</CardContent>
        </Card>

        {/* Actions Section */}
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
      </main>
    </div>
  );
}
