import BalanceInformation from "@/components/widgets/balance-info";
import FarmInformation from "@/components/widgets/farm-info";
import InsuranceInformation from "@/components/widgets/insurance-info";
import OrderDataTable from "./components/order-table";
import SalesInformation from "@/components/widgets/sales-info";
import LogisticDataTable from "./components/logistic-table";
import MarketPriceTable from "./components/market-price-table";
import { DistributionChart } from "../../shared/distribution-chart";
import CooperativeDataTable from "./components/cooperative-table";
import InventoryDetails from "../../shared/inventory";
import ProgressLogDataTable from "./components/progress-log-table";

export default function FarmerDashboardPage() {
  return (
    <section className="p-6">
      <div className="flex gap-4 mb-4">
        <FarmInformation />
        <BalanceInformation />
        <InsuranceInformation />
      </div>
      <div className="flex xl:gap-4 gap-2 mb-4">
        <OrderDataTable />
        <div className="flex flex-col gap-4 flex-1">
          <SalesInformation />
          <LogisticDataTable />
        </div>
        <MarketPriceTable />
      </div>
      <div className="flex gap-2 xl:gap-4">
        <div className="flex-1">
          <div className="flex gap-2 mb-4">
            <DistributionChart />
            <CooperativeDataTable />
          </div>
          <ProgressLogDataTable />
        </div>
        <InventoryDetails />
      </div>
    </section>
  );
}
