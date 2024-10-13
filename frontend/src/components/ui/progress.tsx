import React from "react";

interface ProgressProps {
  value: number; // Progress value (0-100)
  color?: string; // Optional color for customization
  className?: string; // Optional className for styling
}

const Progress: React.FC<ProgressProps> = ({
  value,
  color = "bg-blue-600",
  className = "", // Default to an empty string if not provided
}) => {
  return (
    <div
      className={`w-full bg-gray-800 rounded-md overflow-hidden ${className}`}
    >
      <div
        className={`h-4 ${color} transition-all duration-300`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
