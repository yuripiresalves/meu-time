"use client";

import { api } from "@/lib/api";
import { getCookie } from "cookies-next";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface GoalsChartProps {
  seasonsYear: string;
  teamId: string;
  leagueId: string;
}

export async function GoalsChart({
  seasonsYear,
  leagueId,
  teamId,
}: GoalsChartProps) {
  const token = getCookie("@meu-time:token-1.0.0");

  interface Minute {
    "0-15": {
      total: number | null;
      percentage: string | null;
    };
    "16-30": {
      total: number | null;
      percentage: string | null;
    };
    "31-45": {
      total: number | null;
      percentage: string | null;
    };
    "46-60": {
      total: number | null;
      percentage: string | null;
    };
    "61-75": {
      total: number | null;
      percentage: string | null;
    };
    "76-90": {
      total: number | null;
      percentage: string | null;
    };
    "91-105": {
      total: number | null;
      percentage: string | null;
    };
    "106-120": {
      total: number | null;
      percentage: string | null;
    };
  }

  let minute = {} as Minute;

  try {
    const goalsResponse = await api.get(
      `/teams/statistics?team=${teamId}&league=${leagueId}&season=${seasonsYear}`,
      {
        headers: {
          "x-rapidapi-key": token,
        },
      }
    );

    minute = goalsResponse.data.response.goals.for.minute;
  } catch (error) {
    console.log(error);
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Quantidade de gols marcados por tempo de jogo",
        color: "#f5f5f5",
      },
      label: {
        color: "#f5f5f5",
      },
    },
  };

  // const minute = {
  //   "0-15": {
  //     total: 4,
  //     percentage: "6.06%",
  //   },
  //   "16-30": {
  //     total: 17,
  //     percentage: "25.76%",
  //   },
  //   "31-45": {
  //     total: 11,
  //     percentage: "16.67%",
  //   },
  //   "46-60": {
  //     total: 13,
  //     percentage: "19.70%",
  //   },
  //   "61-75": {
  //     total: 10,
  //     percentage: "15.15%",
  //   },
  //   "76-90": {
  //     total: 8,
  //     percentage: "12.12%",
  //   },
  //   "91-105": {
  //     total: 3,
  //     percentage: "4.55%",
  //   },
  //   "106-120": {
  //     total: null,
  //     percentage: null,
  //   },
  // };

  const labels = Object.keys(minute);

  const data = {
    labels,
    datasets: [
      {
        label: "Quantidade de gols",
        data: labels.map((label) => minute[label as keyof typeof minute].total),
        backgroundColor: "#10b981",
        color: "#f5f5f5",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
