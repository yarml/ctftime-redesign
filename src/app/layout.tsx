import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CTF Time",
  description: "All About CTF",
  icons: "favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="mt-[3.4rem] min-h-[calc(100vh-3.4rem)] bg-stone-800 text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
