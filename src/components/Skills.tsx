import { Progress } from "@/components/ui/progress"
import { Skill } from "@/payload-types"

export function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section className="mb-8 print:mb-6 break-inside-avoid">
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Skills</h2>

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-sm sm:text-base">{skill.label}</span>
              <span className="text-sm text-gray-600">{skill.percentage}%</span>
            </div>
            <Progress value={skill.percentage} className="h-2 w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}

