import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface BankData {
  data: { name: string; value: number; color?: string }[];
}

const ExpenseStatistics = ({ data }: BankData) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-[25px] px-[25px] pb-[20px] pt-[20px] xl:px-[50px] xl:pb-[28px] xl:pt-[30px]">
      <div className="relative w-full max-w-[190px] h-[160px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
        {data.map((bank, index) => (
          <div key={index} className="flex items-center gap-2.5">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: bank.color }}
            />
            <span
              className="text-[12px] xl:text-[16px] font-medium"
              style={{ color: bank.color }}
            >
              {bank.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseStatistics;
