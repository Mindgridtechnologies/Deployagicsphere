import { CautionIcon, ProgressIcon } from "@/public/icons";

interface iProps {
  title: string;
  details: string;
  percent: number;
}

const StatDetails: React.FC<iProps> = ({ title, details, percent }) => {
  return (
    <div className="border border-[#DBE3EB] rounded-lg p-3 w-full">
      <div className="text-[#01190F]">
        <p className="font-medium text-sm mb-2 flex items-center gap-3">
          {title} <CautionIcon />
        </p>
        <div className="flex gap-1 items-center">
          <h3 className="font-bold mb-1 text-base">{details}</h3>
        </div>

        <div className="flex items-center gap-[2px]">
          <ProgressIcon />
          <p className="text-sm text-[#00B929]">{percent}%</p>
          <p className="text-xs">From last month</p>
        </div>
      </div>
    </div>
  );
};

export default StatDetails;
