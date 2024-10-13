import React from "react";

// Extend the ButtonProps interface to include the "outline" variant
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"; // Added "outline" variant
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "flex items-center px-4 py-2 rounded transition duration-300";

  // Define styles for each variant
  const variantStyles = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    ghost: "bg-transparent hover:bg-gray-800 text-gray-200",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent", // Outline styles
  }[variant];

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
