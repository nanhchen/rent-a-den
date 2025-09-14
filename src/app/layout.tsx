import type { Metadata } from "next";
import { Lato, Odor_Mean_Chey } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const odor_mean_chey = Odor_Mean_Chey({
  variable: "--font-odor",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent A Den",
  description: "Where UCR students can find housing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${odor_mean_chey.variable} ${lato.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
