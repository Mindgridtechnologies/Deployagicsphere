"use client";

import { InputFilter } from "@/components/filters/input-filter";
import TabFilter from "@/components/filters/tab-filter";
import ProductsFilter from "@/components/products-filter";
import { Card, CardContent } from "@/components/ui/card";
import LandDetailsInfo from "@/components/widgets/land-details";
import { useState } from "react";

const LandBanking: React.FC = () => {
  const [query, seetQuery] = useState<string>("");
  const [categories, setCategories] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [ratings, setRatings] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("for-sale");
  const tabList = [
    {
      title: "For Sale",
      value: "for-sale",
    },
    {
      title: "For Lease",
      value: "for-lease",
    },
    {
      title: "Investment Pool",
      value: "investment-pool",
    },
  ];
  return (
    <div className="flex gap-4 p-4">
      <ProductsFilter
        categories={categories}
        location={location}
        ratings={ratings}
        setCategories={setCategories}
        setLocation={setLocation}
        setRatings={setRatings}
      />
      <Card>
        <CardContent className="p-4">
          <div>
            <InputFilter setQuery={seetQuery} />
            <TabFilter
              list={tabList}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {Array.from({ length: 9 }, (_, index) => (
              <LandDetailsInfo key={index} activeTab={activeTab} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandBanking;
