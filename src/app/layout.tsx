import Header from "@/components/ui/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        <main className="p-10">
          {children}
        </main>
      </body>
    </html>
  );
}
