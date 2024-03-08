import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { DeleteModalProvider } from "@/app/context/deleteModalContext";
import { Toaster } from "sonner";

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
    <DeleteModalProvider>
      <Toaster />
      <div className="absolute top-0 left-0 inset-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[.125] -z-10">
        <div className="h-full bg-gradient-to-b from-transparent via-transparent to-neutral-950"></div>
      </div>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center my-16 mx-auto w-full">
        {children}
      </main>
      <Footer />
    </DeleteModalProvider>
  );
}
