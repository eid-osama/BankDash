interface CardListProps {
  Icon: React.ElementType;
  cardType: string;
  bankName: string;
  nameOnCard: string;
  cardNumber: string;
}

function CardList({
  Icon,
  bankName,
  cardType,
  nameOnCard,
  cardNumber,
}: CardListProps) {
  return (
    <div className="bg-white rounded-[20px] p-[15px] flex justify-between items-center mb-[10px] w-full  lg:mb-[15px] last:mb-0">
      <div className="flex items-center gap-3 ">
        <div className=" flex justify-center items-center w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]">
          <Icon className="w-[20px] h-[20px] xl:w-[26px] xl:h-[26px]" />
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] md:text-[12px] xl:text-[16px]">Card Type</p>
          <p className="text-[12px] md:text-[11px] xl:text-[15px] text-[#718EBF]">
            {cardType}
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-col ">
        <p className="md:text-[12px] xl:text-[16px]">Bank</p>
        <p className="md:text-[11px] xl:text-[15px] text-[#718EBF]">
          {bankName}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="md:text-[12px] xl:text-[16px]">Card Number</p>
        <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
          {cardNumber}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="md:text-[12px] xl:text-[16px]">Name On Card</p>
        <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
          {nameOnCard}
        </p>
      </div>
      <div>
        <button className=" w-[100px] h-[35px]  text-[#1814F3]  text-sm font-medium cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
}

export default CardList;
