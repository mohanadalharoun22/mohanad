import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  id: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ id, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div id={id} className={cn("mb-10 scroll-mt-20", className)}>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>}
      <div className="mt-4 h-1 w-20 bg-primary rounded-full" />
    </div>
  )
}
