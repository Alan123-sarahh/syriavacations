import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import OriginTracker from "./components/OriginTracker";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Syria Vacation Rentals & Airbnb",
  description:
    "Looking for unique places to stay in Syria? Explore a diverse range of short-term rentals & Airbnbs across Syria. Find the perfect home for your Syrian adventure - book now!",
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
