// Avatar.tsx
import React from "react";

// AvatarProps interface for props
interface AvatarProps {
  className?: string; // Optional className for additional styling
  children: React.ReactNode; // Ensure children can be passed
}

// Avatar component
const Avatar: React.FC<AvatarProps> = ({ className, children }) => {
  return (
    <div
      className={`relative inline-block rounded-full overflow-hidden ${className}`}
    >
      {children} {/* Render the child components here */}
    </div>
  );
};

// AvatarImage component
const AvatarImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} className="h-full w-full object-cover" />
);

// AvatarFallback component
const AvatarFallback: React.FC<{ fallback: string }> = ({ fallback }) => (
  <div className="bg-gray-200 h-full w-full flex items-center justify-center">
    <span className="text-gray-500">{fallback}</span>
  </div>
);

// Export the components
export { Avatar, AvatarImage, AvatarFallback };
