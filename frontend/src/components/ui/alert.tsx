import React from "react";

interface AlertProps {
  className?: string;
  children: React.ReactNode; // Add this to expect children
}

export const Alert: React.FC<AlertProps> = ({ className, children }) => {
  return (
    <div
      className={`p-4 border border-blue-600 bg-blue-900 text-blue-100 rounded ${className}`}
    >
      {children}
    </div>
  );
};

interface AlertDescriptionProps {
  children: React.ReactNode;
}

export const AlertDescription: React.FC<AlertDescriptionProps> = ({
  children,
}) => {
  return <p>{children}</p>;
};
