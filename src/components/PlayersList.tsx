import { api } from "@/lib/api";
import { getCookie } from "cookies-next";

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
}

export async function PlayersList({ teamId }: PlayersListProps) {
  const token = getCookie("@meu-time:token-1.0.0");

  const playersResponse = await api.get(`/players?team=${teamId}&season=XXX`, {
    headers: {
      "x-rapidapi-key": token,
    },
  });

  const players: PlayerResponse[] = playersResponse.data.response;

  return (
    <div className="relative h-96 max-w-[340px] overflow-scroll">
      <table className="w-full border-collapse">
        <thead className="text-left">
          <th className="sticky top-0 rounded-tl-lg bg-indigo-800 p-4">Nome</th>
          <th className="sticky top-0 bg-indigo-800 p-4">Idade</th>
          <th className="sticky top-0 rounded-tr-lg bg-indigo-800 p-4">
            Nacionalidade
          </th>
        </thead>
        <tbody>
          <tr>
            <td className="border-t-2 border-t-neutral-700 bg-neutral-800 p-4">
              Yuri Pires Alves
            </td>
            <td className="border-t-2 border-t-neutral-700 bg-neutral-800 p-4">
              21
            </td>
            <td className="border-t-2 border-t-neutral-700 bg-neutral-800 p-4">
              Brazilian
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
