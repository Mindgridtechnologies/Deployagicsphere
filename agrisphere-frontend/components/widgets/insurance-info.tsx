import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

const InsuranceInformation: React.FC = () => {
  return (
    <Card>
      <CardContent className="p-7 2xl:p-8">
        <div className="flex justify-between mb-3">
          <div>
            <h3 className="font-bold text-xl text-[#221A1A] mb-4">
              Insurance Information
            </h3>
            <Badge
              variant="outline"
              className="text-[0.75rem] py-1 px-2 flex items-center gap-1 text-[#0A8D56] font-medium text-[10px]"
            >
              <span className="w-[5px] h-[5px] rounded-full bg-[#0A8D56]"></span>
              Active
            </Badge>
          </div>
          <div className="text-[#01190F]">
            <p className="font-medium text-[14px] mb-3">Your next bill</p>
            <h3 className="font-bold text-[1.75rem] mb-4">₦48,099</h3>
            <Badge
              variant="custom"
              className="bg-[#00B929] text-[0.75rem] text-[#221A1A] py-1 px-3"
            >
              See Bill
            </Badge>
          </div>
        </div>
        <p className="font-medium text-xs mb-3 text-[#221A1A]">
          Payment Schedule: Annual
        </p>
        <p className="font-medium text-xs mb-3 text-[#221A1A]">
          Payment Due Date: March 15, 2025
        </p>
        <div className="flex gap-2">
          <div className="flex justify-end">
            <Image
              src="/images/leadway.png"
              width={25}
              height={24}
              alt="Leadway Ins. logo"
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

export default InsuranceInformation;
