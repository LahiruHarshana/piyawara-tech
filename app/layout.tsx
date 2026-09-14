import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyawara Tech — Technology with purpose",
  description: "Piyawara Tech builds thoughtful digital products, intelligent systems, and dependable web experiences.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
