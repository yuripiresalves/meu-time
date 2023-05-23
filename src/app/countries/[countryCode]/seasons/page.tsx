import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

import { api } from "@/lib/api";
import { SeasonOption } from "@/components/SeasonOption";

export default async function Seasons() {
  const token = getCookie("@meu-time:token-1.0.0");

  if (!token) {
    redirect("/");
  }

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
    <div className="space-y-5 bg-neutral-900">
      <h1 className="font-sans text-2xl font-bold">Escolha a temporada:</h1>
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
        {seasons.map((season) => (
          <SeasonOption key={season} year={season} />
        ))}
      </div>
    </div>
  );
}
