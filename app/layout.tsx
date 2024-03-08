import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "SwapClass",
  description:
    "Upgrade Your Schedule: Effortlessly Swap Courses & Sections with Ease !",
  openGraph: {
    title: "SwapClass",
    description:
      "Upgrade Your Schedule: Effortlessly Swap Courses & Sections with Ease !",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-neutral-950 text-neutral-50 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
