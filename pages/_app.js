import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";

import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${sans.variable} ${display.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
