import { api } from "@/lib/api";
import { cookies } from "next/headers";

interface MostUsedFormationProps {
  seasonYear: string;
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
  seasonYear,
}: MostUsedFormationProps) {
  const token = cookies().get("@meu-time:token-1.0.0")?.value;
  let mostPlayedFormation = "";

  try {
    const lineupsResponse = await api.get(
      `/teams/statistics?team=${teamId}&league=${leagueId}&season=${seasonYear}}`,
      {
        headers: {
          "x-rapidapi-key": token,
        },
      }
    );

    const lineups: Lineups[] = lineupsResponse.data.response.lineups;
    // const lineups = [
    //   {
    //     formation: "4-2-3-1",
    //     played: 32,
    //   },
    //   {
    //     formation: "3-4-1-2",
    //     played: 40,
    //   },
    //   {
    //     formation: "3-4-2-1",
    //     played: 1,
    //   },
    //   {
    //     formation: "4-3-1-2",
    //     played: 1,
    //   },
    // ];
    let mostPlayed = 0;

    for (const lineup of lineups) {
      if (lineup.played > mostPlayed) {
        mostPlayed = lineup.played;
        mostPlayedFormation = lineup.formation;
      }
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <p>
      Formação mais utilizada:{" "}
      <span className="text-lg font-bold">{mostPlayedFormation}</span>
    </p>
  );
}
