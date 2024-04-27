import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer.jsx/Footer";
import Navbar from "./components/Navbar/Navbar";
import OriginTracker from "./components/OriginTracker";

const font = Nunito({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Syria Vacations",
  description: "syria vacations website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <OriginTracker>
          <Navbar />
          {children}
          <Footer />
        </OriginTracker>
      </body>
    </html>
  );
}
