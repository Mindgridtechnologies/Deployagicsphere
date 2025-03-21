import { CautionIcon, LocationIcon, WeatherIcon } from "@/public/icons";
import { Card, CardContent } from "../ui/card";

const FarmInformation: React.FC = () => {
  return (
    <Card>
      <CardContent className="p-5 2xl:p-6">
        <div className="flex justify-between items-center mb-4">
          <h6 className="font-bold text-xl text-[#000000]">Farm Information</h6>
          <WeatherIcon />
        </div>
        <div className="flex justify-end mb-7">
          <div className="text-[#01190F]">
            <h4 className="font-bold text-[1.75rem] mb-3">28°</h4>
            <p className="font-medium text-[9px]">Rainy storm cloud</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[#01190F]">
            <p className="font-medium text-[1rem] mb-1 flex items-center gap-2">
              Total Land Area <CautionIcon />
            </p>
            <p className="font-bold text-[1rem]">Rainy storm cloud</p>
          </div>
          <div>
            <div className="flex justify-end">
              <LocationIcon />
            </div>
            <p className="text-xs text-[#00B929] mt-1">
              23 Ayomide street, Iseyin, Oyo
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FarmInformation;
