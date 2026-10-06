import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Caderno Aberto | Leituras feitas para compartilhar",
    template: "%s | Caderno Aberto",
  },
  description:
    "Leituras sobre criatividade, hábitos e bem-estar para acompanhar o seu dia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
