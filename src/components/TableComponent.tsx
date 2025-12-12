import { DownArrowCircle, UpArrowCircle } from "@/assets/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Transaction {
  id: number;
  description: string;
  transactionId: string;
  type: string;
  card: string;
  date: Date;
  amount: number;
  receipt?: string;
}

interface TableComponentProps {
  transactions: Transaction[];
}

function formatCustomDate(date: Date) {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }); // e.g., "Jan"
  let hours = date.getHours();
  let minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // convert 0 → 12
  return `${day} ${month}, ${hours}.${minutes} ${ampm}`;
}

function TableComponent({ transactions }: TableComponentProps) {
  return (
    <div className="max-w-[1100px] w-full h-[400px] bg-white rounded-[25px] px-[30px] pb-[30px] pt-[22px]">
      <Table className="w-full md:text-[12px] lg:text-[16px]">
        <TableHeader>
          <TableRow>
            <TableHead className="!text-[#718EBF]">Description</TableHead>
            <TableHead className="!text-[#718EBF] hidden min-[375px]:table-cell">
              Transaction ID
            </TableHead>
            <TableHead className="!text-[#718EBF] hidden min-[375px]:table-cell">
              Type
            </TableHead>
            <TableHead className="!text-[#718EBF] hidden min-[375px]:table-cell">
              Card
            </TableHead>
            <TableHead className="!text-[#718EBF] hidden lg:table-cell">
              Date
            </TableHead>
            <TableHead className="!text-[#718EBF]">Amount</TableHead>
            <TableHead className="!text-[#718EBF] hidden min-[375px]:table-cell">
              Receipt
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="items-center">
              <TableCell className="flex justify-between items-center !gap-x-[14px] w-fit h-[65px]">
                {transaction.amount < 0 ? (
                  <UpArrowCircle />
                ) : (
                  <DownArrowCircle />
                )}
                <div className="flex flex-col">
                  {transaction.description}
                  <span className="lg:hidden text-[#718EBF] text-[12px]">
                    {formatCustomDate(transaction.date)}
                  </span>
                </div>
              </TableCell>
              <TableCell className=" hidden min-[375px]:table-cell">
                {transaction.transactionId}
              </TableCell>
              <TableCell className=" hidden min-[375px]:table-cell">
                {transaction.type}
              </TableCell>
              <TableCell className=" hidden min-[375px]:table-cell">
                {transaction.card}
              </TableCell>
              <TableCell className="hidden lg:block">
                {formatCustomDate(transaction.date)}
              </TableCell>
              <TableCell
                className={
                  transaction.amount < 0 ? "text-red-500" : "text-green-500"
                }
              >
                {transaction.amount < 0
                  ? `-$${Math.abs(transaction.amount).toLocaleString()}`
                  : `+$${transaction.amount.toLocaleString()}`}
              </TableCell>
              <TableCell className=" hidden min-[375px]:table-cell">
                <button className=" w-[100px] h-[35px] rounded-[50px] text-[#123288] border-[#123288] border-[1px] hover:border-[#1814F3] hover:text-[#1814F3] text-sm font-medium">
                  Download
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TableComponent;
