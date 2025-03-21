"use client";

import { BoxTabIcon, HorizontalThreeDotsIcon } from "@/public/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Overview from "./overview";
import FarmingCycle from "./farming-cycle";

const FarmManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const tabList = [
    {
      title: "Overview",
      icon: <BoxTabIcon />,
      value: "overview",
    },
    {
      title: "Farming Cycle",
      icon: <BoxTabIcon />,
      value: "farming-cycle",
    },
    {
      title: "Farm Planning",
      icon: <BoxTabIcon />,
      value: "farm-planning",
    },
  ];

  return (
    <section>
      <Tabs defaultValue={activeTab}>
        <TabsList className="flex 2xl:gap-6 gap-4 bg-white p-6 w-full mb-5">
          <div className="flex items-center gap-4">
            <h6 className="font-bold text-2xl text-[#01190F]">
              Farm Management
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
          <TabsContent value="overview">
            <Overview />
          </TabsContent>
          <TabsContent value="farming-cycle">
            <FarmingCycle />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default FarmManagement;
