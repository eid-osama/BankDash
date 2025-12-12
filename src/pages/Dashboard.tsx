import MultiBarChart from "@/components/charts/MultiBarChart";
import MyCards from "@/components/MyCards";
import CardsHeader from "@/components/CardsHeader";
import CardsLink from "@/components/CardsLink";
import TransactionsCard from "@/components/TransactionsCard";
import { CardDeposit, PaypalDeposit, RecivedTransfer } from "@/assets/icons";
import PieChart from "@/components/PieChartComponent";
import QuickTransfer from "@/components/QuickTransfer";
import AreaChartComponent from "@/components/charts/AreaChartComponent";

// Sample data for charts
const weeklyActivityData = [
  { day: "Sat", deposit: 420, withdraw: 150 },
  { day: "Sun", deposit: 300, withdraw: 200 },
  { day: "Mon", deposit: 250, withdraw: 180 },
  { day: "Tue", deposit: 400, withdraw: 250 },
  { day: "Wed", deposit: 350, withdraw: 220 },
  { day: "Thu", deposit: 280, withdraw: 190 },
  { day: "Fri", deposit: 320, withdraw: 210 },
];

const expenseData = [
  { name: "Bill Expense", value: 15, color: "#FC7900" },
  { name: "Entertainment", value: 25, color: "#343C6A" },
  { name: "Investment", value: 35, color: "#FA00FF" },
  { name: "Others", value: 25, color: "#1814F3" },
];

const balanceHistoryData = [
  { month: "Jul", balance: 400 },
  { month: "Aug", balance: 500 },
  { month: "Sep", balance: 450 },
  { month: "Oct", balance: 600 },
  { month: "Nov", balance: 550 },
  { month: "Dec", balance: 700 },
  { month: "Jan", balance: 650 },
];

const recentTransactions = [
  {
    id: 1,
    description: "Deposit from Card",
    date: "28 January 2021",
    amount: -850,
    icon: CardDeposit,
  },
  {
    id: 2,
    description: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    icon: PaypalDeposit,
  },
  {
    id: 3,
    description: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    icon: RecivedTransfer,
  },
];

// const quickTransferContacts = [
//   { name: "Livia Bator", role: "CEO", avatar: "👩" },
//   { name: "Randy Press", role: "Director", avatar: "👨" },
//   { name: "Workman", role: "Designer", avatar: "👨‍🎨" },
// ];

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-x-[25px] xl:gap-x-[30px] gap-y-6 2xl:gap-[60px] 2xl:max-w-[1171px] 2xl:mx-auto">
      {/* My Cards Section */}
      <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 md:max-w-[730px] 2xl:max-w-[760px]">
        <div className="flex justify-between items-center mb-5 h-[27px]">
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

      {/* Recent Transaction */}
      <div className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2">
        <div className="flex flex-col gap-5 md:max-h-[282px]">
          <CardsHeader>Recent Transaction</CardsHeader>
          <div className="bg-white rounded-[25px] px-[15px] py-[18px] xl:py-[25px] xl:pl-[25px] xl:pr-6 md:overflow-y-auto">
            {recentTransactions.map((transaction) => (
              <TransactionsCard
                key={transaction.id}
                Icon={transaction.icon}
                description={transaction.description}
                date={transaction.date}
                money={
                  (transaction.amount > 0 ? "+" : "-") +
                  "$" +
                  transaction.amount.toLocaleString("en-US").replace("-", "")
                }
                moneyValue={transaction.amount}
                highlightAmount={true}
                className="mb-3 xl:mb-2.5 last:mb-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="flex flex-col gap-y-[18px] md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3">
        <CardsHeader>Weekly Activity</CardsHeader>
        <MultiBarChart
          data={weeklyActivityData}
          dataKeys={[
            { key: "deposit", color: "#1814F3", name: "Deposit" },
            { key: "withdraw", color: "#16DBCC", name: "Withdraw" },
          ]}
          xAxisKey="day"
        />
      </div>

      {/* Expense Statistics */}
      <div className="flex flex-col gap-y-[18px] md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3">
        <CardsHeader>Expense Statistics</CardsHeader>
        <PieChart data={expenseData} />
      </div>

      {/* Quick Transfer and Balance History */}
      <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-[30px] md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-4">
        {/* Quick Transfer */}
        <div className="flex flex-col gap-y-[18px] md:shrink-0">
          <CardsHeader>Quick Transfer</CardsHeader>
          <QuickTransfer />
        </div>
        <div className="flex flex-col gap-y-[18px] w-full">
          <CardsHeader>Balance History</CardsHeader>
          <AreaChartComponent
            data={balanceHistoryData}
            dataKey="balance"
            xAxisKey="month"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
