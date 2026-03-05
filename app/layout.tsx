import type { Metadata } from "next";
import "./globals.css";

import PullNav from "./components/navigation/pullNav"

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
      <body className="no-scroll-body">
        <div className="paper-frame">

          <PullNav />

          <div className="inner-frame">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
