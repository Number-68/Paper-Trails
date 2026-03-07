import type { Metadata } from "next";
import "./globals.css";

import {
  Tomorrow,
  Covered_By_Your_Grace,
  Nixie_One,
  Silkscreen, 
  Caveat,
  Caveat_Brush
} from "next/font/google";

import PullNav from "./components/navigation/pullNav"


// Tomorrow
const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Covered By Your Grace
const covered = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
});

// Nixie One
const nixie = Nixie_One({
  subsets: ["latin"],
  weight: "400",
});

// Silkscreen
const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Caveat
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Caveat Brush
const caveatBrush = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
});





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
