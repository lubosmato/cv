import { Card, CardContent } from "@/components/ui/card"

interface EducationItem {
  date: string
  degree: string
  institution: string
  details: string
}

interface EducationProps {
  education: EducationItem[]
}

export function Education({ education }: EducationProps) {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Education</h2>

      <div className="space-y-4">
        {education.map((item, index) => (
          <Card key={index} className="shadow-sm">
            <CardContent className="p-4">
              <div className="text-gray-600 text-sm mb-1">{item.date}</div>
              <h3 className="text-lg font-bold mb-1">{item.degree}</h3>
              <h4 className="text-base mb-1">{item.institution}</h4>
              <p className="text-gray-700 text-sm">{item.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

