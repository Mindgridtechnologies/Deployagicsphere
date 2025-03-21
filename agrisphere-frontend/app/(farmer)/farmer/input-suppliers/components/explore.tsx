"use client";

import { InputFilter } from "@/components/filters/input-filter";
import ProductsFilter from "@/components/products-filter";
import { Card, CardContent } from "@/components/ui/card";
import ChemicalInfo from "@/components/widgets/chemical-info";
import { useState } from "react";

const Explore: React.FC = () => {
  const [query, seetQuery] = useState<string>("");
  const [categories, setCategories] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [ratings, setRatings] = useState<string>("");
  return (
    <div className="flex gap-4">
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
          </div>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {Array.from({ length: 9 }, (_, index) => (
              <ChemicalInfo key={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Explore;
