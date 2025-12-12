import React from "react";

interface SummaryCardProps {
  title: string;
  value: string;
  Icon: React.ElementType;
  className?: string;
}

export default function ServiceCard({
  title,
  value,
  Icon,
  className = "",
}: SummaryCardProps) {
  return (
    <div
      className={`flex items-center bg-white rounded-[25px] py-[20px] px-[17px] md:py-[20px] md:px-[15px] xxl:py-[25px] xxl:px-[36px] max-w-[155px] md:max-w-[255px] xxl:!max-w-[350px] w-full shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 ${className}`}
    >
      <div className="flex items-center gap-[10px] md:gap-[12px] xxl:!gap-[20px]">
        <span className="text-2xxl">
          <Icon className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] xxl:!w-[70px] xxl:!h-[70px]" />
        </span>
        <div>
          <p className="text-[16px] xxl:text-[25px] font-bold text-gray-800 mb-[4px] xxl:mb-[7px]">
            {title}
          </p>
          <p className="text-[#718EBF] text-[12px] xxl:text-[16px] font-medium ">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
