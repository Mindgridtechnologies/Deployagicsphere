"use client";

import { useState } from "react";
import { TableComponent } from "@/components/custom-table";
import Link from "next/link";
import { CoperativeData } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

const CooperativeDataTable: React.FC = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const tableData: CoperativeData[] = [
    {
      id: "1",
      member: "Palm Plantation Co-operative",
      total: 78,
    },
    {
      id: "2",
      member: "Oyo Tomatoes Sellers Association",
      total: 43,
    },
    {
      id: "3",
      member: "Oyo Tomatoes Sellers Association",
      total: 78,
    },
    {
      id: "4",
      member: "Palm Plantation Co-operative",
      total: 12,
    },
    {
      id: "5",
      member: "Palm Plantation Co-operative",
      total: 12,
    },
  ];

  const cellRenderers = {
    member: (item: CoperativeData) => (
      <span className="font-medium">{item.member}</span>
    ),
    total: (item: CoperativeData) => (
      <span className="font-medium">{item.total}</span>
    ),
  };

  const columnOrder: (keyof CoperativeData)[] = ["member", "total"];

  const columnLabels = {
    member: "Member",
    total: "Total",
  };

  return (
    <Card className="flex-1">
      <CardContent className="px-4 py-7">
        <div className="flex items-center justify-between pb-10 border-b border-[#EAECF0]">
          <h6 className="font-bold text-xl text-[#000000]">Logistic</h6>
          <Link
            href="#"
            className="etxt-xs font-medium text-[#0A8D56] underline"
          >
            view all
          </Link>
        </div>
        <TableComponent<CoperativeData>
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

export default CooperativeDataTable;
