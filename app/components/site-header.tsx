import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-stone-200">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <Link
          className="font-serif text-xl font-bold tracking-tight text-stone-900"
          href="/"
        >
          Caderno Aberto
        </Link>
        <span className="text-sm text-stone-500">Ideias para ler com calma</span>
      </div>
    </header>
  );
}
