"use client";

import { BoxTabIcon, HorizontalThreeDotsIcon } from "@/public/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Explore from "./explore";

const InputSuppliers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("explore");
  const tabList = [
    {
      title: "Explore",
      icon: <BoxTabIcon />,
      value: "explore",
    },
    {
      title: "My Lank Bank",
      icon: <BoxTabIcon />,
      value: "my-land-bank",
    },
    {
      title: "Investment Pool",
      icon: <BoxTabIcon />,
      value: "investment-pool",
    },
  ];

  return (
    <section>
      <Tabs defaultValue={activeTab}>
        <TabsList className="flex 2xl:gap-6 gap-4 bg-white p-6 w-full mb-5">
          <div className="flex items-center gap-4">
            <h6 className="font-bold text-2xl text-[#01190F]">
              Input Suppliers
            </h6>
            <HorizontalThreeDotsIcon />
          </div>
          {tabList.map((tab, index: number) => (
            <TabsTrigger
              value={tab.value}
              key={index}
              onClick={() => setActiveTab(tab.value)}
              className={`w-auto cursor-pointer ${
                activeTab === tab.value
                  ? "text-[#0A8D56] border-[#0A8D56] border-b-[0.75px]"
                  : ""
              }`}
            >
              <span>{tab.icon}</span>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="p-4">
          <TabsContent value="explore">
            <Explore />
          </TabsContent>
          <TabsContent value="farming-cycle"></TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default InputSuppliers;
