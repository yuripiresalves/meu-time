import { LeagueOption } from "@/components/LeagueOption";
import { api } from "@/lib/api";
import { cookies } from "next/headers";

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
  params: { countryCode: string };
}) {
  const token = cookies().get("@meu-time:token-1.0.0")?.value;

  const response = await api.get(`/leagues?code=${params.countryCode}`, {
    headers: {
      "x-rapidapi-key": token,
    },
  });

  const leagues: LeaguesResponse[] = response.data.response;

  return (
    <div className="space-y-5 pb-16">
      <h2 className="text-2xl font-bold">Escolha a liga:</h2>
      <div className="flex flex-wrap justify-start gap-4">
        {leagues.map((league) => (
          <LeagueOption
            key={league.league.id}
            name={league.league.name}
            id={league.league.id}
            logo={league.league.logo}
            countryCode={params.countryCode}
          />
        ))}
      </div>
    </div>
  );
}
