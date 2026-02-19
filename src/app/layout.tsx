import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "AV Academic Solutions & Consulting",
  description: "Structured Academic Excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">

        <Navbar />

        {children}

        <footer className="bg-slate-900 text-white text-center py-8 mt-20">
          <p>
            © {new Date().getFullYear()} AV Academic Solutions & Consulting.
          </p>
        </footer>

      </body>
    </html>
  );
}