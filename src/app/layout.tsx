import { Inter, Rubik } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Crappo",
  description: "A Cryptocurrency landing page",
};

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rubik.variable}`}>
      <body>{children}</body>
    </html>
  );
}
