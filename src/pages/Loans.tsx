import React from "react";
import SummaryCard from "@/components/SummaryCard";
import DataTable from "@/components/tables/DataTable";
import { UserRound } from "lucide-react";
import {
  RoundBreifcase,
  RoundCustom,
  RoundStock,
  RoundUser,
} from "@/assets/icons";
import CardsHeader from "@/components/CardsHeader";

const loanTypes = [
  {
    id: 1,
    name: "Personal Loans",
    amount: "$50,000",
    icon: "👤",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    name: "Corporate Loans",
    amount: "$100,000",
    icon: "💼",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: 3,
    name: "Business Loans",
    amount: "$500,000",
    icon: "📊",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    id: 4,
    name: "Custom Loans",
    amount: "Choose Money",
    icon: "⚡",
    color: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

const activeLoans = [
  {
    slNo: "01",
    loanMoney: 100000,
    leftToRepay: 40500,
    duration: "8 Months",
    interestRate: "12%",
    installment: 2000,
  },
  {
    slNo: "02",
    loanMoney: 500000,
    leftToRepay: 250000,
    duration: "36 Months",
    interestRate: "10%",
    installment: 8000,
  },
  {
    slNo: "03",
    loanMoney: 200000,
    leftToRepay: 120000,
    duration: "24 Months",
    interestRate: "8%",
    installment: 5000,
  },
  {
    slNo: "04",
    loanMoney: 75000,
    leftToRepay: 30000,
    duration: "12 Months",
    interestRate: "15%",
    installment: 3000,
  },
  {
    slNo: "05",
    loanMoney: 300000,
    leftToRepay: 180000,
    duration: "30 Months",
    interestRate: "9%",
    installment: 6000,
  },
  {
    slNo: "06",
    loanMoney: 150000,
    leftToRepay: 75000,
    duration: "18 Months",
    interestRate: "11%",
    installment: 4000,
  },
  {
    slNo: "07",
    loanMoney: 400000,
    leftToRepay: 200000,
    duration: "48 Months",
    interestRate: "7%",
    installment: 7000,
  },
  {
    slNo: "08",
    loanMoney: 80000,
    leftToRepay: 40000,
    duration: "15 Months",
    interestRate: "13%",
    installment: 3500,
  },
];

function Loans() {
  // Calculate totals
  const totalLoanMoney = activeLoans.reduce(
    (sum, loan) => sum + loan.loanMoney,
    0
  );
  const totalLeftToRepay = activeLoans.reduce(
    (sum, loan) => sum + loan.leftToRepay,
    0
  );
  const totalInstallment = activeLoans.reduce(
    (sum, loan) => sum + loan.installment,
    0
  );

  const loanColumns = [
    { key: "slNo", label: "SL No" },
    {
      key: "loanMoney",
      label: "Loan Money",
      render: (value: number) => `$${value.toLocaleString()}`,
    },
    {
      key: "leftToRepay",
      label: "Left to repay",
      render: (value: number) => `$${value.toLocaleString()}`,
    },
    { key: "duration", label: "Duration" },
    { key: "interestRate", label: "Interest rate" },
    {
      key: "installment",
      label: "Installment",
      render: (value: number) => `$${value.toLocaleString()} / month`,
    },
    {
      key: "repay",
      label: "Repay",
      render: () => (
        <button className="border-[#232323] border text-[#232323] px-7 py-2 rounded-[50px] hover:text-[#1814F3] hover:border-[#1814F3]  transition-colors text-sm">
          Repay
        </button>
      ),
    },
  ];

  const totalRow = {
    slNo: "Total",
    loanMoney: totalLoanMoney,
    leftToRepay: totalLeftToRepay,
    duration: "-",
    interestRate: "-",
    installment: totalInstallment,
    repay: "",
  };

  return (
    <div className="grid grid-cols-1 justify-between sm:grid-cols-4 gap-x-[25px] xxl:gap-x-[30px] gap-y-[24px]  xxl:max-w-[1171px] xxl:mx-auto">
      <div className="grid col-span-4 gap-y-[20px] md:flex  md:gap-[15px] md:justify-center">
        <SummaryCard
          title="Personal Loans"
          value="$50,000"
          Icon={RoundUser}
          className="w-full max-w-[350px]"
        />
        <SummaryCard
          title="Personal Loans"
          value="$50,000"
          Icon={RoundBreifcase}
          className="w-full max-w-[350px]"
        />
        <SummaryCard
          title="Personal Loans"
          value="$50,000"
          Icon={RoundStock}
          className="w-full max-w-[350px]"
        />
        <SummaryCard
          title="Personal Loans"
          value="$50,000"
          Icon={RoundCustom}
          className="w-full max-w-[350px]"
        />
      </div>
      <div className="col-span-4">
        <div className="flex  items-center mb-5 h-[27px]">
          <CardsHeader>Active Loans Overview</CardsHeader>
        </div>
        <DataTable columns={loanColumns} data={activeLoans} />
      </div>
    </div>
  );
}

export default Loans;
