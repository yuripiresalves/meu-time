export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 py-5">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5">
        <p className="font-alt text-sm">
          Feito por{" "}
          <a
            href="https://linkedin.com/in/yuripiresalves/"
            target="_blank"
            rel="noreferrer"
            className="font-bold transition-colors hover:text-emerald-400"
          >
            Yuri Alves
          </a>
        </p>
        <p className="font-alt text-sm">
          Teste técnico{" "}
          <a
            href="https://linkedin.com/company/trade-technology/"
            target="_blank"
            rel="noreferrer"
            className="font-bold transition-colors hover:text-indigo-400"
          >
            Trade Technology
          </a>
        </p>
      </div>
    </footer>
  );
}
