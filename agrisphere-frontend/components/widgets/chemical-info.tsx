import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import Rating from "../rating";
import { CertifiedIcon, LocationIcon } from "@/public/icons";
import { iChemical } from "@/types";

interface iProps {
  item?: iChemical;
}

const ChemicalInfo: React.FC<iProps> = ({ item }) => {
  return (
    <Card className="rounded-[1rem]">
      <CardContent className="p-0">
        <div>
          <Image
            width={238}
            height={201}
            alt="Chemical images"
            src="/images/chemical.png"
            className="rounded-[1rem] w-full"
          />
        </div>
        <div className="p-2">
          <p className="text-sm font-medium text-[#01190F] mb-2">
            {item?.title || "Daksh | Dichlorvos 100% W/V EC | 250ml | 1L"}
          </p>
          <h4 className="text-[#0A8D56] text-lg font-bold mb-2">
            ₦{item?.price || "88,000"}{" "}
            <span className="font-[300] italic text-[10px]">Per unit</span>
          </h4>
          <div className="flex gap-4 items-center mb-2">
            <Progress className="h-[4px] w-[40%]" value={item?.value || 60} />
            <span className="font-[500] text-[8px]">
              {item?.total || 60} Available in stock
            </span>
          </div>
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

export default ChemicalInfo;
