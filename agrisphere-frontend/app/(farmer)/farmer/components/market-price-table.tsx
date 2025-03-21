"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { TableComponent } from "@/components/custom-table";
import Link from "next/link";
import { MarketPriceData } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DowngressIcon, ProgressIcon } from "@/public/icons";

const MarketPriceTable: React.FC = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const tableData: MarketPriceData[] = [
    {
      id: "1",
      item: "Cassava",
      price: "2000/Kg",
      isProgressive: true,
    },
    {
      id: "2",
      item: "Cassava",
      price: "2000/Kg",
      isProgressive: false,
    },
    {
      id: "3",
      item: "Garden Egg",
      price: "2000/Kg",
      isProgressive: true,
    },
    {
      id: "4",
      item: "Cashew Nut",
      price: "2000/Kg",
      isProgressive: false,
    },
    {
      id: "5",
      item: "Palm Oil",
      price: "2000/Kg",
      isProgressive: true,
    },
  ];

  const cellRenderers = {
    item: (item: MarketPriceData) => (
      <div className="font-medium flex items-center gap-2">
        <Image
          src="/images/avatar.png"
          width={24}
          height={24}
          alt="Admin avatar"
          className="w-6 h-6 rounded-full"
        />
        <p> {item.item}</p>
      </div>
    ),
    quantity: (item: MarketPriceData) => (
      <div className="font-medium">
        <p className="mb-[6px] text-sm text-[#01190F]">₦{item.price}</p>
        <div className="flex gap-2 items-center">
          {item?.isProgressive ? <ProgressIcon /> : <DowngressIcon />}
          <p
            className={`text-sm ${
              item?.isProgressive ? "text-[#00B929]" : "text-[#FF161A]"
            }`}
          >
            10%
          </p>
        </div>
      </div>
    ),
  };

  const columnOrder: (keyof MarketPriceData)[] = ["item", "quantity"];

  const columnLabels = {
    item: "Item",
    quantity: "Quantity",
  };

  return (
    <Card className="w-[300px] 2xl:w-[380px]">
      <CardContent className="p-5">
        <div className="flex items-center justify-between pb-7 border-b border-[#EAECF0]">
          <h6 className="font-bold text-xl text-[#000000]">Market Price</h6>
          <Link
            href="#"
            className="etxt-xs font-medium text-[#0A8D56] underline"
          >
            view all
          </Link>
        </div>
        <TableComponent<MarketPriceData>
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

export default MarketPriceTable;
