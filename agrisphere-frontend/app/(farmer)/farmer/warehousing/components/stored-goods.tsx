"use client";

import AddButton from "@/components/add-button";
import { TableComponent } from "@/components/custom-table";
import { Badge } from "@/components/ui/badge";
import { HorizontalThreeDotsIcon } from "@/public/icons";
import { StoredData } from "@/types";
import { useState } from "react";

const StoredGoods: React.FC = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const tableData: StoredData[] = [
    {
      storeId: "S001",
      item: "Cassava",
      warehouseLocation: "Akwa-Ibom",
      quantity: 100,
      status: "In Stock",
    },
    {
      storeId: "S002",
      item: "Rice",
      warehouseLocation: "Adamawa",
      quantity: 50,
      status: "Out of Stock",
    },
    {
      storeId: "S003",
      item: "Wheat",
      warehouseLocation: "Anambra",
      quantity: 200,
      status: "In Stock",
    },
    {
      storeId: "S004",
      item: "Maize",
      warehouseLocation: "Jigawa",
      quantity: 30,
      status: "Out of Stock",
    },
    {
      storeId: "S005",
      item: "Soybean",
      warehouseLocation: "Maiduguri",
      quantity: 150,
      status: "In Stock",
    },
    {
      storeId: "S006",
      item: "Soybean",
      warehouseLocation: "Lagos",
      quantity: 150,
      status: "In Stock",
    },
    {
      storeId: "S007",
      item: "Soybean",
      warehouseLocation: "Abuja",
      quantity: 150,
      status: "In Stock",
    },
  ];

  const cellRenderers = {
    storeId: (item: StoredData) => (
      <span className="font-medium">{item.storeId}</span>
    ),
    item: (item: StoredData) => (
      <span className="font-medium">{item.item}</span>
    ),
    warehouseLocation: (item: StoredData) => (
      <span className="font-medium">{item.warehouseLocation}</span>
    ),
    quantity: (item: StoredData) => (
      <span className="font-medium">{item.quantity}</span>
    ),

    status: (item: StoredData) => (
      <Badge
        variant={
          item.status.toLowerCase() === "out of stock"
            ? "destructive"
            : "success"
        }
      >
        {item.status.toUpperCase()}
      </Badge>
    ),
    action: () => (
      <div>
        <HorizontalThreeDotsIcon />
      </div>
    ),
  };

  const columnOrder: (keyof StoredData)[] = [
    "storeId",
    "item",
    "warehouseLocation",
    "quantity",
    "status",
  ];

  const columnLabels = {
    storeId: "Store ID",
    item: "Item",
    warehouseLocation: "Warehouse Location",
    quantity: "Quantity",
    status: "Status",
  };

  return (
    <>
      <div className="flex justify-end gap-4 mb-5">
        <AddButton btnText="Create New Farm Cycle" />
      </div>
      <TableComponent<StoredData>
        tableData={tableData}
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={Math.ceil(tableData.length / pageSize)}
        cellRenderers={cellRenderers}
        columnOrder={columnOrder}
        columnLabels={columnLabels}
      />
    </>
  );
};

export default StoredGoods;
