interface InvestmentProps {
  Icon: React.ElementType;
  companyName: string;
  companyType: string;
  investmentValue: number;
  returnValue: number;
}

function InvestmentsCard({
  Icon,
  companyName,
  companyType,
  investmentValue,
  returnValue,
}: InvestmentProps) {
  return (
    <div className="bg-white rounded-[20px] p-[15px] flex justify-between items-center mb-2.5 w-full max-w-[635px] lg:mb-[15px] last:mb-0">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-3 w-full max-w-[220px] xl:max-w-[280px]">
        <Icon className="w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]" />
        <div className="flex flex-col">
          <p className="text-[14px] md:text-[12px] xl:text-[16px]">
            {companyName}
          </p>
          <p className="text-[12px] md:text-[11px] xl:text-[15px] text-gray-500">
            {companyType}
          </p>
        </div>
      </div>

      {/* INVESTMENT VALUE */}
      <div className="hidden md:flex flex-col">
        <p className="md:text-[12px] xl:text-[16px]">
          {investmentValue.toLocaleString("en-US")}
        </p>
        <p className="md:text-[11px] xl:text-[15px] text-gray-500">
          Investment Value
        </p>
      </div>

      {/* RETURN VALUE WITH COLOR */}
      <div className="flex flex-col">
        <p
          className={`md:text-[12px] xl:text-[16px] font-semibold ${
            returnValue < 0 ? "text-red-500" : "text-green-600"
          }`}
        >
          {returnValue > 0 ? `+${returnValue}%` : `${returnValue}%`}
        </p>

        <p className="hidden md:block md:text-[11px] xl:text-[15px] text-gray-500">
          Return Value
        </p>
      </div>
    </div>
  );
}

export default InvestmentsCard;
