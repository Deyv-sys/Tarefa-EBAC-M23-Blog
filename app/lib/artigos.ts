import artigosData from "@/app/data/artigos.json";

export type Artigo = {
  title: string;
  author: string;
  publishedAt: string;
  category: string;
  description: string;
  content: string[];
  slug: string;
};

type ArtigoData = Omit<Artigo, "slug">;

function slugify(title: string) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const artigos = (artigosData as ArtigoData[]).map((artigo) => ({
  ...artigo,
  slug: slugify(artigo.title),
}));

export async function getArtigos(): Promise<Artigo[]> {
  return artigos;
}

export async function getArtigoBySlug(slug: string): Promise<Artigo | undefined> {
  return artigos.find((artigo) => artigo.slug === slug);
}
