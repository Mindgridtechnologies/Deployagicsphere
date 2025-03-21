import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { CertifiedIcon, LocationIcon } from "@/public/icons";
import { iChemical } from "@/types";
import { Button } from "../ui/button";

interface iProps {
  item?: iChemical;
  activeTab: string;
}

const LandDetailsInfo: React.FC<iProps> = ({ item, activeTab }) => {
  return (
    <Card className="rounded-[1rem]">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            width={238}
            height={201}
            alt="Checmical images"
            src="/images/farm.png"
            className="rounded-[1rem] w-full"
          />
          {activeTab !== "investment-pool" && (
            <div
              className={`absolute bottom-[10px] left-[10px] px-[6px] py-[2px] ${
                activeTab === "for-sale"
                  ? "bg-[#FFC629]"
                  : activeTab === "for-lease"
                  ? "bg-[#4154FF] "
                  : ""
              } text-white font-medium text-xs rounded-[1rem]`}
            >
              <p>{activeTab === "for-sale" ? "For Sale" : "For Lease"}</p>
            </div>
          )}
        </div>
        <div className="p-2">
          <h4 className="text-[#0A8D56] text-lg font-bold mb-2">
            ₦{item?.price || "88,000"}{" "}
          </h4>
          <p className="text-sm font-medium text-[#01190F] mb-2">
            {item?.title || "2.4 Acres of FarmLand Along Moniya Iseyin Road"}
          </p>
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
          {activeTab === "investment-pool" && (
            <Button variant="customPrimary" className="mt-2">
              Join Pool
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LandDetailsInfo;
