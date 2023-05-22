import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seasons } from "@/components/Seasons";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-5">
        {/* @ts-expect-error Async Server Component */}
        <Seasons />
        {children}
      </main>

      <Footer />
    </div>
  );
}
