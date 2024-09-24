import { config } from "@fortawesome/fontawesome-svg-core";
import { Poppins, Open_Sans } from "next/font/google";

import "./globals.css";

config.autoAddCss = false;

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const opens_sans = Open_Sans({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Transcribo",
  description: "Transcribe and Translate Voice and Text",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${opens_sans.variable} antialiased`}
    >
      <body className="bg-gradient-to-r from-blue-50 to-transparent text-slate-700  text-sm sm:text-base">
        {children}
      </body>
    </html>
  );
}
