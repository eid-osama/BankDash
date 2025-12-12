interface TransactionDetails {
  Icon: React.ElementType;
  description: string;
  date: string;
  money: string;

  moneyValue?: number;
  highlightAmount?: boolean;

  type?: string;
  card?: string;
  status?: string;

  className?: string;
  iconSize?: string;
  textSize?: string;
}

function TransactionsCard({
  Icon,
  description,
  date,
  money,
  moneyValue,
  highlightAmount = false,
  type,
  card,
  status,
  className,
  iconSize = "60",
  textSize = "text-base",
}: TransactionDetails) {
  return (
    <div className={`flex justify-between items-center ${className} last:mb-0`}>
      <div className="flex items-center gap-3 w-full max-w-[220px]">
        <Icon className={`${iconSize}`} />
        <div className={`flex flex-col ${textSize}`}>
          <p>{description}</p>
          <p className="text-gray-500">{date}</p>
        </div>
      </div>

      {type && card && status && (
        <>
          <div
            className={`hidden xl:block text-gray-500 ${textSize} w-full max-w-[75px] xxl:max-w-[85px]`}
          >
            <p>{type}</p>
          </div>
          <div
            className={`hidden md:block text-gray-500 ${textSize} w-full max-w-[180px]`}
          >
            <p className="text-center">{card}</p>
          </div>
          <div
            className={`hidden md:block text-gray-500 ${textSize} w-full max-w-[75px] xxl:max-w-[85px]`}
          >
            <p>{status}</p>
          </div>
        </>
      )}

      {/* AMOUNT — RED/WITHDRAW OR GREEN/DEPOSIT ONLY IF highlightAmount IS TRUE */}
      <div className={`${textSize}`}>
        <p
          className={`font-semibold ${
            highlightAmount && moneyValue !== undefined
              ? moneyValue < 0
                ? "text-red-500"
                : "text-green-600"
              : ""
          }`}
        >
          {money}
        </p>
      </div>
    </div>
  );
}

export default TransactionsCard;
