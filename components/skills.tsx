"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = [
  {
    id: "business",
    name: "Business",
    skills: [
      { name: "Sales & Negotiation", level: 90 },
      { name: "Project Management", level: 85 },
      { name: "Entrepreneurship", level: 80 },
      { name: "Risk Analysis", level: 75 },
      { name: "Customer Relations", level: 95 },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    skills: [
      { name: "Arabic (Native)", level: 100 },
      { name: "English", level: 75 },
    ],
  },
  {
    id: "certifications",
    name: "Certifications",
    skills: [
      { name: "Web Analytics", level: 70 },
      { name: "SEO", level: 65 },
      { name: "CPR", level: 80 },
      { name: "Leadership", level: 85 },
      { name: "Peer Review", level: 75 },
    ],
  },
]

export function Skills() {
  return (
    <section>
      <SectionHeading id="skills" title="Skills & Certifications" subtitle="What I bring to the table" />

      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="business">
            <TabsList className="grid grid-cols-3 mb-6">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
