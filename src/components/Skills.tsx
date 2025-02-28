import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: number
}

interface SkillsProps {
  skills: Skill[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Skills</h2>

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-sm sm:text-base">{skill.name}</span>
              <span className="text-sm text-gray-600">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2 w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}

