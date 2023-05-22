import { LeagueOption } from "@/components/LeagueOption";
import { TeamOption } from "@/components/TeamOption";
import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface Team {
  name: string;
  id: string;
  logo: string;
}

interface TeamsResponse {
  team: Team;
}

export default async function Teams({
  params,
}: {
  params: { countryCode: string; leagueId: string };
}) {
  // const isAuthenticated = cookies().has("@meu-time:token-1.0.0");

  // if (!isAuthenticated) {
  //   redirect("/");
  // }

  const token = cookies().get("@meu-time:token-1.0.0")?.value;

  const response = await api.get(
    `/teams?code=${params.countryCode}&league=${params.leagueId}`,
    {
      headers: {
        "x-rapidapi-key": token,
      },
    }
  );

  const teamsResponse: TeamsResponse[] = response.data.response;

  return (
    <div className="space-y-5 pb-16">
      <h2 className="text-2xl font-bold">Escolha o time:</h2>
      <div className="flex flex-wrap justify-start gap-4">
        {teamsResponse.map((teamResponse) => (
          <TeamOption
            key={teamResponse.team.id}
            name={teamResponse.team.name}
            id={teamResponse.team.id}
            logo={teamResponse.team.logo}
            countryCode={params.countryCode}
            leagueId={params.leagueId}
          />
        ))}
      </div>
    </div>
  );
}
