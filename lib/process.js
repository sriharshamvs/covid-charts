import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "data");

export function processData() {
  const fullPath = path.join(dataDirectory, "covid_data.csv");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const csv_data = fileContents.split("\n");
  const header = csv_data[0].split(",").slice(4);
  const table = csv_data.slice(1);
  const keys_data = [];
  const values_data = [];
  const data = {};

  table.forEach((row) => {
    const columns = row.split(",");
    keys_data.push(columns[1]);
    values_data.push(columns.slice(4).map(Number));
  });

  for (let i = 0; i < values_data.length; i++) {
    const obj = {};
    obj["data"] = values_data[i];
    const key = String(keys_data[i]);
    data[key] = obj;
  }
  const jsonData = JSON.stringify(data);

  return {
    header,
    keys_data,
    data,
    jsonData,
  };
}
