import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Anatech Soluções",
  description: "Sistemas de Gestão para Seu Negócio!",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Anatech Soluções",
    description: "Sistemas de Gestão para Seu Negócio!",
    url: "https://anatech-solucoes-portfolio.vercel.app/",
    siteName: "Anatech Soluções",
    images: [
      {
        url: "/preview.png",
        width: 400,
        height: 300,
        alt: "Anatech Soluções - Sistemas de Gestão",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "9999px",
            },
          }}
        />
      </body>
    </html>
  );
}
