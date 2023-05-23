import Image from "next/image";
import Link from "next/link";

interface CountryOptionProps {
  name: string;
  code: string;
  flag: string;
}

export function CountryOption({ name, code, flag }: CountryOptionProps) {
  const newName = name.substring(0, 10).concat("...");

  return (
    <div>
      <Link
        href={`/countries/${name}/seasons/`}
        title={name}
        className="flex w-40 flex-col items-center justify-center gap-4 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-5 text-center font-bold transition-colors hover:border-emerald-500"
      >
        <Image src={flag || ""} alt="" width={64} height={64} />
        <span>{name.length > 10 ? newName : name}</span>
      </Link>
    </div>
  );
}
