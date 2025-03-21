import { Card, CardContent } from "@/components/ui/card";
import StatDetails from "@/components/widgets/stat-details";

const WeatherFarmDetails: React.FC = () => {
  const statList = [
    {
      title: "Total Land Area",
      details: "4.56 arces",
      percent: 10,
    },
    {
      title: "Total Crops",
      details: "12 Types",
      percent: 10,
    },
    {
      title: "Total Current Yield",
      details: "10 Tons",
      percent: 10,
    },
    {
      title: "Total Production",
      details: "20 Tons",
      percent: 10,
    },
  ];

  return (
    <Card className="mb-4">
      <CardContent className="p-3 xl:p-5">
        <div className="flex gap-3">
          {statList.map((stat, index: number) => (
            <StatDetails
              title={stat.title}
              details={stat.details}
              percent={stat.percent}
              key={index}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherFarmDetails;
