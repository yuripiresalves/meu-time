import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="mx-auto mt-24 w-full max-w-7xl flex-1 px-5 pt-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}
