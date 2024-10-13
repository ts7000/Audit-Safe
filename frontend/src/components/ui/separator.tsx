import React from "react";

export const Separator: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={`h-1 bg-gray-700 ${className}`}></div>;
};
