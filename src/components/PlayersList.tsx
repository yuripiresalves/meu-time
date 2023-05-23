import { api } from "@/lib/api";
import { cookies } from "next/headers";

interface Player {
  id: string;
  name: string;
  age: number;
  nationality: string;
}

interface PlayerResponse {
  player: Player;
}

interface PlayersListProps {
  teamId: string;
  seasonYear: string;
}

export async function PlayersList({ teamId, seasonYear }: PlayersListProps) {
  const token = cookies().get("@meu-time:token-1.0.0")?.value;

  let players: PlayerResponse[] = [];

  try {
    const playersResponse = await api.get(
      `/players?team=${teamId}&season=${seasonYear}`,
      {
        headers: {
          "x-rapidapi-key": token,
        },
      }
    );
    console.log(playersResponse.data);
    players = playersResponse.data.response;
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="relative -z-10 h-96 max-w-[340px] overflow-y-scroll">
      <table className="w-full border-collapse">
        <thead className="text-left">
          <th className="sticky top-0 rounded-tl-lg bg-indigo-800 p-4">Nome</th>
          <th className="sticky top-0 bg-indigo-800 p-4">Idade</th>
          <th className="sticky top-0 rounded-tr-lg bg-indigo-800 p-4">
            Nacionalidade
          </th>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.player.id}>
              <td className="border-t-2 border-t-neutral-700 bg-neutral-800 p-4">
                {player.player.name}
              </td>
              <td className="border-t-2 border-t-neutral-700 bg-neutral-800 p-4">
                {player.player.age}
              </td>
              <td className="border-t-2 border-t-neutral-700 bg-neutral-800 p-4">
                {player.player.nationality}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
