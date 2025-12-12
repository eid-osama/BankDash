interface CreditCardProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  isActive?: boolean;
  className?: string;
}

export default function CreditCard({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  isActive = true,
  className = "",
}: CreditCardProps) {
  const cardClasses = isActive
    ? "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg"
    : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 shadow-md";

  const textClasses = isActive ? "text-blue-100" : "text-gray-500";
  const iconBgClasses = isActive
    ? "bg-white/20 backdrop-blur-sm"
    : "bg-gray-400";
  const toggleBgClasses = isActive ? "bg-white" : "bg-gray-400";
  const toggleDotClasses = isActive ? "bg-blue-600" : "bg-gray-600";

  return (
    <div
      className={`rounded-2xl p-6 min-w-[320px] relative overflow-hidden ${cardClasses} ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

      {/* Card Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className={`${textClasses} text-sm font-medium mb-1`}>Balance</p>
            <p className="text-3xl font-bold">{balance}</p>
          </div>
          <div
            className={`w-10 h-10 ${iconBgClasses} rounded-lg flex items-center justify-center text-lg`}
          >
            💳
          </div>
        </div>

        {/* Chip */}
        <div className="mb-6">
          <div className="w-12 h-8 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-md flex items-center justify-center">
            <div className="w-8 h-5 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-sm flex items-center justify-center">
              <div className="w-6 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Card Holder */}
        <div className="mb-6">
          <p
            className={`${textClasses} text-xs font-semibold tracking-wider mb-1`}
          >
            CARD HOLDER
          </p>
          <p className="text-lg font-semibold">{cardHolder}</p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end">
          <div>
            <p
              className={`${textClasses} text-xs font-semibold tracking-wider mb-1`}
            >
              VALID THRU
            </p>
            <p className="text-lg font-semibold">{validThru}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-mono tracking-wider">
              {cardNumber}
            </span>
            <div
              className={`w-10 h-5 ${toggleBgClasses} rounded-full p-1 shadow-inner`}
            >
              <div
                className={`w-3 h-3 ${toggleDotClasses} rounded-full transition-all duration-200`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
