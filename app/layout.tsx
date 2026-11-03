import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Sashin Deemantha | Portfolio",
  description: "UI/UX Designer and Software Engineer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased bg-[#f8f9fa] text-black`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}