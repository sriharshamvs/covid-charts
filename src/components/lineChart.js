import React from "react";
import { Line } from "react-chartjs-2";

function mapData(csv_data) {
  const values = csv_data.data["India"]["data"];
  const data = {
    labels: csv_data.header,
    datasets: [
      {
        label: "COVID-19 Dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: values,
      },
    ],
  };
  return data;
}

export default function LineChart(props) {
  const data = mapData(props.csv_data);
  return (
    <div>
      <h2>COVID-19 Charts</h2>
      <Line data={data} width={800} height={200} />
    </div>
  );
}
