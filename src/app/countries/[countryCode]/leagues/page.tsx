import { LeagueOption } from "@/components/LeagueOption";
import { api } from "@/lib/api";
import { getCookie } from "cookies-next";
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
  params: { countryCode: string };
}) {
  // const isAuthenticated = getCookie("@meu-time:token-1.0.0");

  // if (!isAuthenticated) {
  //   redirect("/");
  // }

  const token = getCookie("@meu-time:token-1.0.0");

  const response = await api.get(`/leagues?code=${params.countryCode}`, {
    headers: {
      "x-rapidapi-key": token,
    },
  });

  const leaguesResponse: LeaguesResponse[] = response.data.response;

  return (
    <div className="space-y-5 pb-16">
      <h2 className="text-2xl font-bold">Escolha a liga:</h2>
      <div className="flex flex-wrap justify-start gap-4">
        {leaguesResponse.map((leagueResponse) => (
          <LeagueOption
            key={leagueResponse.league.id}
            name={leagueResponse.league.name}
            id={leagueResponse.league.id}
            logo={leagueResponse.league.logo}
            countryCode={params.countryCode}
          />
        ))}
      </div>
    </div>
  );
}
