import type { Metadata } from "next";
import { Sono } from "next/font/google";
import "./globals.css";

const sono = Sono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Till X",
  description: "Calendar for no friend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sono.className} ${sono.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
