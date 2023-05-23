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
  params: {
    countryCode: string;
    seasonYear: string;
    leagueId: string;
    teamId: string;
  };
}) {
  const token = getCookie("@meu-time:token-1.0.0");

  if (!token) {
    redirect("/");
  }

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
      <div className="flex flex-wrap justify-center gap-10 pt-8 lg:justify-start">
        {/* @ts-expect-error Async Server Component */}
        <PlayersList seasonYear={params.seasonYear} teamId={params.teamId} />

        <div className="flex w-[350px] flex-col gap-10">
          {/* @ts-expect-error Async Server Component */}
          <ResultsTable />
          {/* @ts-expect-error Async Server Component */}
          <MostUsedFormation
            leagueId={params.leagueId}
            seasonYear={params.seasonYear}
            teamId={params.teamId}
          />
        </div>

        <div className="flex w-full max-w-[472px] items-center justify-center rounded-lg bg-neutral-800 p-4">
          {/* @ts-expect-error Async Server Component */}
          <GoalsChart leagueId={params.leagueId} teamId={params.teamId} />
        </div>
      </div>
    </div>
  );
}
