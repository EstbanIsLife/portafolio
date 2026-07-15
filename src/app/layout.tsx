import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://estbanislife.github.io/MiWebPersonal";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Esteban Huertas | Desarrollador",
  description:
    "Portafolio de Jaime Esteban Huertas Leguizamo, ingeniero informático y desarrollador apasionado por la tecnología.",
  authors: [{ name: "Jaime Esteban Huertas Leguizamo" }],
  keywords: [
    "desarrollador",
    "portafolio",
    "React",
    "Next.js",
    "TypeScript",
    "frontend",
    "Esteban Huertas",
  ],
  openGraph: {
    title: "Esteban Huertas | Desarrollador",
    description:
      "Portafolio de Jaime Esteban Huertas Leguizamo, ingeniero informático y desarrollador.",
    url: siteUrl,
    siteName: "Esteban Huertas — Portafolio",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/Foto_Perfil.jpg", width: 400, height: 400, alt: "Jaime Esteban Huertas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esteban Huertas | Desarrollador",
    description: "Portafolio de Jaime Esteban Huertas Leguizamo.",
    images: ["/Foto_Perfil.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
