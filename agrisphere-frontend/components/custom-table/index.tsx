"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { DataItem, ITableProps } from "@/types";
import { ReactNode } from "react";
// import { Pagination } from '../pagination'

type CellRenderer<T> = (item: T, column: keyof T) => ReactNode;

export interface EnhancedTableProps<T extends DataItem> extends ITableProps<T> {
  cellRenderers?: Partial<Record<keyof T, CellRenderer<T>>>;
  columnOrder?: (keyof T)[];
  columnLabels?: Partial<Record<keyof T, string>>;
}

export function TableComponent<T extends DataItem>({
  tableData,
  currentPage,
  totalPages,
  onPageChange,
  cellRenderers = {},
  columnOrder,
  columnLabels = {},
  onRowClick,
}: EnhancedTableProps<T>) {
  if (tableData.length === 0) return <div>No data available</div>;

  const columns = columnOrder || (Object.keys(tableData[0]) as (keyof T)[]);

  const formatColumnName = (name: string) => {
    return (
      columnLabels[name as keyof T] ||
      name.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
        return str.toUpperCase();
      })
    );
  };

  const renderCellContent = (item: T, column: keyof T) => {
    if (cellRenderers[column]) {
      return cellRenderers[column]!(item, column);
    }

    return String(item[column]);
  };

  return (
    <div className="w-full">
      <div className="rounded-md overflow-hidden">
        <Table>
          <TableHeader className="bg-[#FAFAFA]">
            <TableRow className="border-none">
              {columns.map((column, index) => (
                <TableHead
                  className={cn(
                    "py-4 font-bold text-xs text-[#667085]",
                    index === 0 ? "pl-4" : ""
                  )}
                  key={String(column)}
                >
                  {formatColumnName(String(column))}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {tableData.map((item, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="border-b border-gray-50 cursor-pointer hover:bg-accent-nuetral"
              >
                {columns.map((column, colIndex) => (
                  <TableCell
                    className={cn(
                      "py-4 text-[#111827]",
                      colIndex === 0 ? "pl-6" : ""
                    )}
                    key={String(column)}
                  >
                    {renderCellContent(item, column)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* <Pagination
				currentPage={currentPage}
				onPageChange={onPageChange}
				totalPages={totalPages}
			/> */}
    </div>
  );
}
