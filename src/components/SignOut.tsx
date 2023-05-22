"use client";

import { LogOut } from "lucide-react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export function SignOut() {
  const router = useRouter();

  function signOut() {
    deleteCookie("@meu-time:token-1.0.0");
    router.push("/");
  }

  return (
    <button
      onClick={signOut}
      className="flex items-center gap-2 text-sm text-red-500 transition-colors hover:text-red-400"
    >
      <LogOut size={18} />
      Sair
    </button>
  );
}
