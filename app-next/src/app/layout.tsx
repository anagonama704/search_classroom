import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./Provider";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "教室検索",
  description: "自習教室検索サービス",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
