import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CautionIcon, HorizontalThreeDotsIcon } from "@/public/icons";
import Image from "next/image";

const InventoryDetails: React.FC = () => {
  return (
    <Card className="w-[300px] 2xl:w-[380px]">
      <CardContent className="xl:p-5 p-4">
        <div className="flex justify-between items-center mb-9">
          <h6 className="font-bold text-xl">Inventory</h6>
          <HorizontalThreeDotsIcon />
        </div>
        <Button variant={"customPrimary"} className="mb-5">
          Track Inventory
        </Button>
        <Card className="bg-[#F6FAFF] border border-[#DBE3EB] mb-5">
          <CardContent className="px-4 xl:px-5 xl:py-7 py-5 flex items-center justify-between">
            <div className="text-[#01190F] ">
              <p className="font-medium text-[1rem] mb-1 flex items-center gap-2">
                Fertilizer <CautionIcon />
              </p>
              <p className="font-bold text-[1rem]">21kg</p>
            </div>
            <Image
              alt="Inventory item image"
              src="/login-image.png"
              height={63}
              width={55}
            />
          </CardContent>
        </Card>
        <Card className="bg-[#F6FAFF] border border-[#DBE3EB] mb-5">
          <CardContent className="p-0">
            <div className="border-b border-[#C6D0DB] 2xl:p-6 p-4 flex items-center justify-between">
              <p className=" text-[#01190F] font-medium text-[1rem] mb-1 flex items-center gap-2">
                Seeds <CautionIcon />
              </p>
              <Image
                alt="Inventory item image"
                src="/login-image.png"
                height={40}
                width={40}
              />
            </div>
            <div className="text-[#01190F] border-b border-[#C6D0DB] 2xl:p-6 p-4 flex items-center justify-between">
              <p className="font-medium text-[1rem] mb-1 flex items-center gap-2">
                Maize <CautionIcon />
              </p>
              <p className="font-bold text-[1rem]">21kg</p>
            </div>
            <div className="text-[#01190F] 2xl:p-6 p-4 flex items-center justify-between">
              <p className="font-medium text-[1rem] mb-1 flex items-center gap-2">
                Rice <CautionIcon />
              </p>
              <p className="font-bold text-[1rem]">21kg</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#F6FAFF] border border-[#DBE3EB]">
          <CardContent className="p-0">
            <div className="border-b border-[#C6D0DB] 2xl:p-6 p-4 flex items-center justify-between">
              <p className="text-[#01190F] font-medium text-[1rem] mb-1 flex items-center gap-2">
                Machinery <CautionIcon />
              </p>
              <Image
                alt="Inventory item image"
                src="/login-image.png"
                height={40}
                width={40}
              />
            </div>
            <div className="flex items-center justify-between text-[#01190F] border-b border-[#C6D0DB] 2xl:p-6 p-4">
              <p className="font-medium text-[1rem] mb-1 flex items-center gap-2">
                Tractors <CautionIcon />
              </p>
              <p className="font-bold text-[1rem]">5</p>
            </div>
            <div className="text-[#01190F] 2xl:p-6 p-4 flex items-center justify-between">
              <p className="font-medium text-[1rem] mb-1 flex items-center gap-2">
                Harvesters <CautionIcon />
              </p>
              <p className="font-bold text-[1rem]">2</p>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default InventoryDetails;
