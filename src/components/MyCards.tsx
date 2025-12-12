import {
  ChipCard,
  ChipCardGray,
  MasterCard,
  MasterCardGray,
} from "@/assets/icons";

type variation = "darkBlue" | "lightBlue" | "white";

interface MyCardsProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  variation?: variation;
}

function MyCards({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  variation = "darkBlue",
}: MyCardsProps) {
  let cardGradiant;
  if (variation === "darkBlue") {
    cardGradiant = "bg-linear-to-r from-[#4C49ED] to-[#0A06F4] text-white";
  } else if (variation === "lightBlue") {
    cardGradiant = "bg-linear-to-br from-[#2D60FF] to-[#539BFF] text-white";
  } else if (variation === "white") {
    cardGradiant = "bg-white text-[#343C6A] border-[1px] border-[#DFEAF2]";
  }
  return (
    <div
      className={`${cardGradiant} font-medium font-[Lato] max-w-[350px] w-full max-h-[235px] h-full rounded-[25px]`}
    >
      <div className={`max-w-[350px] w-full max-h-[165px] h-full`}>
        <div className="flex flex-col gap-y-[23px] xxl:gap-y-[33px] pl-[20px] pr-[20px] pb-[16px] pt-[17px] xxl:pl-[26px] xxl:pr-[24px] xxl:pb-[35px] xxl:pt-[24px]">
          <div className=" flex justify-between">
            <div className="flex flex-col ">
              <p className="text-[11px] xxl:text-[12px]  h-[14px]">Balance</p>
              <p className="text-[16px] xxl:text-[20px]  h-[24px] leading-[24px]">
                ${balance}
              </p>
            </div>
            <div>{variation === "white" ? <ChipCardGray /> : <ChipCard />}</div>
          </div>
          <div className=" flex justify-between max-w-[177px] xxl:max-w-[227px] w-full">
            <div>
              <p className="text-[10px] xxl:text-[12px] h-[14px] opacity-70">
                CARD HOLDER
              </p>
              <p className="text-[13px] xxl:text-[15px] h-[18px]">
                {cardHolder}
              </p>
            </div>
            <div>
              <p className="text-[10px] xxl:text-[12px] h-[14px] opacity-70">
                VALID THRU
              </p>
              <p className="text-[13px] xxl:text-[15px] h-[18px]">
                {validThru}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          variation === "white"
            ? `max-w-[350px] w-full h-[51px] xxl:h-[70px] border-t-[1px] border-[#DFEAF2]`
            : `max-w-[350px] w-full h-[51px] xxl:h-[70px]`
        }
      >
        <div className="flex justify-between gap-x-[32px] xxl:gap-x-[62px] px-[20px] py-[16px] xxl:py-[20px] xxl:pl-[26px] xxl:pr-[24px] bg-linear-to-b from-[#FFFFFF]/15 to-[#FFFFFF]/0 h-[51px] xxl:h-[70px]">
          <p className="text-[15px] xxl:text-[23px] h-[18px] leading-[18px] kg:h-[26px] xxl:leading-[29px] whitespace-nowrap">
            {cardNumber}
          </p>
          {variation === "white" ? (
            <MasterCardGray className="w-[27px] h-[18px] xxl:w-[44px] xxl:h-[33px]" />
          ) : (
            <MasterCard className="w-[27px] h-[18px] xxl:w-[44px] xxl:h-[33px]" />
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCards;
