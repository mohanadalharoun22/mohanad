import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 py-16 md:py-24 space-y-24 md:space-y-32">
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  )
}
