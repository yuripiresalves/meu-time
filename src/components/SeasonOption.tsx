import Link from "next/link";

interface SeasonOptionProps {
  year: string;
  countryName: string;
}

export function SeasonOption({ year, countryName }: SeasonOptionProps) {
  return (
    <Link
      href={`/countries/${countryName}/seasons/${year}/leagues`}
      className="inline-block w-[108px] cursor-pointer rounded-lg border border-neutral-700 bg-neutral-800 py-3 text-center font-bold transition-colors hover:border-emerald-500"
    >
      {year}
    </Link>
  );
}
