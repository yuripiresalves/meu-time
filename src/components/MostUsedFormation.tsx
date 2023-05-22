import { api } from "@/lib/api";
import { getCookie } from "cookies-next";

interface MostUsedFormationProps {
  teamId: string;
  leagueId: string;
}

interface Lineups {
  formation: string;
  played: number;
}

export async function MostUsedFormation({
  teamId,
  leagueId,
}: MostUsedFormationProps) {
  const token = getCookie("@meu-time:token-1.0.0");

  const lineupsResponse = await api.get(
    `/teams/statistics?team=${teamId}&league=${leagueId}&season=XXX`,
    {
      headers: {
        "x-rapidapi-key": token,
      },
    }
  );

  // const lineups: Lineups[] = lineupsResponse.data.response.lineups
  const lineups = [
    {
      formation: "4-2-3-1",
      played: 32,
    },
    {
      formation: "3-4-1-2",
      played: 40,
    },
    {
      formation: "3-4-2-1",
      played: 1,
    },
    {
      formation: "4-3-1-2",
      played: 1,
    },
  ];
  let mostPlayed = 0;
  let mostPlayedFormation = "";

  for (const lineup of lineups) {
    if (lineup.played > mostPlayed) {
      mostPlayed = lineup.played;
      mostPlayedFormation = lineup.formation;
    }
  }

  return (
    <p className="text-lg">
      Formação mais utilizada:{" "}
      <span className="font-bold">{mostPlayedFormation}</span>
    </p>
  );
}
