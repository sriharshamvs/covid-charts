import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import { processData } from "../../lib/process";
import LineChart from "../components/lineChart";

export default function Home({ csv_data }) {
  // console.log(csv_data);
  return (
    <div>
      Hello World!
      <LineChart csv_data={csv_data} />
    </div>
  );
}

export async function getStaticProps() {
  const csv_data = await processData();
  // console.log(csv_data.data);
  // console.log(csv_data.keys_data);
  // console.log(csv_data.header);
  return {
    props: {
      csv_data,
    },
  };
}
