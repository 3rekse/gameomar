import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// import { Montserrat } from "next/font/google";

const mountainsOfChristmas = localFont({
  src: "./fonts/MountainsofChristmas-Bold.ttf",
  variable: "--font-mountains-of-christmas",
  weight: "400 700",
});


export const metadata: Metadata = {
  title: "GAME OMAR",
  description: "Vacanze 2024 ",
  icons: {
    icon: "/ccla.svg", // Assicurati di avere un file favicon.ico nella cartella public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mountainsOfChristmas.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
