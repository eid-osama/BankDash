import { Custom, Person, Stock, Briefcase } from "@/assets/icons";

function BankServicesList() {
  return (
    <div>
      <div className="bg-white rounded-[20px] p-[15px] flex justify-between items-center mb-2.5 w-full  lg:mb-[15px] last:mb-0">
        <div className="flex items-center gap-3 w-full max-w-[250px]">
          <div className=" flex justify-center items-center w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]">
            <Person className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] xxl:w-[70px]! xxl:h-[70px]!" />
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] md:text-[12px] xl:text-[16px]">
              Personal Loan
            </p>
            <p className="text-[12px] md:text-[11px] xl:text-[15px] text-[#718EBF]">
              Everyday expenses
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-col ">
          <p className="md:text-[12px] xl:text-[16px]">Typical Amount Range</p>
          <p className="md:text-[11px] xl:text-[15px] text-[#718EBF]">
            $500 – $20,000
          </p>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[12px] xl:text-[16px]">Interest Range</p>
          <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
            10% – 18% APR
          </p>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[12px] xl:text-[16px]">Typical Duration</p>
          <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
            1 – 5 years
          </p>
        </div>
        <div>
          <button className="w-[130px] h-[35px] border border-[#718EBF] rounded-[50px] text-[#718EBF] hover:border-[#1814F3] hover:text-[#1814F3] text-[16px] font-medium cursor-pointer">
            Apply
          </button>
        </div>
      </div>
      <div className="bg-white rounded-[20px] p-[15px] flex justify-between items-center mb-2.5 w-full  lg:mb-[15px] last:mb-0">
        <div className="flex items-center gap-3 w-full max-w-[250px]">
          <div className=" flex justify-center items-center w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]">
            <Briefcase className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] xxl:w-[70px]! xxl:h-[70px]!" />
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] md:text-[12px] xl:text-[16px]">
              Business Loan
            </p>
            <p className="text-[12px] md:text-[11px] xl:text-[15px] text-[#718EBF]">
              Funding small business
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-col ">
          <p className="md:text-[12px] xl:text-[16px]">Typical Amount Range</p>
          <p className="md:text-[11px] xl:text-[15px] text-[#718EBF]">
            $2,000 – $150,000
          </p>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[12px] xl:text-[16px]">Interest Range</p>
          <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
            8% – 14% APR
          </p>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[12px] xl:text-[16px]">Typical Duration</p>
          <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
            2 – 7 years
          </p>
        </div>
        <div>
          <button className="w-[130px] h-[35px] border border-[#718EBF] rounded-[50px] text-[#718EBF] hover:border-[#1814F3] hover:text-[#1814F3] text-[16px] font-medium cursor-pointer">
            Apply
          </button>
        </div>
      </div>
      <div className="bg-white rounded-[20px] p-[15px] flex justify-between items-center mb-2.5 w-full  lg:mb-[15px] last:mb-0">
        <div className="flex items-center gap-3 w-full max-w-[250px]">
          <div className=" flex justify-center items-center w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]">
            <Stock className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] xxl:w-[70px]! xxl:h-[70px]!" />
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] md:text-[12px] xl:text-[16px]">
              Corporate Loan
            </p>
            <p className="text-[12px] md:text-[11px] xl:text-[15px] text-[#718EBF]">
              Large-scale financing
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-col ">
          <p className="md:text-[12px] xl:text-[16px]">Typical Amount Range</p>
          <p className="md:text-[11px] xl:text-[15px] text-[#718EBF]">
            $200,000 – $20M+
          </p>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[12px] xl:text-[16px]">Interest Range</p>
          <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
            5% – 10% APR
          </p>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[12px] xl:text-[16px]">Typical Duration</p>
          <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
            5 – 20 years
          </p>
        </div>
        <div>
          <button className="w-[130px] h-[35px] border border-[#718EBF] rounded-[50px] text-[#718EBF] hover:border-[#1814F3] hover:text-[#1814F3] text-[16px] font-medium cursor-pointer">
            Apply
          </button>
        </div>
      </div>
      <div className="bg-white rounded-[20px] p-[15px] flex justify-between items-center mb-2.5 w-full  lg:mb-[15px] last:mb-0">
        <div className="flex items-center gap-3 w-full max-w-[250px]">
          <div className=" flex justify-center items-center w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]">
            <Custom className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] xxl:w-[70px]! xxl:h-[70px]!" />
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] md:text-[12px] xl:text-[16px]">
              Custom Loan
            </p>
            <p className="text-[12px] md:text-[11px] xl:text-[15px] text-[#718EBF]">
              mixed-purpose loans
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-col ">
          <p className="md:text-[12px] xl:text-[16px]">Typical Amount Range</p>
          <p className="md:text-[11px] xl:text-[15px] text-[#718EBF]">
            $1000 – $300,000
          </p>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[12px] xl:text-[16px]">Interest Range</p>
          <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
            6% – 16% APR
          </p>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[12px] xl:text-[16px]">Typical Duration</p>
          <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
            6 months – 10 years
          </p>
        </div>
        <div>
          <button className="w-[130px] h-[35px] border border-[#718EBF] rounded-[50px] text-[#718EBF] hover:border-[#1814F3] hover:text-[#1814F3] text-[16px] font-medium cursor-pointer">
            Apply
          </button>
        </div>
      </div>
      {/* <div className="bg-white rounded-[20px] p-[15px] flex justify-between items-center mb-[10px] w-full  lg:mb-[15px] last:mb-0">
        <div className="flex items-center gap-3 w-full max-w-[250px]">
          <div className=" flex justify-center items-center w-[45px] h-[45px] xl:w-[60px] xl:h-[60px]">
            <div className="flex justify-center items-center bg-[#E7EDFF] w-[45px] h-[45px] xl:w-[60px] xl:h-[60px] rounded-[20px]">
              <CreditCard
                fill="#396AFF"
                className="w-[20px] h-[20px] xl:w-[26px] xl:h-[26px] "
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] md:text-[12px] xl:text-[16px]">
              Debit and credit cards
            </p>
            <p className="text-[12px] md:text-[11px] xl:text-[15px] text-[#718EBF]">
              Everyday purchases
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-col ">
          <p className="md:text-[12px] xl:text-[16px]">Typical Amount Range</p>
          <p className="md:text-[11px] xl:text-[15px] text-[#718EBF]">
            $500 – $20,000
          </p>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[12px] xl:text-[16px]">Interest Range</p>
          <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
            10% – 18% APR
          </p>
        </div>
        <div className="flex flex-col">
          <p className="md:text-[12px] xl:text-[16px]">Typical Duration</p>
          <p className="hidden md:block md:text-[11px] xl:text-[15px] text-[#718EBF]">
            1 – 5 years
          </p>
        </div>
        <div>
          <button className="w-[130px] h-[35px] border border-[#718EBF] rounded-[50px] text-[#718EBF] hover:border-[#1814F3] hover:text-[#1814F3] text-[16px] font-medium cursor-pointer">
            Apply
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default BankServicesList;
