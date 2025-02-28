import { Progress } from "@/components/ui/progress"

interface Language {
  name: string
  level: string
  proficiency: number
}

interface LanguagesProps {
  languages: Language[]
}

export function Languages({ languages }: LanguagesProps) {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Languages</h2>

      <div className="space-y-3">
        {languages.map((language, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-sm sm:text-base">{language.name}</span>
              <span className="text-sm text-gray-600">{language.level}</span>
            </div>
            <Progress value={language.proficiency} className="h-2 w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}

