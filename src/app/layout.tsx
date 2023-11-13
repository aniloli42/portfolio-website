import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "@/styles/globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anil Oli Portfolio",
  description:
    "Anil Oli is a passionate software who loves to create the solutions based on requirement and market demand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}
