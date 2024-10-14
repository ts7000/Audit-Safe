import React from "react";

// Card Component
interface CardProps {
  className?: string; // Optional className for styling
  children: React.ReactNode; // Ensure children is defined
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`bg-gray-800 border border-gray-500 rounded shadow-md p-3 my-2 transition-transform transform hover:scale-100 hover:shadow-sm ${className}`}
      style={{ minHeight: "150px" }}
    >
      <div className="flex flex-col h-full">{children}</div>
    </div>
  );
};

// Card Header Component
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string; // Add className as an optional prop
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
}) => {
  return <div className={`mb-1 ${className}`}>{children}</div>; // Use className for additional styling
};

// Card Title Component
interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
}) => {
  return <h3 className={`text-base font-bold ${className}`}>{children}</h3>;
};

// Card Description Component
interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
}) => {
  return <p className={`text-xs text-gray-400 ${className}`}>{children}</p>;
};

// Card Content Component (Fixed to accept className prop)
interface CardContentProps {
  children: React.ReactNode;
  className?: string; // Added className to props
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex-grow flex flex-col justify-between ${className}`} // Adjusted to ensure better layout
    >
      {children}
    </div>
  );
};
