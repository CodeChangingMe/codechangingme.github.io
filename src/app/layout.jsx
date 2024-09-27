import "./globals.css";
import { SITE_TITLE } from "@/constants";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children, header }) {
  return (
    <html lang="en">
      <head>
        <title>{SITE_TITLE}</title>
      </head>
      <body className="max-w-3xl mx-auto min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
