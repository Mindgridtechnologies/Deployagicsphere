"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SelectFilter } from "@/components/filters/select-filter";
const chartData = [
  { browser: "corn", visitors: 275, fill: "#3A0CA3", percent: "25.42" },
  { browser: "wheat", visitors: 200, fill: "#B5179E", percent: "18.50" },
  { browser: "cassava", visitors: 287, fill: "#FFC300", percent: "26.53" },
  { browser: "okro", visitors: 173, fill: "#F72585", percent: "16.03" },
];

const chartConfig = {
  visitors: {
    label: "Acres",
  },
  corn: {
    label: "Corn",
    color: "#3A0CA3",
  },
  wheat: {
    label: "Wheat",
    color: "#B5179E",
  },
  cassava: {
    label: "Cassava",
    color: "#FFC300",
  },
  okro: {
    label: "Okro",
    color: "#F72585",
  },
} satisfies ChartConfig;

export function DistributionChart() {
  const list = [
    {
      text: "Admin",
      value: "admin",
    },
    {
      text: "Super Admin",
      value: "super-admin",
    },
  ];

  const [filter, setFilter] = React.useState<string>("");
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="p-7 flex-1 gap-0">
      <CardDescription className="flex gap-4 justify-between items-center">
        <h6 className="font-bold text-xl">Crop Distribution</h6>
        <SelectFilter setFilter={setFilter} list={list} />
      </CardDescription>
      <CardContent className="p-0 gap-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[229px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Acres
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <div>
        {chartData.map((chart, index: number) => (
          <div
            key={index}
            className="flex justify-between items-center text-start pb-1 border-b border-[#C6D0DB]"
          >
            <div className="flex gap-1 items-center">
              <div
                className={`w-[11px] h-[11px]`}
                style={{ backgroundColor: chart.fill }}
              ></div>
              <p className="font-medium text-sm">{chart.browser}</p>
            </div>
            <p className="font-medium text-sm">{chart.percent} %</p>
            <p className="font-medium text-sm">{chart.visitors} Acres</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
