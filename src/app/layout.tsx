import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import MarketingTracker from "@/components/MarketingTracker";

export const metadata: Metadata = {
  title: "Anvaya Studio | Strategy, Design, Growth",
  description: "We connect the dots. You get results. A premier agency for strategic brand growth and creative direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        <Suspense fallback={null}>
          <MarketingTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
