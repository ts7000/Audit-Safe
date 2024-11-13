"use client";

import React from "react";
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

const complianceData = [
  { name: "Data Protection", score: 85 },
  { name: "Access Control", score: 92 },
  { name: "Incident Response", score: 78 },
  { name: "Network Security", score: 88 },
  { name: "Asset Management", score: 95 },
];

const riskData = [
  { name: "High", value: 15 },
  { name: "Medium", value: 30 },
  { name: "Low", value: 55 },
];

const vulnerabilityData = [
  { name: "Outdated Software", count: 12 },
  { name: "Weak Passwords", count: 8 },
  { name: "Misconfigured Firewalls", count: 5 },
  { name: "Unencrypted Data", count: 3 },
  { name: "Lack of 2FA", count: 7 },
];

const trendData = [
  { month: "Jan", incidents: 5 },
  { month: "Feb", incidents: 8 },
  { month: "Mar", incidents: 12 },
  { month: "Apr", incidents: 7 },
  { month: "May", incidents: 10 },
  { month: "Jun", incidents: 6 },
];

export default function InsightsPage() {
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
              {complianceData.map((item, index) => (
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
                {vulnerabilityData.map((item, index) => (
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
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#444"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
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
          className="md:col-span-3"
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Trends and Anomalies
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* <ChartContainer
                config={{
                  incidents: {
                    label: "Incidents",
                    color: "hsl(var(--chart-4))",
                  },
                }}
                className="h-[300px]"
              > */}
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="incidents" fill="var(--color-incidents)" />
                </BarChart>
              </ResponsiveContainer>
              {/* </ChartContainer> */}
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
