import Link from "next/link";
import SiteHeader from "@/app/components/site-header";
import { getArtigos } from "@/app/lib/artigos";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default async function Home() {
  const artigos = await getArtigos();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16 sm:py-24">
        <section className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
            Um espaço para boas ideias
          </p>
          <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-stone-900 sm:text-6xl">
            Histórias que merecem uma pausa.
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Leituras sobre criatividade, hábitos e bem-estar para acompanhar o
            seu dia, uma ideia de cada vez.
          </p>
        </section>

        <section aria-labelledby="artigos-heading">
          <div className="mb-6 flex items-end justify-between border-b border-stone-200 pb-4">
            <h2
              className="font-serif text-2xl font-semibold text-stone-900"
              id="artigos-heading"
            >
              Artigos recentes
            </h2>
            <span className="text-sm text-stone-500">
              {artigos.length} leituras
            </span>
          </div>
          <div className="divide-y divide-stone-200">
            {artigos.map((artigo) => (
              <article className="py-8" key={artigo.slug}>
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-stone-500">
                  <span className="font-medium text-amber-800">
                    {artigo.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={artigo.publishedAt}>
                    {dateFormatter.format(new Date(artigo.publishedAt))}
                  </time>
                </div>
                <h3 className="font-serif text-2xl font-semibold tracking-tight text-stone-900">
                  <Link
                    className="transition-colors hover:text-amber-800"
                    href={`/artigos/${artigo.slug}`}
                  >
                    {artigo.title}
                  </Link>
                </h3>
                <p className="mt-3 max-w-3xl leading-7 text-stone-600">
                  {artigo.description}
                </p>
                <p className="mt-4 text-sm text-stone-500">
                  Por {artigo.author}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-stone-200">
        <div className="mx-auto w-full max-w-5xl px-6 py-6 text-sm text-stone-500">
          Caderno Aberto · Leituras feitas para compartilhar.
        </div>
      </footer>
    </>
  );
}
