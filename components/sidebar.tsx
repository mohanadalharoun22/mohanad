"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Linkedin, Facebook, Instagram, Github, Download } from "lucide-react"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mohanad-mahmoud-745b18363", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/me/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/mohanad.mahmoud_/", icon: Instagram },
  { name: "GitHub", href: "https://github.com/", icon: Github },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-72 h-screen bg-background border-r border-border flex-col fixed left-0 top-0 z-30 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Mohanad Mahmoud</h2>
        <ThemeToggle />
      </div>

      <nav className="mt-10 flex-1">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center py-2 px-3 rounded-md text-sm font-medium transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">Connect with me:</p>
        <div className="flex space-x-3">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label={item.name}
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <Button asChild variant="outline" className="w-full mt-4">
          <a href="/cv/MohanadMahmoud_CV.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </Button>
      </div>
    </aside>
  )
}
