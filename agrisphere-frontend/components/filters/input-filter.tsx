"use client";

import type { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

export function InputFilter({
  placeholder = "What service are you looking for today?",
  setQuery,
}: {
  placeholder?: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <Input
      placeholder={placeholder}
      onChange={async (event: ChangeEvent<HTMLInputElement>) =>
        setQuery(event.target.value)
      }
      type="search"
      className="h-12 w-[406px] ps-14 rounded-[32px] bg-[#F3F4F7]"
    />
  );
}
