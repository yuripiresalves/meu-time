import { CountriesSection } from "@/components/CountriesSection";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Countries() {
  const isAuthenticated = cookies().has("@meu-time:token-1.0.0");

  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <CountriesSection />
    </>
  );
}
