import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "SwappClass",
  description:
    "Upgrade Your Schedule: Effortlessly Swap Courses & Sections with Ease !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground antialiased overflow-y-scroll overflow-x-hidden">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}