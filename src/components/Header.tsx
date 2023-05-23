import Image from "next/image";
import { SignOut } from "./SignOut";

import meuTimeLogoHorizontal from "../assets/logo-horizontal.svg";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-neutral-800 bg-neutral-900/80 py-5 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5">
        <Link href="/">
          <Image src={meuTimeLogoHorizontal} alt="Meu time" />
        </Link>
        <SignOut />
      </div>
    </header>
  );
}
