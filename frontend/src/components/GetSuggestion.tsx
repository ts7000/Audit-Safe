import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/withoutHoverCard";
import {
  BarChart,
  FileText,
  Home,
  PieChart,
  Settings,
  User,
  LogOut,
  ChevronRight,
  Lightbulb,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  CheckCircle,
  EggFriedIcon,
  AlertTriangle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface Suggestion {
  id: number;
  category: string;
  suggestion: string;
  impact: string;
  effort: string;
}

export default function GetSuggestionsPage() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://audit-safe.onrender.com/api/get-suggestion",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              auditReport: localStorage.getItem("pdfText"),
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch suggestions");
        }

        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  // Loader component
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-950 text-gray-100">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 animate-spin text-blue-500 mb-4" />
          <p className="text-lg">Loading Suggestions.......</p>
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
            <Link to="/coming-soon">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-gray-800 transition-colors"
              >
                <FileText className="mr-2 h-4 w-4" /> Reports
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-gray-800 transition-colors"
              >
                <BarChart className="mr-2 h-4 w-4" /> Analytics
              </Button>
            </Link>
            <Link to="/coming-soon">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-gray-800 transition-colors"
              >
                <PieChart className="mr-2 h-4 w-4" /> Insights
              </Button>
            </Link>
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
        {/* Breadcrumb */}
        <div className="text-sm text-gray-300 mb-4">
          <span className="hover:text-blue-400 cursor-pointer">Home</span>
          <ChevronRight className="inline h-4 w-4 mx-2" />
          <span className="text-gray-100">Get Suggestions</span>
        </div>

        <h2 className="text-3xl font-bold mb-2 text-gray-100">
          Get Suggestions
        </h2>
        <p className="text-gray-300 mb-6">
          Review AI-generated suggestions to improve your audit processes and
          outcomes.
        </p>

        <Card className="bg-gray-800/50 border-gray-700 shadow-lg mb-8 backdrop-sm">
          <CardHeader>
            <CardTitle className="text-gray-100">
              Improvement Suggestions
            </CardTitle>
            <CardDescription className="text-gray-300">
              AI-generated recommendations for your audit processes
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              {suggestions.map((suggestion) => (
                <Card
                  key={suggestion.id}
                  className="bg-gray-800/30 border-gray-700 flex flex-col p-4"
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start text-gray-100">
                      <Lightbulb className="mr-2 h-5 w-5 text-yellow-400" />
                      {suggestion.category}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p
                      className="mb-4 text-gray-200 break-words"
                      style={{ wordBreak: "break-word" }}
                    >
                      {suggestion.suggestion}
                    </p>

                    <div className="mt-auto space-y-1 text-sm text-gray-400">
                      <div className="text-blue-400">
                        Impact: {suggestion.impact}
                      </div>
                      <div className="text-green-400">
                        Effort: {suggestion.effort}
                      </div>
                    </div>
                  </CardContent>

                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="ghost" className="hover:text-green-400">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" className="hover:text-red-400">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" className="hover:text-blue-400">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
