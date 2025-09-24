import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/componentes";
import Container from "@/componentes/Container";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"], 

});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"], 
  
});

export const metadata: Metadata = {
  title: "Portafolio Christian Fidelio",
  description: "Portafolio Christian Fidelio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Script externo de Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17597988761"
          strategy="afterInteractive"
        />

        {/* Script inline de configuración */}
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17597988761');
          `}
        </Script>


        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id="modal"></div>

        <Container>
          <Header/>

          {children}
          <Footer/>

        </Container>
      </body>
    </html>
  );
}
