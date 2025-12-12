import React from "react";

interface TableColumn {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: TableColumn[];
  data: any[];
  className?: string;
}

export default function DataTable({
  columns,
  data,
  className = "",
}: DataTableProps) {
  return (
    <div
      className={`bg-white rounded-xl text-[12px] xl:text-[16px] py-[17px] pl-2.5 pr-2.5 xl:pt-[17px] xl:pb-[19px] xl:pl-[18px] xl:pr-[31px] shadow-sm ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#F4F5F7]">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="text-left pb-2 px-4 font-medium text-[#718EBF]"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className=" hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="py-2 px-2 xl:py-3.5 xl:px-4">
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
