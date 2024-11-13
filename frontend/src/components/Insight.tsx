"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Progress from "./ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "./ui/chart";
import {
  AlertTriangle,
  CheckCircle,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

// Define types for the data (optional)
type ComplianceData = {
  name: string;
  score: number;
};

type RiskData = {
  name: string;
  value: number;
};

type VulnerabilityData = {
  name: string;
  count: number;
};

type TrendData = {
  month: string;
  incidents: number;
};

type InsightsData = {
  compliance: ComplianceData[];
  risk: RiskData[];
  vulnerabilities: VulnerabilityData[];
  trend: TrendData[];
};

export default function InsightsPage() {
  const [insightsData, setInsightsData] = useState<InsightsData | null>(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchInsights = async () => {
      try {
        const response = await fetch(
          "https://audit-safe.onrender.com/api/get-insights",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(localStorage.getItem("pdfText")),
          }
        );
        const data = await response.json();
        setInsightsData(data); // Set the fetched data
      } catch (error) {
        console.error("Error fetching insights data:", error);
      }
    };

    fetchInsights();
  }, []);

  // Render loading state if the data is not available yet
  if (!insightsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Audit Insights
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Compliance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Compliance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              {insightsData.compliance.map((item) => (
                <div key={item.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{item.name}</span>
                    <span>{item.score}%</span>
                  </div>
                  <Progress value={item.score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Risk Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Risk Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={insightsData.risk} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-high)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Top Vulnerabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Top Vulnerabilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {insightsData.vulnerabilities.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center"
                  >
                    <span>{item.name}</span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                      {item.count}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Scorecard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Security Scorecard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-40">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#444"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4CAF50"
                      strokeWidth="2"
                      strokeDasharray="75, 100"
                    />
                    <text
                      x="18"
                      y="20.35"
                      className="text-5xl font-bold"
                      textAnchor="middle"
                      fill="#4CAF50"
                    >
                      75
                    </text>
                  </svg>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold">Good</p>
                <p className="text-sm text-gray-400">
                  Last updated: 2 days ago
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trends and Anomalies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:col-span-2"
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Trends and Anomalies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={insightsData.trend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="incidents" fill="var(--color-incidents)" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 flex justify-between">
                <div className="flex items-center">
                  <TrendingUp className="text-green-500 mr-2" />
                  <span>20% increase in last month</span>
                </div>
                <div className="flex items-center">
                  <AlertTriangle className="text-yellow-500 mr-2" />
                  <span>Anomaly detected in April</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
