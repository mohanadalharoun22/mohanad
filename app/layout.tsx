import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohanad Mahmoud | Portfolio",
  description: "Professional portfolio of Mohanad Mahmoud - AI enthusiast, entrepreneur, and problem-solver",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <div className="flex-1 md:ml-72">
              <MobileNav />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
