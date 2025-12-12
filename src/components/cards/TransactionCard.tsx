interface TransactionCardProps {
  description: string;
  date: string;
  type?: string;
  card?: string;
  status?: string;
  amount: number;
  icon: string;
  iconBgColor: string;
  className?: string;
}

export default function TransactionCard({
  description,
  date,
  type,
  card,
  status,
  amount,
  icon,
  iconBgColor,
  className = "",
}: TransactionCardProps) {
  const isPositive = amount > 0;
  const amountColor = isPositive ? "text-green-600" : "text-red-600";
  const amountPrefix = isPositive ? "+" : "";

  return (
    <div
      className={`flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all duration-200 ${className}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm ${iconBgColor}`}
        >
          {icon}
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-800 text-base">
              {description}
            </span>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
          {(type || card || status) && (
            <div className="flex items-center gap-3 text-sm">
              {type && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                  {type}
                </span>
              )}
              {card && (
                <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-md text-xs font-medium">
                  {card}
                </span>
              )}
              {status && (
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {status}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="text-right">
        <span className={`font-bold text-lg ${amountColor}`}>
          {amountPrefix}${Math.abs(amount).toLocaleString()}
        </span>
      </div>
    </div>
  );
}
