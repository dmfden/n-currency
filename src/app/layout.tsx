import type { Metadata } from "next";
import { roboto } from "./fonts";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";


export const metadata: Metadata = {
  title: "Currency App",
  description: "Currency App Next",
};

const bodyClasses = `flex flex-col min-h-screen justify-between ${roboto.className}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClasses}>
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
