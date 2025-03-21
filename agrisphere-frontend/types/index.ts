import { ReactNode } from "react";

export type CellValue =
  | string
  | number
  | boolean
  | Date
  | null
  | undefined
  | ReactNode;

export interface DataItem {
  [key: string]: CellValue;
  id?: string | number;
}

export interface ITableProps<T extends DataItem> {
  tableData: T[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  statusKey?: keyof T;
  onRowClick?: (item: T) => void;
}

export interface OrderData extends DataItem {
  item: string;
  quantity: string;
  status: string;
}

export interface LogisticData extends DataItem {
  item: string;
  destination: string;
  status: string;
}

export interface MarketPriceData extends DataItem {
  item: string;
  price: string;
  isProgressive: boolean;
}

export interface CoperativeData extends DataItem {
  member: string;
  total: string | number;
}

export interface ProgressLogData extends DataItem {
  log_no: string;
  date: string;
  activity: string;
  description: string;
  cost: number | string;
}

export interface FarmCycleData extends DataItem {
  farmingCycle: string;
  productionCost: string;
  employeesCount: string;
  cropType: string;
  harvestDate: string;
  status: string;
  financialPerformance: string;
}

export interface iChemical {
  title?: string;
  price?: string | number;
  value?: number;
  total: number | string;
  rating?: number;
  location?: string;
}

export interface StoredData extends DataItem {
  storeId: string;
  item: string;
  warehouseLocation: string;
  quantity: number;
  status: string;
}
