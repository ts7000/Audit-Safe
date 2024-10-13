import React from "react";
import { Button } from "@chakra-ui/react";
import { ArrowRight, CheckCircle, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: React.ReactNode; // The icon can be any React node (e.g., SVG, component)
  title: string; // Title of the feature
  description: string; // Description of the feature
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-900 bg-opacity-50 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const AuditSafeLanding: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-800 bg-opacity-50 relative z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-400">AuditSafe</h1>
          <p className="text-sm text-gray-300">Simplifying Audit Reports</p>
        </div>
      </header>

      <main className="flex-grow relative z-10">
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                Understand Your Audit Reports with Ease
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                AuditSafe helps you navigate the complexities of audit reports,
                making them accessible and actionable.
              </p>
              <div className="mt-8">
                <Link to="/login">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 text-lg">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <svg
                className="w-full h-auto"
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="400" height="300" fill="#1F2937" />
                {/* Background grid */}
                <path
                  d="M0 50 H400 M0 100 H400 M0 150 H400 M0 200 H400 M0 250 H400"
                  stroke="#374151"
                  strokeWidth="0.5"
                />
                <path
                  d="M50 0 V300 M100 0 V300 M150 0 V300 M200 0 V300 M250 0 V300 M300 0 V300 M350 0 V300"
                  stroke="#374151"
                  strokeWidth="0.5"
                />

                {/* Main chart */}
                <path
                  d="M50 250 L100 200 L150 220 L200 150 L250 180 L300 100 L350 130"
                  stroke="#60A5FA"
                  strokeWidth="3"
                  fill="none"
                />

                {/* Bar chart */}
                <rect
                  x="60"
                  y="180"
                  width="30"
                  height="70"
                  fill="#3B82F6"
                  opacity="0.8"
                />
                <rect
                  x="110"
                  y="200"
                  width="30"
                  height="50"
                  fill="#3B82F6"
                  opacity="0.8"
                />
                <rect
                  x="160"
                  y="160"
                  width="30"
                  height="90"
                  fill="#3B82F6"
                  opacity="0.8"
                />
                <rect
                  x="210"
                  y="220"
                  width="30"
                  height="30"
                  fill="#3B82F6"
                  opacity="0.8"
                />
                <rect
                  x="260"
                  y="190"
                  width="30"
                  height="60"
                  fill="#3B82F6"
                  opacity="0.8"
                />

                {/* Pie chart */}
                <path
                  d="M325 75 L325 25 A50 50 0 0 1 368.3 56.7 Z"
                  fill="#60A5FA"
                />
                <path
                  d="M325 75 L368.3 56.7 A50 50 0 0 1 361.9 100.9 Z"
                  fill="#3B82F6"
                />
                <path
                  d="M325 75 L361.9 100.9 A50 50 0 0 1 325 125 Z"
                  fill="#2563EB"
                />
                <path
                  d="M325 75 L325 125 A50 50 0 0 1 281.7 56.7 Z"
                  fill="#1D4ED8"
                />

                {/* Decorative elements */}
                <circle cx="50" cy="250" r="5" fill="#60A5FA" />
                <circle cx="100" cy="200" r="5" fill="#60A5FA" />
                <circle cx="150" cy="220" r="5" fill="#60A5FA" />
                <circle cx="200" cy="150" r="5" fill="#60A5FA" />
                <circle cx="250" cy="180" r="5" fill="#60A5FA" />
                <circle cx="300" cy="100" r="5" fill="#60A5FA" />
                <circle cx="350" cy="130" r="5" fill="#60A5FA" />

                {/* Magnifying glass */}
                <circle
                  cx="100"
                  cy="100"
                  r="30"
                  stroke="#60A5FA"
                  strokeWidth="3"
                  fill="none"
                />
                <line
                  x1="122"
                  y1="122"
                  x2="140"
                  y2="140"
                  stroke="#60A5FA"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 bg-opacity-50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              Why Choose AuditSafe?
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<FileText className="h-8 w-8 text-blue-500" />}
                title="Comprehensive Summaries"
                description="Get detailed yet concise summaries of complex audit reports."
              />
              <FeatureCard
                icon={<CheckCircle className="h-8 w-8 text-green-500" />}
                title="Actionable Insights"
                description="Receive actionable insights to improve your audit processes."
              />
              <FeatureCard
                icon={<TrendingUp className="h-8 w-8 text-yellow-500" />}
                title="Visual Analytics"
                description="Leverage visual analytics for a clearer understanding of data."
              />
            </div>
          </div>
        </section>
        <footer className="bg-gray-800 bg-opacity-75 relative z-10">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400">
                © 2024 AuditSafe. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AuditSafeLanding;
