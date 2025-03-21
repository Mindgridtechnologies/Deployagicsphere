"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { TableComponent } from "@/components/custom-table";
import Link from "next/link";
import { OrderData } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

const OrderDataTable: React.FC = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const tableData: OrderData[] = [
    {
      id: "1",
      item: "Cassava",
      quantity: "20 Tons",
      status: "In transit",
    },
    {
      id: "2",
      item: "Maize",
      quantity: "20 Tons",
      status: "Pending",
    },
    {
      id: "3",
      item: "Cassava",
      quantity: "20 Tons",
      status: "Delivered",
    },
    {
      id: "4",
      item: "Cassava",
      quantity: "20 Litres",
      status: "In transit",
    },
    {
      id: "5",
      item: "Maize",
      quantity: "20 Tons",
      status: "Pending",
    },
    {
      id: "6",
      item: "Cassava",
      quantity: "20 Litres",
      status: "Delivered",
    },
  ];

  const cellRenderers = {
    item: (item: OrderData) => <span className="font-medium">{item.item}</span>,
    quantity: (item: OrderData) => (
      <span className="font-medium">{item.quantity}</span>
    ),
    status: (item: OrderData) => (
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

  const columnOrder: (keyof OrderData)[] = ["item", "quantity", "status"];

  const columnLabels = {
    item: "Item",
    quantity: "Quantity",
    status: "Status",
  };

  return (
    <Card className="flex-1">
      <CardContent className="px-4 py-10">
        <div className="flex items-center justify-between pb-7 border-b border-[#EAECF0]">
          <h6 className="font-bold text-xl text-[#000000]">Order</h6>
          <Link
            href="#"
            className="etxt-xs font-medium text-[#0A8D56] underline"
          >
            view all
          </Link>
        </div>
        <TableComponent<OrderData>
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

export default OrderDataTable;
