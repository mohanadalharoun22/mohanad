"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Project Management Specialist",
    period: "May 2024 – Jan 2025 · 9 months",
    description:
      "Founded two small businesses: one for selling bags and another for clothing. Responsible for budgeting, marketing, and customer service in both ventures. Developed a strong understanding of entrepreneurial challenges, including cost management, building customer loyalty, and adapting to market changes.",
    skills: ["Entrepreneurship", "Marketing", "Customer Service", "Budgeting"],
  },
  {
    title: "Investment Specialist",
    period: "Jan 2019 – May 2024 · 5 years 5 months",
    description:
      "Successfully invested in seasonal crop production and trade, gaining hands-on experience in crop growth and distribution. Acquired insights into the financial aspects of agriculture, including risk management and market trends.",
    skills: ["Investment", "Risk Management", "Market Analysis", "Agriculture"],
  },
  {
    title: "Sales Assistant",
    period: "Jan 2019 – Aug 2022 · 3 years 8 months",
    description:
      "Developed strong communication and sales skills through daily customer interaction. Gained deep understanding of product marketing and client needs in rural areas, particularly in agricultural tools and products. Built lasting relationships with customers, helping increase store sales.",
    skills: ["Sales", "Communication", "Customer Relations", "Product Knowledge"],
  },
]

export function Experience() {
  return (
    <section>
      <SectionHeading id="experience" title="Experience" subtitle="My professional journey" />

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <CardTitle>{experience.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{experience.period}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
