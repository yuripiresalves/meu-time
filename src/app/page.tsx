import Image from "next/image";
import { redirect } from "next/navigation";

import meuTimeLogo from "../assets/logo.svg";
import { SignInForm } from "@/components/SignInForm";
import { cookies } from "next/headers";

export default function SignIn() {
  const isAuthenticated = cookies().has("@meu-time:token-1.0.0");

  if (isAuthenticated) {
    redirect("/countries");
  }

  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-blur bg-cover">
      <Image src={meuTimeLogo} alt="Meu time" className="w-64" />
      <SignInForm />
    </div>
  );
}
