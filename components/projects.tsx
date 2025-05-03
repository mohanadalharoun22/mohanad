"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-commerce Platform",
    description: "An online store built for my clothing business with inventory management and customer analytics.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Web Development", "E-commerce", "Business"],
  },
  {
    title: "Agricultural Market Analysis",
    description: "Data analysis project to identify seasonal trends in crop prices to optimize investment timing.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Data Analysis", "Agriculture", "Investment"],
  },
]

export function Projects() {
  return (
    <section>
      <SectionHeading id="projects" title="Projects" subtitle="Some of my recent work" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="pb-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
            </div>
            <div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
