"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const OngoingActivities: React.FC = () => {
  const activitiesData = [
    {
      id: "1",
      title: "🪴 Planting Season Starting in 30day",
      date: "Tuesday, 30 June 2024",
      status: "Completed",
    },
    {
      id: "2",
      title: "🪴 Planting Season Starting in 30day",
      date: "Tuesday, 30 June 2024",
      status: "Pending",
    },
    {
      id: "3",
      title: "🪴 Planting Season Starting in 30day",
      date: "Tuesday, 30 June 2024",
      status: "COmpleted",
    },
  ];

  return (
    <Card className="flex-1">
      <CardContent className="xl:p-5 p-3">
        <h6 className="font-bold text-xl text-[#000000] mb-3">
          Ongoing Activities
        </h6>
        {/* <Link
            href="#"
            className="etxt-xs font-medium text-[#0A8D56] underline"
          >
            view all
          </Link> */}
        <div className="mb-8"></div>
        {activitiesData?.map((activity, index: number) => (
          <div
            className={`flex justify-between items-center py-5 ${
              activitiesData.length - 1 !== index ? "border-b" : ""
            } border-[#ECECEC]`}
            key={index}
          >
            <div>
              <h6 className="font-semiboold text-sm text-[#01190F] mb-2">
                {activity.title}
              </h6>
              <p className="text-[#636A73] text-xs">{activity.date}</p>
            </div>
            <Badge
              variant={
                activity.status.toLowerCase() === "urgent"
                  ? "warning"
                  : activity.status.toLowerCase() === "pending"
                  ? "pending"
                  : activity.status.toLowerCase() === "completed"
                  ? "success"
                  : "warning"
              }
              className="py-1 px-5 font-bold text-[0.625rem] rounded-[24px]"
            >
              {activity.status.toUpperCase()}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default OngoingActivities;
