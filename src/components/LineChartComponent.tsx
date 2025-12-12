import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface LineChartComponentProps {
  data: any[];
  dataKey: string;
  xAxisKey: string;
  type: string;
  color?: string;
  height?: number;
  strokeWidth?: number;
}

export default function LineChartComponent({
  data,
  dataKey,
  xAxisKey,
  color = "#3B82F6",
  height = 300,
  strokeWidth = 3,
  type = "sharp",
}: LineChartComponentProps) {
  return (
    <div className="w-full bg-white rounded-[25px] pt-[18px] pl-[13px] pb-[17px] pr-[18px]">
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey={xAxisKey}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#718EBF" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#718EBF" }}
          />
          <Tooltip />
          {type === "sharp" ? (
            <Line
              type="linear"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={strokeWidth}
              dot={{ fill: "white", strokeWidth: 2, r: 4 }}
            />
          ) : (
            <Line
              type="monotone" // smooth curved line
              dataKey={dataKey}
              stroke={color}
              strokeWidth={strokeWidth}
              dot={false} // remove small dots
              activeDot={false} // remove hover dot
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
