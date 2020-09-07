// import { processData } from "../../lib/process";
import React from "react";
import { Line } from "react-chartjs-2";

function mapData(csv_data) {
  // console.log(csv_data);
  const values = JSON.parse(csv_data.jsonData);
  console.log(values);
  const data = {
    labels: csv_data.header,
    datasets: [
      {
        label: "COVID-19 Dataset",
        fill: false,
        lineTension: 0.1,
        borderDash: [],
        borderDashOffset: 0.0,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        data: values.India,
      },
    ],
  };
  return data;
}

export default function LineChart(props) {
  // console.log(props);
  const data = mapData(props.csv_data);
  return (
    <div>
      <h2>Line Example</h2>
      <Line data={data} width={800} height={200} />
    </div>
  );
}

// export async function getStaticProps() {
//   const csv_data = await processData();
//   console.log(csv_data.data);
//   console.log(csv_data.keys_data);
//   console.log(csv_data.header);
//   return {
//     props: {
//       csv_data,
//     },
//   };
// }
