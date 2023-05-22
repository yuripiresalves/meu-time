import { api } from "@/lib/api";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { redirect } from "next/navigation";

import { PlayersList } from "@/components/PlayersList";
import { ResultsTable } from "@/components/ResultsTable";
import { MostUsedFormation } from "@/components/MostUsedFormation";
import { GoalsChart } from "@/components/GoalsChart";

interface Team {
  name: string;
  id: string;
  logo: string;
}

export default async function Team({
  params,
}: {
  params: { countryCode: string; leagueId: string; teamId: string };
}) {
  // const isAuthenticated = getCookie("@meu-time:token-1.0.0");

  // if (!isAuthenticated) {
  //   redirect("/");
  // }

  const token = getCookie("@meu-time:token-1.0.0");

  const teamResponse = await api.get(`/teams?id=${params.teamId}`, {
    headers: {
      "x-rapidapi-key": token,
    },
  });

  const team: Team = teamResponse.data.response.team;

  return (
    <div className="space-y-5 pb-16">
      <div className="flex items-center gap-4">
        <Image
          src={
            team?.logo || "https://media-3.api-sports.io/football/teams/131.png"
          }
          width={64}
          height={64}
          alt=""
        />
        <h2 className="text-2xl font-bold">{team?.name || "Corinthians"}</h2>
      </div>
      <div className="flex flex-wrap justify-start gap-10">
        {/* @ts-expect-error Async Server Component */}
        <PlayersList />

        <div className="flex w-[350px] flex-col gap-10">
          <ResultsTable />
          {/* @ts-expect-error Async Server Component */}
          <MostUsedFormation />
        </div>

        <div className="flex-1 rounded-lg bg-neutral-800">
          <GoalsChart />
        </div>
      </div>
    </div>
  );
}
