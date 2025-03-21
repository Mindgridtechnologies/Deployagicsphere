"use client";

import { InputFilter } from "@/components/filters/input-filter";
import { cn } from "@/lib/utils";
import {
  BoxIcon,
  LogoutIcon,
  MessageIcon,
  NotificationIcon,
  ProfileIcon,
} from "@/public/icons";
import Image from "next/image";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  return (
    <section
      className={cn(
        "flex items-center justify-between border-b border-[#CFDBE6] px-6 py-3 bg-white sticky top-0 z-10"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 bg-[#F7F9FA] border border-[#EBEBEB] py-2 px-3 flex gap-4 rounded-lg"
        )}
      >
        <div>
          <p className={cn("text-base font-semibold text-[#01190F] mb-[6px]")}>
            Nneoma Aruna
          </p>
          <div className="py-1 px-2 bg-[#0A8D56] font-medium text-xs etxt-white rounded-[90px] text-center text-white">
            Farmer’s Profile
          </div>
        </div>
        <BoxIcon />
      </div>
      <InputFilter setQuery={setQuery} />
      <div className="flex items-center gap-4">
        <div className="h-11 w-11 rounded-full flex items-center justify-center bg-[#DBE3EB] relative">
          <NotificationIcon />
          <div className="w-3 h-2 rounded-[21.33px] flex items-center justify-center text-[4px] text-white bg-[#FF0000] absolute top-[9px] right-[11px]">
            99+
          </div>
        </div>
        <div className="h-11 w-11 rounded-full flex items-center justify-center bg-[#DBE3EB]">
          <MessageIcon />
          {/* <div className="w-2 h-2 rounded-full bg-[#E03137] absolute top-[-2px] right-[-1px] border border-white"></div> */}
        </div>
        <div className="bg-[#8497A840] w-[2px] h-[40px]"></div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src="/images/avatar.png"
                height={40}
                width={40}
                className="w-10 h-10 rounded-full"
                alt="User icon"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/images/avatar.png"
                    height={50}
                    width={50}
                    className="w-[50px] h-[50px] rounded-full"
                    alt="User icon"
                  />
                  <div>
                    <p className="font-semibold text-xs text-black mb-1">
                      Nneoma Aruna
                    </p>
                    <p className="text-[10px] text-[#667085]">Nneoma Aruna</p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  className="flex items-center gap-6"
                  href={"/farmer/profile"}
                >
                  <ProfileIcon />
                  <p className="text-xs text-black">My Profile</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-6">
                <LogoutIcon />
                <p className="text-xs text-black">Log Out</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
