"use client";

import { FormEvent, useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { Spin } from "./Spin";
import { api } from "@/lib/api";

export function SignInForm() {
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState({} as { type: string | null });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function SignIn(event: FormEvent) {
    setLoading(true);
    event.preventDefault();

    try {
      const response = await api.get("/timezone", {
        headers: {
          "x-rapidapi-key": apiKey,
        },
      });

      if (response.data.errors.token) {
        setError({
          type: "token",
        });
        setLoading(false);

        return;
      }

      if (response.data.errors.requests) {
        setError({
          type: "requests",
        });
        setLoading(false);

        return;
      }

      setCookie("@meu-time:token-1.0.0", apiKey, {
        maxAge: 60 * 60 * 24 * 30, //30 days
      });

      setLoading(false);
      router.push("/countries");
    } catch (error) {
      console.error(error);
      setError({ type: "unexpected" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={SignIn}
      className="flex min-w-[400px] max-w-[400px] flex-col gap-6 rounded-lg border border-neutral-700 bg-neutral-800 p-10"
    >
      {error.type === "token" ? (
        <span className="text-sm text-red-400">
          API Key inválida! Para obter uma API Key válida acesse{" "}
          <a
            href="https://dashboard.api-football.com/register"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 underline transition-colors hover:text-green-300"
          >
            API Sports
          </a>{" "}
          e crie uma conta gratuita!
        </span>
      ) : (
        error.type === "requests" && (
          <span className="text-sm text-red-400">
            Número máximo de requisições atingido!
          </span>
        )
      )}
      <input
        type="text"
        value={apiKey}
        onChange={(event) => {
          setError({ type: null });
          setApiKey(event.target.value);
        }}
        placeholder="Digite sua API Key..."
        className={`rounded-lg border border-neutral-500 p-4 text-neutral-800 placeholder:font-alt placeholder:italic placeholder:text-neutral-500 ${
          error.type && "border-none ring-1 ring-red-500"
        }`}
      />
      <button
        type="submit"
        className="flex justify-center rounded-lg bg-indigo-500 p-4 text-lg font-bold transition-colors hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-indigo-500"
        disabled={loading || !apiKey}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Spin /> Carregando
          </span>
        ) : (
          "Entrar"
        )}
      </button>
    </form>
  );
}
