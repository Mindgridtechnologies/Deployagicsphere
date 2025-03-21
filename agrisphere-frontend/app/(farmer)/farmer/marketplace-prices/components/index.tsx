"use client";

import ProductsFilter from "@/components/products-filter";
import { Card, CardContent } from "@/components/ui/card";
import MarketPricesInfo from "@/components/widgets/market-prices";
import { useState } from "react";

const MarketPrices: React.FC = () => {
  const [query, seetQuery] = useState<string>("");
  const [categories, setCategories] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [ratings, setRatings] = useState<string>("");
  return (
    <div className="flex gap-4 p-4">
      <ProductsFilter
        categories={categories}
        location={location}
        ratings={ratings}
        setCategories={setCategories}
        setLocation={setLocation}
        setRatings={setRatings}
        showAvailabity={true}
        showSellerType={true}
        showLocation={false}
      />
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-3 mt-2">
            {Array.from({ length: 9 }, (_, index) => (
              <MarketPricesInfo key={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketPrices;
