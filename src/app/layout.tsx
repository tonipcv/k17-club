import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K17 - Unlock Your Potential With Crypto",
  description: "Descubra o potencial das criptomoedas com a K17. Oferecemos análises profissionais, mentorias exclusivas e estratégias comprovadas para investimentos em criptoativos.",
  keywords: "k17, crypto, bitcoin, investimentos, trading, análise técnica, mentoria crypto, curso crypto",
  openGraph: {
    title: "K17 - Unlock Your Potential With Crypto",
    description: "Descubra o potencial das criptomoedas com a K17. Análises profissionais e estratégias comprovadas.",
    url: "https://k17.com.br",
    siteName: "K17",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "K17 - Crypto Education Platform",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K17 - Unlock Your Potential With Crypto",
    description: "Descubra o potencial das criptomoedas com a K17. Análises profissionais e estratégias comprovadas.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
