import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const myriad = localFont({
  src: [
    {
      path: "../fonts/myriadpro-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/myriadpro-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/myriadpro-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/myriadpro-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-myriad",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Anahita Mouni — Portfolio",
  description:
    "Bringing marketing to life through creativity & strategy. Portfolio of Anahita Mouni.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${myriad.variable} antialiased`}>
      <body className="min-h-screen bg-cream text-dark flex flex-col">
        <TopBar />
        <main className="flex-1 bg-cream">
          <div className="max-w-6xl mx-auto rounded-t-xl overflow-hidden min-h-screen">
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
};
