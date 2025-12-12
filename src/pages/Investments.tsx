import SummaryCard from "@/components/SummaryCard";
import LineChartComponent from "@/components/LineChartComponent";
import DataTable from "@/components/tables/DataTable";
import {
  AppleStore,
  Google,
  InvestmentNumber,
  ROR,
  Tesla,
  TotalInvestment,
} from "@/assets/icons";
import CardsHeader from "@/components/CardsHeader";
import InvestmentsCard from "@/components/InvestmentsCard";

// Sample data for charts
const yearlyInvestmentData = [
  { year: "2016", amount: 10000 },
  { year: "2017", amount: 22000 },
  { year: "2018", amount: 15000 },
  { year: "2019", amount: 35000 },
  { year: "2020", amount: 20000 },
  { year: "2021", amount: 28000 },
];

const monthlyRevenueData = [
  { year: "2016", amount: 12000 },
  { year: "2017", amount: 18000 },
  { year: "2018", amount: 30000 },
  { year: "2019", amount: 15000 },
  { year: "2020", amount: 10000 },
  { year: "2021", amount: 30000 },
];

const myInvestments = [
  {
    id: 1,
    name: "Apple Store",
    type: "E-commerce, Marketplace",
    investmentValue: 54000,
    returnValue: 16,
    icon: AppleStore,
  },
  {
    id: 2,
    name: "Google",
    type: "E-commerce, Marketplace",
    investmentValue: 25300,
    returnValue: -4,
    icon: Google,
  },
  {
    id: 3,
    name: "Tesla Motors",
    type: "Electric Vehicles",
    investmentValue: 8200,
    returnValue: 25,
    icon: Tesla,
  },
];

const trendingStocks = [
  { slNo: "01", name: "Trivago", price: 520, return: 5 },
  { slNo: "02", name: "Canon", price: 480, return: 10 },
  { slNo: "03", name: "Uber Food", price: 350, return: -3 },
  { slNo: "04", name: "Nokia", price: 940, return: 2 },
  { slNo: "05", name: "Tiktok", price: 670, return: -12 },
];

function Investments() {
  const stockColumns = [
    { key: "slNo", label: "SL No" },
    { key: "name", label: "Name" },
    { key: "price", label: "Price", render: (value: number) => `$${value}` },
    {
      key: "return",
      label: "Return",
      render: (value: number) => (
        <span
          className={`font-medium ${
            value > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {value > 0 ? "+" : ""}
          {value}%
        </span>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 justify-between sm:grid-cols-4 auto-rows-auto gap-x-[25px] xxl:gap-x-[30px] gap-y-6 xxl:gap-[60px] xxl:max-w-[1171px] xxl:mx-auto">
      {/* Summary Cards */}
      <div className="flex max-sm:flex-col max-sm:gap-y-[15px] justify-between flex-wrap md:gap-[25px] md:flex-nowrap col-span-4">
        <SummaryCard
          title="Total Invested Amount"
          value="$150,000"
          Icon={TotalInvestment}
          className="max-sm:max-w-[300px]"
        />
        <SummaryCard
          title="Number of Investments"
          value="1,250"
          Icon={InvestmentNumber}
          className="max-sm:max-w-[300px]"
        />
        <SummaryCard
          title="Rate of Return"
          value="+5.80%"
          Icon={ROR}
          className="max-sm:max-w-[300px]"
        />
      </div>

      {/* Investment Charts */}
      <div className="grid grid-cols-1 col-span-4 lg:grid-cols-10 gap-6">
        <div className="flex flex-col gap-5 col-span-5">
          <CardsHeader>Yearly Total Investment</CardsHeader>
          <LineChartComponent
            data={yearlyInvestmentData}
            dataKey="amount"
            xAxisKey="year"
            type="sharp"
            color="#F59E0B"
          />
        </div>
        <div className="flex flex-col gap-5 col-span-5">
          <CardsHeader>Monthly Revenue</CardsHeader>
          <LineChartComponent
            data={monthlyRevenueData}
            dataKey="amount"
            xAxisKey="year"
            type="curved"
            color="#10B981"
          />
        </div>

        {/* My Investment and Trending Stock Row */}
        {/* My Investment */}
        <div className="col-span-6">
          <CardsHeader>My Investment</CardsHeader>
          <div className=" pt-[18px] ">
            {myInvestments.map((investment) => (
              <InvestmentsCard
                key={investment.id}
                Icon={investment.icon}
                companyName={investment.name}
                companyType={investment.type}
                investmentValue={investment.investmentValue}
                returnValue={investment.returnValue}
              />
            ))}
          </div>
        </div>

        {/* Trending Stock */}
        <div className="col-span-4 flex flex-col gap-[18px]">
          <CardsHeader>Trending Stock</CardsHeader>
          <DataTable columns={stockColumns} data={trendingStocks} />
        </div>
      </div>
    </div>
  );
}

export default Investments;
