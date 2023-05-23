import { LeagueOption } from "@/components/LeagueOption";
import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface League {
  name: string;
  id: string;
  logo: string;
}

interface LeaguesResponse {
  league: League;
}

export default async function Leagues({
  params,
}: {
  params: { countryName: string; seasonYear: string };
}) {
  const isAuthenticated = cookies().has("@meu-time:token-1.0.0");
  const token = cookies().get("@meu-time:token-1.0.0")?.value;

  if (!isAuthenticated) {
    redirect("/");
  }

  const response = await api.get(
    `/leagues?country=${params.countryName}&season=${params.seasonYear}`,
    {
      headers: {
        "x-rapidapi-key": token,
      },
    }
  );

  console.log(response.data);

  const leaguesResponse: LeaguesResponse[] = response.data.response;

  return (
    <div className="space-y-5 pb-16">
      <h2 className="text-2xl font-bold">Escolha a liga:</h2>
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
        {leaguesResponse.map((leagueResponse) => (
          <LeagueOption
            key={leagueResponse.league.id}
            name={leagueResponse.league.name}
            id={leagueResponse.league.id}
            logo={leagueResponse.league.logo}
            countryName={params.countryName}
            seasonYear={params.seasonYear}
          />
        ))}
      </div>
    </div>
  );
}
