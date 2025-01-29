import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { PiSealPercentLight } from "react-icons/pi";
import { RadialBar, RadialBarChart } from "recharts";

export type CardRentabiliteProps = {
  label: string;
  pourcentage: string;
};

export const CardRentabilite = (props: CardRentabiliteProps) => {
  const data = [
    {
      name: "18-24",
      uv: 31.47,
      pv: 2400,
      fill: "#8884d8",
    },
    {
      name: "unknown",
      uv: 6.67,
      pv: 4800,
      fill: "#ffc658",
    },
  ];

  return (
    <Card className="rounded-3xl my-6 mx-10">
      <CardContent className="py-2 px-4">
        <div className="p-4 flex flex-raw space-x-4">
          <div className="flex items-center">
            <PiSealPercentLight size={50} />
          </div>
          <div className="space-y-3">
            <h1 className="text-lg">{props.label}</h1>
            <div className="text-3xl font-medium">{props.pourcentage} %</div>
          </div>
          <div>
            <RadialBarChart
              width={150}
              height={70}
              cx={80}
              cy={70}
              innerRadius={40}
              outerRadius={80}
              barSize={30}
              data={data}
              endAngle={180}
            >
              <RadialBar
                label={{ position: "insideStart", fill: "#fff" }}
                background
                dataKey="uv"
              />
            </RadialBarChart>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export class Rentabilites extends React.Component {
  render() {
    return (
      <Card className="rounded-3xl w-full border-2 grid grid-cols-2">
        <CardRentabilite label="Rentabilité brute" pourcentage="6,58" />
        <CardRentabilite label="Rentabilité nette" pourcentage="6,49" />
      </Card>
    );
  }
}
