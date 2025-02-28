import { Card, CardContent } from "@/components/ui/card"
import { Education } from "@/payload-types"
import dayjs from "dayjs"

export function Educations({ educations }: { educations: Education[] }) {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Education</h2>

      <div className="space-y-4">
        {educations.map((item, index) => (
          <Card key={index} className="shadow-sm">
            <CardContent className="p-4">
              <div className="text-gray-600 text-sm mb-1">{dayjs(item.since).year()} - {dayjs(item.to).year()}</div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <h4 className="text-base mb-1">{item.subtitle}</h4>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

