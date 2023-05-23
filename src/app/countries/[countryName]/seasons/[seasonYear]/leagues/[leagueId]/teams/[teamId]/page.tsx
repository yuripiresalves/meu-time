import { api } from "@/lib/api";
import { cookies } from "next/headers";
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
    countryName: string;
    seasonYear: string;
    leagueId: string;
    teamId: string;
  };
}) {
  const isAuthenticated = cookies().has("@meu-time:token-1.0.0");
  const token = cookies().get("@meu-time:token-1.0.0")?.value;

  if (!isAuthenticated) {
    redirect("/");
  }

  const teamResponse = await api.get(`/teams?id=${params.teamId}`, {
    headers: {
      "x-rapidapi-key": token,
    },
  });

  const team: Team = teamResponse.data.response[0].team;

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
      <div className="flex flex-wrap justify-center gap-10 pt-8 md:justify-between lg:gap-0">
        {/* @ts-expect-error Async Server Component */}
        <PlayersList seasonYear={params.seasonYear} teamId={params.teamId} />

        <div className="flex w-[300px] flex-col gap-10">
          {/* @ts-expect-error Async Server Component */}
          <ResultsTable
            leagueId={params.leagueId}
            seasonsYear={params.seasonYear}
            teamId={params.teamId}
          />
          {/* @ts-expect-error Async Server Component */}
          <MostUsedFormation
            leagueId={params.leagueId}
            seasonYear={params.seasonYear}
            teamId={params.teamId}
          />
        </div>

        <div className="flex w-full max-w-[500px] items-center justify-center rounded-lg bg-neutral-800 p-4">
          {/* @ts-expect-error Async Server Component */}
          <GoalsChart
            leagueId={params.leagueId}
            teamId={params.teamId}
            seasonsYear={params.seasonYear}
          />
        </div>
      </div>
    </div>
  );
}
