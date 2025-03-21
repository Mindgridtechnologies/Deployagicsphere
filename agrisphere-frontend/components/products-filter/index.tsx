"use client";

import { SelectFilter } from "../filters/select-filter";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import RangeBar from "../range-bar";

interface iProps {
  categories?: string;
  location?: string;
  ratings?: string;
  setCategories: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setRatings: React.Dispatch<React.SetStateAction<string>>;
  showAvailabity?: boolean;
  showSellerType?: boolean;
  showLocation?: boolean;
}

const ProductsFilter: React.FC<iProps> = ({
  categories,
  location,
  ratings,
  setCategories,
  setLocation,
  setRatings,
  showAvailabity = false,
  showSellerType = false,
  showLocation = true,
}) => {
  const status = [
    {
      text: "Active",
      value: "active",
    },
    {
      text: "Inactive",
      value: "inactive",
    },
  ];

  return (
    <Card className="max-w-[324px] h-[calc(100vh-112px)] w-full overflow-y-scroll sticky">
      <CardContent className="px-4 py-8">
        <div className="flex justify-between mb-4 text-[#1D2023] text-xs">
          <p>Apply Filter</p>
          <p
            className="underline cursor-pointer"
            onClick={() => {
              setCategories("");
              setLocation("");
              setRatings("");
            }}
          >
            Clear All
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {categories && (
            <div className="px-2 py-1 bg-[#0A8D56] text-white font-medium text-sm rounded-[1rem] flex gap-2">
              <p>Categories: {categories}</p>{" "}
              <span
                className="cursor-pointer"
                onClick={() => setCategories("")}
              >
                x
              </span>
            </div>
          )}
          {location && (
            <div className="px-2 py-1 bg-[#0A8D56] text-white font-medium text-sm rounded-[1rem] flex gap-2">
              <p>Location: {location}</p>{" "}
              <span className="cursor-pointer" onClick={() => setLocation("")}>
                x
              </span>
            </div>
          )}
          {ratings && (
            <div className="px-2 py-1 bg-[#0A8D56] text-white font-medium text-sm rounded-[1rem] flex gap-2">
              <p>Ratings: {ratings}</p>{" "}
              <span className="cursor-pointer" onClick={() => setRatings("")}>
                x
              </span>
            </div>
          )}
        </div>
        <RangeBar />
        <div className="flex flex-col">
          <SelectFilter
            label="Categories"
            list={status}
            setFilter={setCategories}
            placeholder="Filter by categories"
          />
          {showLocation && (
            <SelectFilter
              label="Location"
              list={status}
              setFilter={setLocation}
              placeholder="Filter by location"
            />
          )}
          {showAvailabity && (
            <SelectFilter
              label="Availability"
              list={status}
              setFilter={setLocation}
              placeholder="Filter by location"
            />
          )}
          {showSellerType && (
            <SelectFilter
              label="Seller Type"
              list={status}
              setFilter={setLocation}
              placeholder="Filter by location"
            />
          )}
          <SelectFilter
            label="Supplier Ratings & Reviews"
            list={status}
            setFilter={setRatings}
            placeholder="Filter by ratings"
          />
          <div className="flex justify-center">
            <Button variant="customPrimary" className="w-[75%]">
              Apply
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductsFilter;
