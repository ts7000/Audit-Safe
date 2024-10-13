import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Context to share selected value and setter function
const SelectContext = createContext<{
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

// Main Select Component
export const Select: React.FC<{
  children: ReactNode;
  onValueChange: (value: string) => void;
  defaultValue?: string;
  onOpen?: () => void;
  disabled?: boolean; // Add disabled prop
}> = ({ children, onValueChange, defaultValue, onOpen, disabled = false }) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue || ""
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Notify parent when the selected value changes
  useEffect(() => {
    onValueChange(selectedValue);
  }, [selectedValue, onValueChange]);

  // Handle opening the dropdown
  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(true);
      if (onOpen) onOpen(); // Call onOpen if provided
    }
  };

  // Handle closing the dropdown
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider value={{ selectedValue, setSelectedValue }}>
      <div
        className={`relative ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onMouseEnter={!disabled ? handleOpen : undefined} // Conditional events
        onMouseLeave={!disabled ? handleClose : undefined}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
};

// Select Trigger Component (button to open the dropdown)
export const SelectTrigger: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const context = useContext(SelectContext);
  if (!context) return null;

  return (
    <button
      className={`border rounded p-2 w-full flex items-center justify-between ${className}`}
    >
      <span>{context.selectedValue || "Select an option"}</span>
      <span className="ml-2">▼</span>
    </button>
  );
};

// Component to display selected value or a placeholder
export const SelectValue: React.FC<{ placeholder?: string }> = ({
  placeholder,
}) => {
  const context = useContext(SelectContext);
  if (!context) return null;

  return (
    <span>{context.selectedValue || placeholder || "Select an option"}</span>
  );
};

// Content Wrapper for Dropdown Items
export const SelectContent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="absolute z-10 mt-1 border rounded bg-black shadow-lg">
      {children}
    </div>
  );
};

// Individual Dropdown Item Component
export const SelectItem: React.FC<{ value: string; children: ReactNode }> = ({
  value,
  children,
}) => {
  const context = useContext(SelectContext);
  if (!context) return null;

  const { setSelectedValue } = context;

  return (
    <div
      onClick={() => setSelectedValue(value)}
      className="p-2 cursor-pointer hover:bg-gray-200"
    >
      {children}
    </div>
  );
};
