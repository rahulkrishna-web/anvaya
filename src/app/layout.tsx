import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anvaya Studios | Different parts. One system.",
  description: "Anvaya Studios connects the dots across strategy, creativity and performance to build brands that grow with clarity.",
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
        {children}
      </body>
    </html>
  );
}
