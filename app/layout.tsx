import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ahleeryan-Joe Ventura",
  description: "Created by Ahleeryan-Joe Ventura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="no-scroll">
        <div>
          {children}
        </div>
        
      </body>
    </html>
  );
}
