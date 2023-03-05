import PageTitle from "@/components/PageTitle";
import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <PageTitle />
        <main className="flex-1 p-8 container m-auto">
          <Main />
        </main>
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
