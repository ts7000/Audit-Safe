// Sidebar.tsx
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Home,
  FileText,
  BarChart,
  PieChart,
  AlertCircle,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-48 md:w-56 bg-gray-900 p-4 flex flex-col h-screen justify-between">
      {/* Top Section */}
      <div className="flex-grow">
        <h1 className="text-2xl font-bold text-blue-400 mb-4 text-center">
          AuditSafe
        </h1>
        <nav className="space-y-2">
          <Link to="/home/dashboard">
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-gray-800"
            >
              <Home className="mr-1 h-4 w-4" /> Dashboard
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-800"
          >
            <FileText className="mr-1 h-4 w-4" /> Reports
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-800"
          >
            <BarChart className="mr-1 h-4 w-4" /> Analytics
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-800"
          >
            <PieChart className="mr-1 h-4 w-4" /> Insights
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-800"
          >
            <AlertCircle className="mr-1 h-4 w-4" /> Alerts
          </Button>
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        <Separator className="my-4 bg-gray-700" />
        <Link to="/profile">
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-800"
          >
            <User className="mr-1 h-4 w-4" /> Profile
          </Button>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start hover:bg-gray-800"
        >
          <Settings className="mr-1 h-4 w-4" /> Settings
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
        >
          <LogOut className="mr-1 h-4 w-4" /> Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
