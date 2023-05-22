import { cookies } from "next/headers";
import { SeasonOption } from "./SeasonOption";
import { api } from "@/lib/api";

export async function Seasons() {
  const token = cookies().get("@meu-time:token-1.0.0")?.value;

  const response = await api.get("/leagues/seasons", {
    headers: {
      "x-rapidapi-key": token,
    },
  });

  const actualYear = new Date().getFullYear();

  const seasonsResponse: [] = response.data.response;
  const seasonsResponseReverse = seasonsResponse.reverse();

  const seasons = seasonsResponseReverse.filter((season) => {
    return season <= actualYear;
  });

  return (
    <div className="mt-24 space-y-5 bg-neutral-900 py-10">
      <h1 className="font-sans text-2xl font-bold">Escolha a temporada:</h1>
      <div className="flex flex-wrap justify-start gap-4">
        {seasons.map((season) => (
          <SeasonOption key={season} year={season} />
        ))}
      </div>
    </div>
  );
}
