// src/components/ui/tabs.tsx

import React, { Dispatch, SetStateAction, useState } from "react";

// Tab interface for individual tab components
interface TabProps {
  value: string;
  children: React.ReactNode;
  isActive?: boolean; // Indicate if the tab is active
  onChange?: (value: string) => void; // Callback for changing tabs
}

// Tab component
const Tab: React.FC<TabProps> = ({ value, isActive, onChange, children }) => {
  return (
    <button
      className={`py-2 px-4 ${
        isActive ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400"
      }`}
      onClick={() => onChange?.(value)}
    >
      {children}
    </button>
  );
};

// TabsContent component
interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export const TabsContent: React.FC<TabsContentProps> = ({
  value,
  children,
}) => {
  return <div className="mt-4">{children}</div>;
};

// TabsList component
interface TabsListProps {
  children: React.ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return <div className="flex space-x-2">{children}</div>;
};

// TabsTrigger component
interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  children,
}) => {
  return <div>{children}</div>;
};

// Tabs component interface
interface TabsProps {
  defaultValue: string;
  className?: string;
  onValueChange?: Dispatch<SetStateAction<string>>;
  children: React.ReactElement<TabProps>[]; // Specify that children are of type Tab
}

// Tabs component
export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  className,
  onValueChange,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onValueChange?.(value); // Call the passed function if it exists
  };

  return (
    <div className={`tabs ${className}`}>
      <div className="flex space-x-2">
        {React.Children.map(children, (child) => {
          // Ensure that the child is of type Tab
          if (React.isValidElement(child) && child.type === Tab) {
            return React.cloneElement(child, {
              isActive: child.props.value === activeTab,
              onChange: handleTabChange,
            } as TabProps);
          }
          return child;
        })}
      </div>
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement(child) &&
          child.type === TabsContent &&
          child.props.value === activeTab
        ) {
          return child;
        }
        return null;
      })}
    </div>
  );
};
