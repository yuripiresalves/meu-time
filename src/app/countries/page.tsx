import { getCookie } from "cookies-next";

import { redirect } from "next/navigation";

import { api } from "@/lib/api";
import { CountryOption } from "../../components/CountryOption";

interface Country {
  name: string;
  code: string;
  flag: string;
}

export default async function Countries() {
  const token = getCookie("@meu-time:token-1.0.0");

  if (!token) {
    redirect("/");
  }

  const response = await api.get("/countries", {
    headers: {
      "x-rapidapi-key": token,
    },
  });

  const countries: Country[] = response.data.response;

  return (
    <div className="space-y-5 pb-16">
      <h2 className="text-2xl font-bold">Escolha o país:</h2>
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
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
