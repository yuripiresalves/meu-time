import Image from "next/image";
import Link from "next/link";

interface TeamOptionProps {
  name: string;
  id: string;
  logo: string;
  countryName: string;
  seasonYear: string;
  leagueId: string;
}

export function TeamOption({
  name,
  id,
  logo,
  countryName,
  seasonYear,
  leagueId,
}: TeamOptionProps) {
  const newName = name.substring(0, 10).concat("...");

  return (
    <div>
      <Link
        href={`/countries/${countryName}/seasons/${seasonYear}/leagues/${leagueId}/teams/${id}`}
        title={name}
        className="flex w-40 flex-col items-center justify-center gap-4 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-5 text-center font-bold transition-colors hover:border-emerald-500"
      >
        <Image
          src={logo || ""}
          alt=""
          width={64}
          height={64}
          className="h-16 w-auto"
        />
        <span>{name.length > 10 ? newName : name}</span>
      </Link>
    </div>
  );
}
