import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Header from "../components/header";

export const metadata = {
  title: "ShopNow",
  description: "Your one-stop shop for the latest tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white antialiased">
        <CartProvider><div><Header/>
        {children}
          </div></CartProvider>
      </body>
    </html>
  );
}
