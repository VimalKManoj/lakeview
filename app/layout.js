import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavBar from "./components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lake View Aquatics",
  description: "Your Premier Destination for Rare and Exotic Aquatic Fishes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/Logo_3.png" sizes="any" />
      <body className={inter.className}>
        <MobileNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
