import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Golf", "Passat", "Polo", "Up!", "T-Roc", "Tiguan"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(3, 4, 94)",
        "rgba(0, 119, 182)",
        "rgba(0, 180, 216)",
        "rgba(144, 224, 239)",
        "rgba(144, 224, 239)",
        "rgba(202, 240, 248, 0.5)",
      ],
      borderColor: [
        "rgba(3, 4, 94)",
        "rgba(0, 119, 182)",
        "rgba(0, 180, 216)",
        "rgba(144, 224, 239)",
        "rgba(144, 224, 239)",
        "rgba(202, 240, 248, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const Chart = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: 900,
      }}
    >
      <Pie data={data} />
    </div>
  );
};

export default Chart;
