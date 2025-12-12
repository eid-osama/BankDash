import {
  Convenience,
  Flexibility,
  RoundBreifcase,
  RoundStock,
  RoundUser,
  Safety,
} from "@/assets/icons";
import BankServicesList from "@/components/BankServicesList";
import CardsHeader from "@/components/CardsHeader";
import ServiceCard from "@/components/ServiceCard";
import SummaryCard from "@/components/SummaryCard";

const serviceCategories = [
  {
    id: 1,
    name: "Life Insurance",
    description: "Unlimited protection",
    icon: "🛡️",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    name: "Shopping",
    description: "Buy. Think. Grow.",
    icon: "🛒",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: 3,
    name: "Safety",
    description: "We are your allies",
    icon: "✅",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

const bankServices = [
  {
    id: 1,
    name: "Business loans",
    description: "It is a long established",
    icon: "💰",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
    buttonColor: "bg-gray-200 text-gray-600",
  },
  {
    id: 2,
    name: "Checking accounts",
    description: "It is a long established",
    icon: "💼",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
    buttonColor: "bg-gray-200 text-gray-600",
  },
  {
    id: 3,
    name: "Savings accounts",
    description: "It is a long established",
    icon: "📈",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
    buttonColor: "bg-blue-600 text-white",
  },
  {
    id: 4,
    name: "Debit and credit cards",
    description: "It is a long established",
    icon: "👤",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    buttonColor: "bg-gray-200 text-gray-600",
  },
  {
    id: 5,
    name: "Life Insurance",
    description: "It is a long established",
    icon: "🛡️",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
    buttonColor: "bg-gray-200 text-gray-600",
  },
  {
    id: 6,
    name: "Business loans",
    description: "It is a long established",
    icon: "💰",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
    buttonColor: "bg-gray-200 text-gray-600",
  },
];

function Services() {
  return (
    <div className="grid grid-cols-1 justify-between sm:grid-cols-3 gap-x-[25px] xxl:gap-x-[30px] gap-y-[24px]  xxl:max-w-[1171px] xxl:mx-auto">
      <div className="grid col-span-4 gap-y-[20px] md:flex  md:gap-[25px]">
        <ServiceCard
          title="Flexibility"
          value="customizable options"
          Icon={Flexibility}
          className="w-full max-w-[350px]"
        />
        <ServiceCard
          title="Convenience"
          value="Easy payments"
          Icon={Convenience}
          className="w-full max-w-[350px]"
        />
        <ServiceCard
          title="Safety"
          value="We are your allies"
          Icon={Safety}
          className="w-full max-w-[350px]"
        />
      </div>
      <div className="col-span-3">
        <div className="flex mb-[20px] h-[27px]">
          <CardsHeader>Bank Services List</CardsHeader>
        </div>
        <BankServicesList />
      </div>
    </div>
  );
}

export default Services;
