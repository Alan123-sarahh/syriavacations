import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import OriginTracker from "./components/OriginTracker";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Syria Vacations: Rentals, Local Activities & Attractions",
  description:
    "Your ultimate guide to exploring Syria! Whether you're a local or a visitor, find unique vacation rentals, exciting activities, and top attractions. Discover everything you need for the perfect Syrian getaway or local adventure. Book your stay and start exploring now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <OriginTracker>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </OriginTracker>
      </body>
    </html>
  );
}
