"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { TableComponent } from "@/components/custom-table";
import Link from "next/link";
import { LogisticData } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

const LogisticDataTable: React.FC = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const tableData: LogisticData[] = [
    {
      id: "1",
      item: "Cassava",
      destination: "Abuja",
      status: "In transit",
    },
    {
      id: "2",
      item: "Rice",
      destination: "Lagos",
      status: "Pending",
    },
    {
      id: "3",
      item: "Wheat",
      destination: "Ogun",
      status: "Delivered",
    },
  ];

  const cellRenderers = {
    item: (item: LogisticData) => (
      <span className="font-medium">{item.item}</span>
    ),
    destination: (item: LogisticData) => (
      <span className="font-medium">{item.destination}</span>
    ),
    status: (item: LogisticData) => (
      <Badge
        variant={
          item.status.toLowerCase() === "in transit"
            ? "warning"
            : item.status.toLowerCase() === "pending"
            ? "pending"
            : item.status.toLowerCase() === "delivered"
            ? "success"
            : "warning"
        }
        className="py-1 px-6 font-bold text-[0.625rem] rounded-[24px]"
      >
        {item.status.toUpperCase()}
      </Badge>
    ),
  };

  const columnOrder: (keyof LogisticData)[] = ["item", "destination", "status"];

  const columnLabels = {
    item: "Item",
    destination: "Destination",
    status: "Status",
  };

  return (
    <Card>
      <CardContent className="px-4 py-7">
        <div className="flex items-center justify-between pb-7 border-b border-[#EAECF0]">
          <h6 className="font-bold text-xl text-[#000000]">Logistic</h6>
          <Link
            href="#"
            className="etxt-xs font-medium text-[#0A8D56] underline"
          >
            view all
          </Link>
        </div>
        <TableComponent<LogisticData>
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

export default LogisticDataTable;
