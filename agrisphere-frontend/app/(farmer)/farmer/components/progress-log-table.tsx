"use client";

import { useState } from "react";
import { TableComponent } from "@/components/custom-table";
import Link from "next/link";
import { ProgressLogData } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

const ProgressLogDataTable: React.FC = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const tableData: ProgressLogData[] = [
    {
      log_no: "1",
      date: "Feb 7, 2024",
      activity: "Workers Hired",
      description:
        "10 new workers was hired at a total cost of N50,000.00 per day",
      cost: "50,000.00",
    },
    {
      log_no: "2",
      date: "Feb 3, 2024",
      activity: "Workers Hired",
      description:
        "10 new workers was hired at a total cost of N50,000.00 per day",
      cost: "10,000.00",
    },
    {
      log_no: "3",
      date: "Feb 8, 2024",
      activity: "Workers Hired",
      description:
        "10 new workers was hired at a total cost of N50,000.00 per day",
      cost: "30,000.00",
    },
    {
      log_no: "4",
      date: "Feb 1, 2024",
      activity: "Workers Hired",
      description:
        "10 new workers was hired at a total cost of N50,000.00 per day",
      cost: "20,000.00",
    },
  ];

  const cellRenderers = {
    log_no: (item: ProgressLogData) => (
      <span className="font-medium">{item.log_no}</span>
    ),
    date: (item: ProgressLogData) => (
      <span className="font-medium">{item.date}</span>
    ),
    activity: (item: ProgressLogData) => (
      <span className="font-medium">{item.activity}</span>
    ),
    description: (item: ProgressLogData) => (
      <span className="font-medium">{item.description}</span>
    ),
    cost: (item: ProgressLogData) => (
      <span className="font-medium text-[#061B2E]">₦ {item.cost}</span>
    ),
  };

  const columnOrder: (keyof ProgressLogData)[] = [
    "log_no",
    "date",
    "activity",
    "description",
    "cost",
  ];

  const columnLabels = {
    log_no: "Log No",
    date: "Date",
    activity: "activity",
    description: "Description",
    cost: "Total Cost",
  };

  return (
    <Card className="flex-1">
      <CardContent className="px-4 py-7">
        <div className="flex items-center justify-between pb-10 border-b border-[#EAECF0]">
          <h6 className="font-bold text-xl text-[#000000]">
            Farm Progress Log
          </h6>
          {/* <Link
            href="#"
            className="etxt-xs font-medium text-[#0A8D56] underline"
          >
            view all
          </Link> */}
        </div>
        <TableComponent<ProgressLogData>
          tableData={tableData}
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalPages={Math.ceil(tableData.length / pageSize)}
          cellRenderers={cellRenderers}
          columnOrder={columnOrder}
          columnLabels={columnLabels}
        />
      </CardContent>
    </Card>
  );
};

export default ProgressLogDataTable;
