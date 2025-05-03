"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    school: "Oaks Christian School",
    period: "2024 – 2027",
    description: "Pursuing a comprehensive education with a focus on technology and business studies.",
  },
  {
    school: "Ahmed Hassan Al-Zayyat Secondary School",
    period: "2023 – 2026",
    description: "Completed secondary education with a focus on mathematics and sciences.",
  },
]

export function Education() {
  return (
    <section>
      <SectionHeading id="education" title="Education" subtitle="My academic background" />

      <div className="space-y-6">
        {education.map((item, index) => (
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
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <CardTitle>{item.school}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{item.period}</p>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
