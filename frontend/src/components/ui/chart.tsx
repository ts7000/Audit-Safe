import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Define the type for data points
type DataPoint = {
  name: string;
  value: number;
};

// Define config type
interface ConfigType {
  high: { label: string; color: string };
  medium: { label: string; color: string };
  low: { label: string; color: string };
}

// Context for managing chart data and type
const ChartContext = createContext<{
  data: DataPoint[];
  setData: React.Dispatch<React.SetStateAction<DataPoint[]>>;
  chartType: string;
  setChartType: React.Dispatch<React.SetStateAction<string>>;
  config: ConfigType;
} | null>(null);

// Main Chart Component (provides context to child components)
export const Chart: React.FC<{
  children: ReactNode; // Typing children correctly here
  initialData: DataPoint[];
  initialChartType?: string;
  config: ConfigType;
  className?: string;
}> = ({
  children,
  initialData,
  initialChartType = "Bar",
  config,
  className = "",
}) => {
  const [data, setData] = useState<DataPoint[]>(initialData);
  const [chartType, setChartType] = useState<string>(initialChartType);

  return (
    <ChartContext.Provider
      value={{ data, setData, chartType, setChartType, config }}
    >
      <div className={`p-4 border rounded ${className}`}>{children}</div>
    </ChartContext.Provider>
  );
};

// Container for the chart (renders selected chart type)
export const ChartContainer: React.FC = () => {
  const context = useContext(ChartContext);
  if (!context) return null;

  const { data, chartType, config } = context;

  return (
    <ResponsiveContainer width="100%" height={300}>
      {chartType === "Bar" ? (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltip />} />
          <Legend />
          <Bar dataKey="value" fill={config.high.color} />
        </BarChart>
      ) : chartType === "Line" ? (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke={config.medium.color} />
        </LineChart>
      ) : (
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<ChartTooltip />} />
          <Legend />
          <Bar dataKey="value" fill={config.low.color} />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};

// Tooltip wrapper component with conditional content rendering
export const ChartTooltip: React.FC<{ active?: boolean; payload?: any[] }> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return <ChartTooltipContent payload={payload} />;
  }
  return null;
};

// Tooltip content to display details about the data point
export const ChartTooltipContent: React.FC<{ payload?: any[] }> = ({
  payload,
}) => {
  if (!payload || payload.length === 0) return null;

  const { name, value } = payload[0].payload;

  return (
    <div className="p-2 border rounded bg-white shadow-lg">
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-sm">Value: {value}</p>
    </div>
  );
};

// Chart type selector component
export const ChartTypeSelector: React.FC<{ options: string[] }> = ({
  options,
}) => {
  const context = useContext(ChartContext);
  if (!context) return null;

  const { chartType, setChartType } = context;

  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Chart Type:</label>
      <select
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
        className="p-2 border rounded"
      >
        {options.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
