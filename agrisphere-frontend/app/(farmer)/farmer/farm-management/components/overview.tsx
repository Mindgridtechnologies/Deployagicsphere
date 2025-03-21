import AddButton from "@/components/add-button";
import WeatherFarmDetails from "./detailed-farm";
import OngoingActivities from "./ongoing-activities";
import { DistributionChart } from "@/app/shared/distribution-chart";
import InventoryDetails from "@/app/shared/inventory";

const Overview: React.FC = () => {
  return (
    <>
      <div className="flex justify-end gap-4 mb-5">
        <AddButton filled={false} btnText="Request Logistics" />
        <AddButton btnText="Create New Farm" />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <WeatherFarmDetails />
          <div className="flex gap-4">
            <OngoingActivities />
            <DistributionChart />
          </div>
        </div>
        <InventoryDetails />
      </div>
    </>
  );
};
export default Overview;
