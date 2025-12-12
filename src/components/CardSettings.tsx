import { BlockCard, PinCode } from "@/assets/icons";
import { CircleGauge, GlobeLock } from "lucide-react";

function CardSettings() {
  return (
    <div className=" bg-white rounded-[25px] p-[20px] xl:p-[30px] flex flex-col gap-y-[20px] xl:gap-y-[40px]">
      <div className="flex items-center gap-3 ">
        <BlockCard className="w-[40px] h-[40px] xl:w-[60px] xl:h-[60px]" />

        <div className="flex flex-col">
          <p className="text-[14px] md:text-[12px] xl:text-[16px]">
            Block Card
          </p>
          <p className="text-[12px] md:text-[11px] xl:text-[15px] text-[#718EBF]">
            Instantly block your card
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <PinCode className="w-[40px] h-[40px] xl:w-[60px] xl:h-[60px]" />

        <div className="flex flex-col">
          <p className="text-[14px] md:text-[12px] xl:text-[16px]">
            Change Pin Code
          </p>
          <p className="text-[12px] md:text-[11px] xl:text-[15px] text-[#718EBF]">
            Choose another pin code
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="rounded-[20px] bg-[#DCFAF8] flex justify-center items-center w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]">
          <CircleGauge className="w-[20px] h-[20px] xl:w-[26px] xl:h-[26px] text-[#16DBCC]" />
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] md:text-[12px] xl:text-[16px]">
            Set card spending limit
          </p>
          <p className="text-[12px] md:text-[11px] xl:text-[15px] text-[#718EBF]">
            Restrict maximum card usage
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="rounded-[20px] bg-[#FFE0EB] flex justify-center items-center w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]">
          <GlobeLock className=" w-[20px] h-[20px] xl:w-[26px] xl:h-[26px] text-[#FF82AC]" />
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] md:text-[12px] xl:text-[16px]">
            Enable/Disable online payments
          </p>
          <p className="text-[12px] md:text-[11px] xl:text-[15px] text-[#718EBF]">
            Toggle online payment access
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardSettings;
