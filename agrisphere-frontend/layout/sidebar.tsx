"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { farmerSidebarList } from "@/constant";
import { cn } from "@/lib/utils";
import { CompanyIcon } from "@/public/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarComponent: React.FC = () => {
  const path = usePathname();

  return (
    <div>
      <Sidebar>
        <SidebarContent className={cn("py-[30px] px-5")}>
          <SidebarGroup>
            <SidebarGroupLabel className="mb-[63px] w-full">
              <CompanyIcon />
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col gap-2">
                {farmerSidebarList.map((item, index: number) => (
                  <SidebarMenuItem
                    key={item.id}
                    className={`${
                      path === item.link
                        ? "rounded-lg bg-[#F2F4F5] text-[#01190F]"
                        : "text-[#929EAC]"
                    }`}
                  >
                    <SidebarMenuButton asChild className="px-[10px] py-[11px] ">
                      <Link key={index} href={item.link}>
                        <div className="flex w-full items-center gap-3">
                          <span>{item.icon}</span>
                          <h5 className="text-base font-semibold">
                            {item.sidebar}
                          </h5>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};
export default SidebarComponent;
