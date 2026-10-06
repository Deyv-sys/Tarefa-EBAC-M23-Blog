# Caderno Aberto

Blog desenvolvido com Next.js App Router. A página inicial lista artigos de um
JSON local, e cada artigo tem uma rota própria com conteúdo renderizado no
servidor e metadados de SEO gerados a partir dos dados do artigo.

## Executar localmente

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Artigos e rotas

Os artigos ficam em `app/data/artigos.json`. Os slugs são derivados dos títulos
em `app/lib/artigos.ts`. A rota dinâmica `app/artigos/[slug]/page.tsx` exporta
`generateStaticParams` e usa `force-static` para gerar páginas e metadados
durante o build.

Para adicionar um artigo, inclua no JSON título, autor, data de publicação,
categoria, descrição e conteúdo. A rota e os metadados serão gerados a partir
do título e da descrição.

## Publicar na Vercel

Importe o repositório na [Vercel](https://vercel.com/new) e mantenha os comandos
padrão do Next.js para build e deploy. Para validar localmente antes de
publicar:

```bash
npm run build
```
