import Link from "next/link";

interface SeasonOptionProps {
  year: string;
}

export function SeasonOption(
  { year }: SeasonOptionProps,
  {
    params,
  }: {
    params: { countryCode: string };
  }
) {
  return (
    <Link
      href={`/countries/${params.countryCode}/seasons/${year}/leagues`}
      className="inline-block w-[108px] cursor-pointer rounded-lg border border-neutral-700 bg-neutral-800 py-3 text-center font-bold transition-colors hover:border-emerald-500"
    >
      {year}
    </Link>
  );
}
