"use client";

import AddButton from "@/components/add-button";
import { TableComponent } from "@/components/custom-table";
import { Badge } from "@/components/ui/badge";
import { HorizontalThreeDotsIcon } from "@/public/icons";
import { FarmCycleData } from "@/types";
import { useState } from "react";

const FarmingCycle: React.FC = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const tableData: FarmCycleData[] = [
    {
      id: "1",
      farmingCycle: "2023/2024",
      productionCost: "50000",
      employeesCount: "20",
      cropType: "Cassava",
      harvestDate: "2024-05-30",
      status: "Planted",
      financialPerformance: "Cost Overview",
    },
    {
      id: "2",
      farmingCycle: "2023/2024",
      productionCost: "30000",
      employeesCount: "15",
      cropType: "Rice",
      harvestDate: "2024-07-15",
      status: "Planted",
      financialPerformance: "Cost on Budget",
    },
    {
      id: "3",
      farmingCycle: "2023/2024",
      productionCost: "70000",
      employeesCount: "25",
      cropType: "Wheat",
      harvestDate: "2024-06-20",
      status: "Planted",
      financialPerformance: "Cost Underrun",
    },
    {
      id: "4",
      farmingCycle: "2023/2024",
      productionCost: "45000",
      employeesCount: "18",
      cropType: "Maize",
      harvestDate: "2024-08-05",
      status: "Planted",
      financialPerformance: "Cost on Budget",
    },
    {
      id: "5",
      farmingCycle: "2023/2024",
      productionCost: "60000",
      employeesCount: "22",
      cropType: "Soybean",
      harvestDate: "2024-09-10",
      status: "Planted",
      financialPerformance: "Cost Overview",
    },
  ];

  const cellRenderers = {
    farmingCycle: (item: FarmCycleData) => (
      <span className="font-medium">{item.farmingCycle}</span>
    ),
    productionCost: (item: FarmCycleData) => (
      <span className="font-medium">{item.productionCost}</span>
    ),
    employeeCount: (item: FarmCycleData) => (
      <span className="font-medium">{item.employeesCount}</span>
    ),
    cropType: (item: FarmCycleData) => (
      <span className="font-medium">{item.cropType}</span>
    ),
    harvestDate: (item: FarmCycleData) => (
      <span className="font-medium">{item.harvestDate}</span>
    ),
    status: (item: FarmCycleData) => (
      <Badge
        variant="custom"
        className="py-1 px-6 font-bold text-[0.625rem] rounded-md bg-[#EED8FF] text-[#6B00CF]"
      >
        {item.status.toUpperCase()}
      </Badge>
    ),
    financialPerformance: (item: FarmCycleData) => (
      <Badge
        variant={
          item.financialPerformance.toLowerCase() === "cost overview"
            ? "destructive"
            : item.financialPerformance.toLowerCase() === "pending"
            ? "pending"
            : item.financialPerformance.toLowerCase() === "cost underrun"
            ? "success"
            : "warning"
        }
        className={`py-1 px-6 font-bold text-[0.625rem] rounded-md ${
          item.financialPerformance.toLowerCase() === "cost on budget"
            ? "bg-[#F1ECFD] text-[#1A00FF]"
            : ""
        }`}
      >
        {item.financialPerformance.toUpperCase()}
      </Badge>
    ),
    action: () => (
      <div>
        <HorizontalThreeDotsIcon />
      </div>
    ),
  };

  const columnOrder: (keyof FarmCycleData)[] = [
    "farmingCycle",
    "productionCost",
    "employeesCount",
    "cropType",
    "harvestDate",
    "status",
    "financialPerformance",
  ];
  const columnLabels = {
    farmingCycle: "Farming Cycle",
    ProductionCost: "Production Cost",
    employeesCount: "No Of Employee",
    cropType: "Crop Type ",
    harvestDate: "Expect Harvest Date",
    status: "Status",
    financialPerformance: "Financial Performance",
  };

  return (
    <>
      <div className="flex justify-end gap-4 mb-5">
        <AddButton btnText="Create New Farm Cycle" />
      </div>
      <TableComponent<FarmCycleData>
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

export default FarmingCycle;
