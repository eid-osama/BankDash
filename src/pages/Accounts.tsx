import SummaryCard from "@/components/SummaryCard";
import MultiBarChart from "@/components/charts/MultiBarChart";
import {
  AppleStore,
  Balance,
  Expense,
  Income,
  Person,
  Playstation,
  Saving,
  Service,
  Subscription,
} from "@/assets/icons";
import MyCards from "@/components/MyCards";
import CardsHeader from "@/components/CardsHeader";
import CardsLink from "@/components/CardsLink";
import TransactionsCard from "@/components/TransactionsCard";

// Sample data for debit & credit overview
const debitCreditData = [
  { day: "Sat", debit: 200, credit: 150 },
  { day: "Sun", debit: 300, credit: 200 },
  { day: "Mon", debit: 250, credit: 180 },
  { day: "Tue", debit: 400, credit: 250 },
  { day: "Wed", debit: 350, credit: 220 },
  { day: "Thu", debit: 280, credit: 190 },
  { day: "Fri", debit: 320, credit: 210 },
];

const lastTransactions = [
  {
    id: 1,
    description: "Spotify Subscription",
    date: "25 Jan 2021",
    type: "Shopping",
    card: "3778 **** **** 1234",
    status: "Pending",
    amount: -150,
    icon: Subscription,
    color: "bg-green-100",
  },
  {
    id: 2,
    description: "Mobile Service",
    date: "25 Jan 2021",
    type: "Service",
    card: "3778 **** **** 1234",
    status: "Completed",
    amount: -340,
    icon: Service,
    color: "bg-blue-100",
  },
  {
    id: 3,
    description: "Emilly Wilson",
    date: "25 Jan 2021",
    type: "Transfer",
    card: "3778 **** **** 1234",
    status: "Completed",
    amount: 780,
    icon: Person,
    color: "bg-pink-100",
  },
];

const invoicesSent = [
  {
    id: 1,
    name: "Apple Store",
    time: "5h ago",
    amount: 450,
    icon: AppleStore,
  },
  {
    id: 2,
    name: "Michael",
    time: "2 days ago",
    amount: 160,
    icon: Person,
  },
  {
    id: 3,
    name: "Playstation",
    time: "5 days ago",
    amount: 1085,
    icon: Playstation,
  },
  {
    id: 4,
    name: "William",
    time: "10 days ago",
    amount: 90,
    icon: Person,
  },
];

function Accounts() {
  return (
    <div className="grid grid-cols-1 justify-between sm:grid-cols-4 auto-rows-auto gap-x-[25px] xxl:gap-x-[30px] gap-y-6gap-[60px] xxl:max-w-[1171px] xxl:mx-auto">
      {/* Summary Cards */}
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-[15px] md:gap-x-[25px] col-span-4 md:max-w-[750px] lg:max-w-[1100px] xl:max-w-[1110px]">
        <SummaryCard title="My Balance" value="$12,750" Icon={Balance} />
        <SummaryCard title="Income" value="$5,600" Icon={Income} />
        <SummaryCard title="Expense" value="$3,460" Icon={Expense} />
        <SummaryCard title="Total Saving" value="$7,920" Icon={Saving} />
      </div>

      {/* Last Transaction and My Card Row */}
      <div className="grid gap-y-[22px] grid-cols-1 md:grid-cols-3 col-span-4 sm:gap-x-5 md:gap-x-[25px] xl:gap-x-[30px]">
        {/* Last Transaction */}
        <div className="md:col-span-2">
          <div className="flex flex-col gap-5">
            <CardsHeader>Recent Transaction</CardsHeader>
            <div className="bg-white rounded-[25px] px-[15px] py-[18px] xxl:py-[25px] xxl:pl-[25px] xxl:pr-6">
              {lastTransactions.map((transaction) => (
                <TransactionsCard
                  key={transaction.id}
                  Icon={transaction.icon}
                  description={transaction.description}
                  date={transaction.date}
                  type={transaction.type}
                  card={transaction.card}
                  status={transaction.status}
                  money={
                    (transaction.amount > 0 ? "+" : "-") +
                    "$" +
                    transaction.amount.toLocaleString("en-US").replace("-", "")
                  }
                  moneyValue={transaction.amount}
                  highlightAmount={true}
                  className="mb-3 md:mb-2.5"
                  iconSize="w-[40px] h-[40px] xxl:w-[55px] xxl:h-[55px]"
                  textSize="text-[12px] xxl:text-[16px]"
                />
              ))}
            </div>
          </div>
        </div>
        {/* My Card */}
        <div className="md:col-span-1">
          <div className="flex justify-between items-center mb-5 h-[27px]">
            <CardsHeader>My Cards</CardsHeader>
            <CardsLink>See All</CardsLink>
          </div>
          <div>
            <MyCards
              balance="5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variation="darkBlue"
            />
          </div>
        </div>

        {/* Debit & Credit Overview and Invoices Sent Row */}

        {/* Debit & Credit Overview */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-5 h-[27px]">
            <CardsHeader>Debit & Credit Overview</CardsHeader>
          </div>
          <MultiBarChart
            data={debitCreditData}
            dataKeys={[
              { key: "debit", color: "#1A16F3", name: "Debit" },
              { key: "credit", color: "#FCAA0B", name: "Credit" },
            ]}
            xAxisKey="day"
            showTotalsInTitle={true}
          />
        </div>

        {/* Invoices Sent */}
        <div className="md:col-span-1">
          <div className="flex justify-between items-center mb-5 h-[27px]">
            <CardsHeader>Invoices Sent</CardsHeader>
          </div>

          <div className="bg-white rounded-[25px] flex flex-col justify-between w-full max-w-[350px] h-full max-h-[364px] px-[15px] py-[18px] xl:py-[25px] xl:pl-[25px] xl:pr-6 md:overflow-y-auto">
            {invoicesSent.map((invoice) => (
              <TransactionsCard
                key={invoice.id}
                Icon={invoice.icon}
                description={invoice.name}
                date={invoice.time}
                money={
                  "$" + invoice.amount.toLocaleString("en-US").replace("-", "")
                }
                className="mb-[21px]"
                iconSize="w-[45px] h-[45px] xxl:w-[60px] xxl:h-[60px]"
                textSize="text-[13px] xxl:text-[16px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
