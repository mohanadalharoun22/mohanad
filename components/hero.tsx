"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Mohanad Mahmoud</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/cv/MohanadMahmoud_CV.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  )
}
