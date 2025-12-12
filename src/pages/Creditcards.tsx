import React from "react";
import { CreditCard } from "@/assets/icons";
import DataTable from "@/components/tables/DataTable";
import CardsHeader from "@/components/CardsHeader";
import MyCards from "@/components/MyCards";
import ExpenseStatistics from "@/components/ExpenseStat";
import CardList from "@/components/CardList";
import CreditCardForm from "@/components/CreditCardForm";
import CardSettings from "@/components/CardSettings";

// Sample data for card expense statistics
const cardExpenseData = [
  { name: "DBL Bank", value: 45, color: "#3B82F6" },
  { name: "ABM Bank", value: 25, color: "#10B981" },
  { name: "BRC Bank", value: 15, color: "#EC4899" },
  { name: "MCP Bank", value: 15, color: "#F59E0B" },
];

const cardList = [
  {
    id: 1,
    type: "Secondary",
    bank: "DBL Bank",
    cardNumber: "**** **** 5600",
    name: "William",
    icon: CreditCard,
  },
  {
    id: 2,
    type: "Secondary",
    bank: "BRC Bank",
    cardNumber: "**** **** 4300",
    name: "Michel",
    icon: CreditCard,
  },
  {
    id: 3,
    type: "Secondary",
    bank: "ABM Bank",
    cardNumber: "**** **** 7560",
    name: "Edward",
    icon: CreditCard,
  },
];

const cardSettings = [
  {
    id: 1,
    title: "Block Card",
    description: "Instantly block your card",
    icon: "💳",
    color: "text-yellow-500",
  },
  {
    id: 2,
    title: "Change Pin Code",
    description: "Choose another pin code",
    icon: "🔒",
    color: "text-purple-500",
  },
  {
    id: 3,
    title: "Add to Google Pay",
    description: "Withdraw without any card",
    icon: "🔵",
    color: "text-red-500",
  },
  {
    id: 4,
    title: "Add to Apple Pay",
    description: "Withdraw without any card",
    icon: "🍎",
    color: "text-green-500",
  },
  {
    id: 5,
    title: "Add to Apple Store",
    description: "Withdraw without any card",
    icon: "🍎",
    color: "text-blue-400",
  },
];

function Creditcards() {
  return (
    <div className="grid grid-cols-1 justify-between sm:grid-cols-3 gap-x-[25px] xxl:gap-x-[30px] gap-y-[24px]  xxl:max-w-[1171px] xxl:mx-auto">
      {/* My Cards Section */}
      <div className="col-span-3 w-full">
        <div className="flex justify-between items-center mb-[20px] h-[27px]">
          <CardsHeader>My Cards</CardsHeader>
        </div>
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex justify-center gap-[25px] xl:gap-[30px] 2xl:gap-[60px] pb-2">
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

      {/* Card Expense Statistics and Card List Row */}

      {/* Card Expense Statistics */}
      <div className="col-span-1">
        <div className="flex justify-between items-center mb-[20px] h-[27px]">
          <CardsHeader>Card Expense Statistics</CardsHeader>
        </div>
        <div>
          <ExpenseStatistics data={cardExpenseData} />
        </div>
      </div>
      {/* Card List */}
      <div className="col-span-2">
        <div className="flex  items-center mb-[20px] h-[27px]">
          <CardsHeader>Card List</CardsHeader>
        </div>
        <div>
          {cardList.map((card) => (
            <CardList
              key={card.id}
              Icon={card.icon}
              bankName={card.bank}
              cardType={card.type}
              nameOnCard={card.name}
              cardNumber={card.cardNumber}
            />
          ))}
        </div>
      </div>

      {/* Add New Card and Card Setting Row */}

      {/* Add New Card */}
      <div className="col-span-2">
        <div className="flex  items-center mb-[20px] h-[27px]">
          <CardsHeader>Add New Card</CardsHeader>
        </div>
        <CreditCardForm />
      </div>

      {/* Card Setting */}
      <div className="col-span-1">
        <div className="flex  items-center mb-[20px] h-[27px]">
          <CardsHeader>Card Settings</CardsHeader>
        </div>
        <CardSettings />
      </div>
    </div>
  );
}

export default Creditcards;
