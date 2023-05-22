import Image from "next/image";

import ballIcon from "../app/icon.svg";

export function LoadingSpin() {
  return (
    <div className="mt-40 flex w-full flex-col items-center justify-center gap-1 font-bold">
      <Image
        src={ballIcon}
        alt=""
        className="h-16 w-16 animate-spin-slow duration-75"
      />
      <span className="text-base text-emerald-500">Carregando</span>
    </div>
  );
}
