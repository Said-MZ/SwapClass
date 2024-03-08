import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";

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
    <main className="min-h-screen flex flex-col items-center overflow-y-scroll">
      {children}
    </main>
  );
}
