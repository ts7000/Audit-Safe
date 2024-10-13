import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`border border-gray-600 bg-gray-800 text-gray-200 p-2 rounded ${className}`}
      {...props}
    />
  );
};
