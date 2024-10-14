import React from "react";
import { cn } from "./ui/utils";

interface CoolLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "small" | "medium" | "large";
}

export default function CoolLoader({
  size = "medium",
  className,
  ...props
}: CoolLoaderProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "fixed inset-0 flex items-center justify-center", // Center the loader on the screen
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative",
          size === "small"
            ? "w-16 h-16"
            : size === "medium"
            ? "w-24 h-24"
            : "w-32 h-32"
        )}
      >
        <div className="absolute inset-0">
          <svg
            className="animate-spin"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="10"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M50 10
                a 40 40 0 0 1 40 40
                l -10 0
                a 30 30 0 0 0 -30 -30
                l 0 -10"
            />
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/5 h-3/5 bg-gray-950 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
