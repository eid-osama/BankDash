import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface MultiBarChartProps {
  data: any[];
  dataKeys: { key: string; color: string; name: string }[];
  xAxisKey: string;
  height?: number;
  showLegend?: boolean;
  title?: string;
  showTotalsInTitle?: boolean;
}

export default function MultiBarChart({
  data,
  dataKeys,
  xAxisKey,
  height = 226,
  showLegend = true,
  title,
  showTotalsInTitle = false,
}: MultiBarChartProps) {
  // Get all values from all dataKeys dynamically
  const allValues = data.flatMap((d) => dataKeys.map((key) => d[key.key] || 0));
  const maxValue = Math.max(...allValues);
  const roundedMax = Math.ceil(maxValue / 100) * 100;
  const ticks = Array.from({ length: roundedMax / 100 + 1 }, (_, i) => i * 100);

  // Calculate totals for each dataKey
  const totals = dataKeys.map((dataKey) => ({
    name: dataKey.name,
    total: data.reduce((sum, d) => sum + (d[dataKey.key] || 0), 0),
  }));

  return (
    <div className="pt-[28px] pb-[24px] pl-[33px] pr-[30px] bg-white rounded-[25px] border-gray-100">
      {(title || showTotalsInTitle) && (
        <div className="mb-4">
          {showTotalsInTitle ? (
            <h3 className="text-lg font-semibold text-gray-800">
              {totals.map((item, index) => (
                <span key={item.name}>
                  ${item.total.toLocaleString()} {item.name}ed
                  {index < totals.length - 1 && " & "}
                </span>
              ))}
              {" in this Week"}
            </h3>
          ) : (
            <h3 className="text-lg font-semibold">{title}</h3>
          )}
        </div>
      )}
      {showLegend && (
        <div className="flex gap-6 mb-[22px] justify-end">
          {dataKeys.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm font-medium text-gray-700">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          height={height}
          data={data}
          barSize={15}
          barGap={12}
          barCategoryGap="48px"
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <CartesianGrid stroke="#F3F3F5" vertical={false} />
          <XAxis
            dataKey={xAxisKey}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#6b7280", dy: 7 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            width={30}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            ticks={ticks}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "30px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          {dataKeys.map((item) => (
            <Bar
              key={item.key}
              dataKey={item.key}
              fill={item.color}
              radius={[30, 30, 30, 30]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
