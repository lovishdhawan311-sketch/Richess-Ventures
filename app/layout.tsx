import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richess Ventures | From Vision to Venture",
  description: "Richess Ventures partners with entrepreneurs and promising startups through strategic investment, business development and hands-on venture building.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
