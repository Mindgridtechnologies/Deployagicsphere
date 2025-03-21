import { ProgressIcon } from "@/public/icons";
import { Card, CardContent } from "../ui/card";

const SalesInformation: React.FC = () => {
  return (
    <Card>
      <CardContent className="p-5 2xl:p-7">
        <div className="text-[#01190F]">
          <h6 className="font-bold text-xl mb-5">Sales</h6>
          <p className="font-semibold text-base mb-1">Total earning</p>
          <div className="flex gap-1 items-center">
            <h3 className="font-bold text-[1.75rem]">₦875,450.00</h3>
            <ProgressIcon />
            <p className="text-sm text-[#00B929]">10%</p>
          </div>
          <p className="text-xs">
            Yeay! your sales have surged by $723.12 from last month!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesInformation;
