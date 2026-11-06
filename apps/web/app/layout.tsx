import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import "@workspace/ui/globals.css"

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Jorge Cayambe · Desarrollador & Data",
  description: "Portafolio de Jorge Cayambe: desarrollo de software, datos e IA.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`dark scroll-smooth ${sans.variable} ${mono.variable} ${display.variable}`}
    >
      <body className="bg-black font-sans antialiased">
        {children}
      </body>
    </html>
  )
}