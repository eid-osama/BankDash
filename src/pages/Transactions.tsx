import BarChartComponent from "@/components/charts/BarChartComponent";
import MyCards from "@/components/MyCards";
import CardsHeader from "@/components/CardsHeader";
import CardsLink from "@/components/CardsLink";
import TabsComponent from "@/components/TabsComponent";
import TableComponent from "@/components/TableComponent";
import PaginationComponent from "@/components/PaginationComponent";

// Sample data for expense chart
const expenseData = [
  { month: "Aug", amount: 8000 },
  { month: "Sep", amount: 9500 },
  { month: "Oct", amount: 11000 },
  { month: "Nov", amount: 10500 },
  { month: "Dec", amount: 12500 },
  { month: "Jan", amount: 10000 },
];

const transactions = [
  {
    id: 1,
    description: "Spotify Subscription",
    transactionId: "#12548796",
    type: "Shopping",
    card: "3778 **** **** 5678",
    date: new Date("2025-01-14T22:40:00"),
    amount: -2500,
  },
  {
    id: 2,
    description: "Freepik Sales",
    transactionId: "#12548796",
    type: "Transfer",
    card: "3778 **** **** 5678",
    date: new Date("2025-01-14T22:40:00"),
    amount: 750,
  },
  {
    id: 3,
    description: "Mobile Service",
    transactionId: "#12548796",
    type: "Service",
    card: "3778 **** **** 5678",
    date: new Date("2025-01-14T22:40:00"),
    amount: -150,
  },
  {
    id: 4,
    description: "Wilson",
    transactionId: "#12548796",
    type: "Transfer",
    card: "3778 **** **** 5678",
    date: new Date("2025-01-14T22:40:00"),
    amount: -1050,
  },
  {
    id: 5,
    description: "Emilly",
    transactionId: "#12548796",
    type: "Transfer",
    card: "3778 **** **** 5678",
    date: new Date("2025-01-14T22:40:00"),
    amount: 840,
  },
];

function Transactions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-x-[25px] xl:gap-x-[30px] gap-y-[24px] 2xl:gap-[60px] 2xl:max-w-[1171px] 2xl:mx-auto">
      {/* My Cards and My Expense Row */}

      {/* My Cards */}
      <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 md:max-w-[730px] 2xl:max-w-[760px]">
        <div className="flex justify-between items-center mb-[20px] h-[27px]">
          <CardsHeader>My Cards</CardsHeader>
          <CardsLink>See All</CardsLink>
        </div>
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-[25px] xl:gap-[30px] 2xl:gap-[60px] min-w-max pb-2">
            <MyCards
              balance="5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variation="darkBlue"
            />
            <MyCards
              balance="3500"
              cardHolder="Eid Osama"
              validThru="12/30"
              cardNumber="3778 **** **** 1234"
              variation="white"
            />
            <MyCards
              balance="2,100"
              cardHolder="John Doe"
              validThru="08/25"
              cardNumber="3778 **** **** 5678"
              variation="darkBlue"
            />
          </div>
        </div>
      </div>
      <div className="md:col-start-3 md:col-end-4  md:row-start-1 md:row-end-2">
        <div className="flex items-center mb-[20px] h-[27px]">
          <CardsHeader>My Expense</CardsHeader>
        </div>
        {/* My Expense */}
        <BarChartComponent
          data={expenseData}
          dataKey="amount"
          xAxisKey="month"
          title="My Expense"
          color="#EDF0F7"
          height={225}
        />
      </div>

      {/* Recent Transactions */}
      <div className="md:col-start-1 md:col-end-4  md:row-start-2 md:row-end-3 h-screen">
        <div className="flex items-center mb-[27px] h-[27px]">
          <CardsHeader>Recent Transactions</CardsHeader>
        </div>
        <div className="flex flex-col items-start mb-[27px]">
          <div className="mb-[36px] h-[27px] w-full">
            <TabsComponent
              tabsNames={["All Transactions", "Income", "Expense"]}
            />
          </div>
          <TableComponent transactions={transactions} />
          <div className="flex justify-end items-end w-full max-w-[1100px] mt-[30px]">
            <PaginationComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
