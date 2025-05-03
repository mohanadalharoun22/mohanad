"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section>
      <SectionHeading id="about" title="About Me" subtitle="Get to know me better" />

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <div className="space-y-4 text-lg">
            <p>
              I'm a curious and hardworking student with a growing interest in Artificial Intelligence, business, and
              problem-solving. I enjoy learning how things work, especially in math and technology, and I'm currently
              building my skills step by step in programming, English, and data analysis.
            </p>
            <p>
              I also have experience in sales, which has helped me develop strong communication, persuasion, and
              negotiation skills through real-life interactions with different types of people. This experience has
              taught me how to understand customer needs, stay confident under pressure, and think quickly to solve
              problems, all of which I believe are valuable in both business and technology.
            </p>
            <p>
              In my free time, I enjoy boxing and reading, they help me stay focused and motivated. I'm always open to
              learning, improving, and connecting with people who share the same passion for growth and impact.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Age:</span>
                  <span>17</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Nationality:</span>
                  <span>Egyptian</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Egypt</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Languages:</span>
                  <span>Arabic, English</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Interests:</span>
                  <span>AI, Boxing, Reading</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
