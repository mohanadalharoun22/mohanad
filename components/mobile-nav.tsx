"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between h-16 px-4">
        <h2 className="text-xl font-bold">Mohanad Mahmoud</h2>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium px-2 py-1 rounded-md hover:bg-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}

                <Button asChild variant="outline" className="mt-4">
                  <a href="/cv/MohanadMahmoud_CV.pdf" download>
                    Download CV
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
