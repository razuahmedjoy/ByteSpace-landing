import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  src: "./fonts/Satoshi-Variable.woff2",
  weight: "300 900",
});

const clashDisplay = localFont({
  variable: "--font-clash",
  src: "./fonts/ClashDisplay-Bold.woff2",
  weight: "700",
});

export const metadata: Metadata = {
  title: {
    default: "ByteSpace — Get Access to Hundreds of Courses",
    template: "%s | ByteSpace",
  },
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
