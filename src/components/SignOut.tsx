import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <a
      href="/api/auth/signout"
      className="flex items-center gap-2 text-sm text-red-500 transition-colors hover:text-red-400"
    >
      <LogOut size={18} />
      Sair
    </a>
  );
}
