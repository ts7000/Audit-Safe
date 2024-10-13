// src/pages/GenerateSummaryPage.tsx

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
  BarChart,
  FileText,
  Home,
  PieChart,
  Settings,
  User,
  LogOut,
  Download,
  FileSearch,
  ChevronRight,
  Bookmark,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Link } from "react-router-dom";

export default function GenerateSummaryPage() {
  const [activeTab, setActiveTab] = useState("overview");

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
          <span className="text-gray-200">Generate Summary</span>
        </div>

        <h2 className="text-3xl font-bold mb-2 text-gray-100">
          Audit Report Summary
        </h2>
        <p className="text-gray-400 mb-6">
          Review the generated summary of your audit report and explore key
          insights.
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-800/50 border-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-400">
                <Bookmark className="mr-2 h-5 w-5" />
                Key Findings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">12</p>
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
              <p className="text-2xl font-bold">5</p>
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
              <p className="text-2xl font-bold">85%</p>
              <p className="text-sm text-gray-400 mx-2">
                Overall compliance rating
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Summary */}
        <Card className="bg-gray-800/50 border-gray-700 shadow-lg mb-8 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center font-bold text-teal-600">
              <FileSearch className="mr-2 h-5 w-5" />
              Detailed Summary
            </CardTitle>
            <CardDescription>
              Explore different aspects of your audit report
            </CardDescription>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            recusandae expedita nemo magnam facere quisquam iusto quae
            reiciendis ab, vitae beatae non placeat? Impedit, dicta fuga magni
            ipsa natus ducimus corrupti amet hic reiciendis fugit molestias
            alias inventore, minus dolorum? Minima minus a impedit sapiente
            tenetur eum quod assumenda id soluta illo, accusamus dolores dolorem
          </CardContent>
        </Card>

        {/* Download Button */}
        <div className="mt-8">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download Summary as PDF
          </Button>
        </div>
      </main>
    </div>
  );
}
