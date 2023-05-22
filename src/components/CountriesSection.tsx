import { cookies } from "next/headers";
import { CountryOption } from "./CountryOption";
import { api } from "@/lib/api";

interface Country {
  name: string;
  code: string;
  flag: string;
}

export async function CountriesSection() {
  const token = cookies().get("@meu-time:token-1.0.0")?.value;

  const response = await api.get("/countries", {
    headers: {
      "x-rapidapi-key": token,
    },
  });

  const countries: Country[] = response.data.response;

  return (
    <div className="space-y-5 pb-16">
      <h2 className="text-2xl font-bold">Escolha o país:</h2>
      <div className="flex flex-wrap justify-start gap-4">
        {countries.map((country) => (
          <CountryOption
            key={country.code}
            name={country.name}
            code={country.code}
            flag={country.flag}
          />
        ))}
      </div>
    </div>
  );
}
