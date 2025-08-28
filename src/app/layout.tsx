import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vitalhospitalveterinario.com.br'),
  title: "Hospital Veterinário Vital 24h | Imbituba, Garopaba e Laguna",
  description: "Atendimento veterinário 24h, centro cirúrgico completo, equipe qualificada e especializada nas cidades de Imbituba, Garopaba e Laguna. Cuidamos de quem você ama.",
  keywords: ["veterinário 24h", "hospital veterinário", "emergência pet", "clínica veterinária", "vacina", "castração","oncologia veterinária", "Imbituba", "Laguna", "Garopaba"],
  openGraph: {
    title: "Hospital Veterinário Vital 24h | Imbituba, Garopaba e Laguna",
    description: "Atendimento de emergência e especialidades veterinárias.",
    url: "https://www.vitalhospitalveterinario.com.br",
    siteName: "Hospital Veterinário Vital",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontInter.variable,
        fontPoppins.variable
      )}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            "name": "Hospital Veterinário Vital",
            "description": "Hospital Veterinário 24h com duas unidades em Santa Catarina, oferecendo emergência, cirurgias, oncologia e cuidados especializados.",
            "telephone": "+5548998000012",
            "url": "https://www.vitalhospitalveterinario.com.br",
            "image": "/og-image.png",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Rodovia SC 434, km 01, Araçatuba",
                "addressLocality": "Imbituba",
                "addressRegion": "SC",
                "postalCode": "88780-000",
                "addressCountry": "BR"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Av. João Pinho, 586 - Mar Grosso",
                "addressLocality": "Laguna",
                "addressRegion": "SC",
                "postalCode": "88790-000",
                "addressCountry": "BR"
              }
            ],
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
          }) }}
        />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}