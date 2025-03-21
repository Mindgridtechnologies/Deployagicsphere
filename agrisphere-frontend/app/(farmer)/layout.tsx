import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import SidebarComponent from "@/layout/sidebar";
import Navbar from "@/layout/navbar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function FarmerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <section className={cn("flex w-full")}>
        <SidebarComponent />
        <section className="flex-1 bg-[#F1F5F4] h-screen overflow-y-scroll">
          <Navbar />
          <section className="">{children}</section>
        </section>
      </section>
    </SidebarProvider>
  );
}
