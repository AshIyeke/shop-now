import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ShopNow",
  description: "Your one-stop shop for the latest tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-white antialiased">
        <Providers>
          <div>
            <Navbar/>
            {children}
          </div></Providers>
      </body>
    </html>
  );
}
