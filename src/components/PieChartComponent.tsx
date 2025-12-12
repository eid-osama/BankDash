import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface PieChartProps {
  data: { name: string; value: number; color?: string }[];
}

const RADIAN = Math.PI / 180;

export default function PieChartComponent({ data }: PieChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="bg-white rounded-[25px] py-[31px]">
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%" // ✅ Use percentage instead of fixed pixels
            innerRadius="0%"
            isAnimationActive
          >
            {/* {console.log(data as any)} */}
            {data.map((entry, index) => {
              const angle =
                ((entry.value / total) * 360) / 2 +
                data
                  .slice(0, index)
                  .reduce((sum, d) => sum + (d.value / total) * 360, 0);

              const offset = [14, 8, 6, 12][index];
              const xOffset = offset * Math.cos(-angle * RADIAN);
              const yOffset = offset * Math.sin(-angle * RADIAN);

              return (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color || "#8884d8"}
                  transform={`translate(${xOffset}, ${yOffset})`}
                />
              );
            })}

            <LabelList
              content={(props: any) => {
                const { value, index, viewBox } = props;

                if (!viewBox) return null;

                const { cx, cy, startAngle, endAngle, outerRadius } = viewBox;
                const midAngle = (startAngle + endAngle) / 2;
                const radius = outerRadius * 0.65; // Position at 65% of radius

                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                const name = data[index]?.name || "";

                return (
                  <g>
                    <text
                      x={x}
                      y={y - 7}
                      fill="#fff"
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="600"
                    >
                      {value}%
                    </text>
                    <text
                      x={x}
                      y={y + 7}
                      fill="#fff"
                      textAnchor="middle"
                      fontSize="10"
                    >
                      {name}
                    </text>
                  </g>
                );
              }}
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
