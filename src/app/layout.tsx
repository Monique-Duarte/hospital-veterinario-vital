import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/site/Header";

// Configuração da fonte para o corpo do texto
const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Configuração da fonte para os títulos
const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hospital Veterinário Vital 24h | Imbituba e Laguna - SC",
  description: "Atendimento veterinário 24h em Imbituba e Laguna. Especialistas em oncologia, felinos e cirurgias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontInter.variable,
        fontPoppins.variable
      )}>
         <Header />
         <main>
          {children}
         </main>
      </body>
    </html>
  );
}