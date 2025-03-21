import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import Rating from "../rating";
import { CertifiedIcon, LocationIcon } from "@/public/icons";
import { iChemical } from "@/types";

interface iProps {
  item?: iChemical;
}

const MarketPricesInfo: React.FC<iProps> = ({ item }) => {
  return (
    <Card className="rounded-[1rem]">
      <CardContent className="p-0">
        <div>
          <Image
            width={238}
            height={201}
            alt="Chemical images"
            src="/images/crops.png"
            className="rounded-[1rem] w-full"
          />
        </div>
        <div className="p-2">
          <p className="text-sm font-medium text-[#01190F] mb-1">
            {item?.title || "Cowpea"}
          </p>
          <h4 className="text-[#000000] text-lg font-bold">
            ₦{item?.price || "1000"}/Kg
          </h4>
          <span className="font-medium text-[10px]">500kg Min Order</span>
          <div className="pb-2 border-b border-[#C6D0DB] mb-1">
            <Rating rating={item?.rating || 3} />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <LocationIcon />{" "}
              <p className="font-medium text-[10px] text-[#BDBDBD]">
                {item?.location || "Lagos, Nigeria"}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <CertifiedIcon />{" "}
              <p className="font-medium text-[10px] text-[#BDBDBD]">
                Certified Supplier
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketPricesInfo;
