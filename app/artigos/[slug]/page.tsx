import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/app/components/site-header";
import { getArtigoBySlug, getArtigos } from "@/app/lib/artigos";

export const dynamic = "force-static";
export const dynamicParams = false;

type ArtigoPageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export async function generateStaticParams() {
  const artigos = await getArtigos();

  return artigos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArtigoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artigo = await getArtigoBySlug(slug);

  if (!artigo) {
    notFound();
  }

  return {
    title: artigo.title,
    description: artigo.description,
  };
}

export default async function ArtigoPage({ params }: ArtigoPageProps) {
  const { slug } = await params;
  const artigo = await getArtigoBySlug(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 sm:py-20">
        <Link
          className="text-sm font-medium text-amber-800 transition-colors hover:text-amber-950"
          href="/"
        >
          ← Voltar para todos os artigos
        </Link>

        <article className="mt-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
            {artigo.category}
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-stone-900 sm:text-5xl">
            {artigo.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-stone-600">
            {artigo.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1 border-b border-stone-200 pb-8 text-sm text-stone-500">
            <span>Por {artigo.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={artigo.publishedAt}>
              {dateFormatter.format(new Date(artigo.publishedAt))}
            </time>
          </div>
          <div className="space-y-6 py-8 text-lg leading-8 text-stone-700">
            {artigo.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <footer className="border-t border-stone-200">
        <div className="mx-auto w-full max-w-3xl px-6 py-6 text-sm text-stone-500">
          Caderno Aberto · Leituras feitas para compartilhar.
        </div>
      </footer>
    </>
  );
}
