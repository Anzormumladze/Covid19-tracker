import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyDate } from "../../api";

import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyDate();
      setDailyData(initialDailyData);
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ data }) => data),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            border: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "infected",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return <div className="container">{lineChart}</div>;
};

export default Chart;
