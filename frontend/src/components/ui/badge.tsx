// badge.tsx
import React from "react";

// Update the BadgeProps interface to include 'className'
interface BadgeProps {
  variant?: "default" | "success" | "error" | "warning" | "secondary"; // Include 'secondary' if needed
  children: React.ReactNode;
  className?: string; // Add className as an optional prop
}

const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  className,
}) => {
  const variantClasses = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    error: "bg-red-200 text-red-800",
    warning: "bg-yellow-200 text-yellow-800",
    secondary: "bg-blue-200 text-blue-800", // Define styles for 'secondary'
  };

  return (
    <span
      className={`inline-block px-2 py-1 rounded ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
