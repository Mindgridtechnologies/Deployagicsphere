import { SurebankerIcon } from "@/public/icons";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const BalanceInformation: React.FC = () => {
  return (
    <Card>
      <CardContent className="py-7 2xl:py-8 2xl:px-10 px-9">
        <div className="flex 2xl:gap-7 gap-5 items-center jistify-between mb-5">
          <div className="text-[#01190F]">
            <p className="font-semibold text-[1rem] mb-1">Current Balance</p>
            <h3 className="font-bold text-[1.75rem]">₦875,450.00</h3>
          </div>
          <div className="bg-[#8497A840] w-[2px] h-[133px]"></div>

          <div className="text-[#01190F]">
            <p className="font-semibold text-[1rem] mb-1">Loan Outstanding</p>
            <h3 className="font-bold text-[1.75rem]">₦875,450.00</h3>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex justify-end">
            <Image
              src="/images/sure-banker.png"
              width={23}
              height={25}
              alt="Sure banker logo"
            />
          </div>
          <div className="text-[#1F1919]">
            <p className="text-[0.5rem]">Powered by</p>
            <h3 className="font-bold text-[10px]">SureBanker</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceInformation;
