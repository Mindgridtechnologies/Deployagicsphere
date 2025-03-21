"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormLabel } from "../ui/form";

interface selectType {
  value: string;
  text: string;
}
interface IProps {
  list: selectType[];
  placeholder?: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  customSize?: boolean;
  label?: string;
}

export function SelectFilter({
  list,
  placeholder = "Select season",
  setFilter,
  customSize = false,
  label = "",
}: IProps) {
  return (
    <Select
      onValueChange={(value) => {
        setFilter(value);
      }}
    >
      {label && (
        <p className="text-[#01190F] font-medium text-sm mb-2">{label}</p>
      )}
      <SelectTrigger className={customSize ? "" : "w-full h-10 mb-8"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          {list?.map((list, index: number) => (
            <SelectItem value={list?.value} key={index}>
              {list?.text}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
