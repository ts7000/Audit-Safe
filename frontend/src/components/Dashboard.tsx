import React from "react";
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
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Clock,
  FileSearch,
  Lightbulb,
  EggFriedIcon,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Link, useNavigate } from "react-router-dom";

// Sample data for charts and metrics
const auditProgressData = [
  { name: "Planning", completed: 100 },
  { name: "Fieldwork", completed: 75 },
  { name: "Reporting", completed: 30 },
  { name: "Follow-up", completed: 0 },
];

const recentActivities = [
  { id: 1, action: "Audit report for Q2 uploaded", time: "2 hours ago" },
  { id: 2, action: "New compliance alert: Update required", time: "1 day ago" },
  {
    id: 3,
    action: "Risk assessment completed for Project X",
    time: "3 days ago",
  },
];
export default function DashboardPage() {
  const navigate = useNavigate();
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
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Dashboard</h2>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Audits
              </CardTitle>
              <FileText className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-gray-400">+2 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Compliance Rate
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-gray-400">+5% from last quarter</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-gray-400">-3 from last week</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Risk Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Medium</div>
              <p className="text-xs text-gray-400">
                No change from last assessment
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Audit Progress and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Audit Progress */}
          <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-100">Audit Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart data={auditProgressData}>
                  <XAxis dataKey="name" stroke="#888888" />
                  <YAxis stroke="#888888" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" fill="#3b82f6" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-100">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="flex items-start">
                    <Clock className="mr-2 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-200">{activity.action}</p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-gray-100">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row space-x-4">
            <div className="flex flex-row space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 transition-colors">
                <FileSearch className="mr-2 h-4 w-4" /> Start New Audit
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 transition-colors">
                <BarChart className="mr-2 h-4 w-4" /> Generate Report
              </Button>
              <Button className="bg-yellow-600 hover:bg-yellow-700 transition-colors">
                <AlertTriangle className="mr-2 h-4 w-4" /> Review Open Issues
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 transition-colors">
                <Lightbulb className="mr-2 h-4 w-4" /> Get AI Suggestions
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center text-gray-300 text-sm">
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
