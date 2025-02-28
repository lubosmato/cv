import { Card, CardContent } from "@/components/ui/card"

interface Job {
  date: string
  company: string
  title: string
  description: string
  skills: string[]
}

interface WorkExperienceProps {
  jobs: Job[]
}

export function WorkExperience({ jobs }: WorkExperienceProps) {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Work Experience</h2>

      <div className="relative space-y-6">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-primary"></div>

        {jobs.map((job, index) => (
          <div key={index} className="relative">
            <div className="absolute left-0 top-5 w-6 h-6 rounded-full border-2 border-primary bg-white z-10"></div>
            <Card className="ml-12 shadow-md">
              <CardContent className="p-6">
                <div className="text-gray-400 text-sm mb-1">{job.date}</div>
                <h4 className="text-xl font-bold mb-1">{job.company}</h4>
                <h3 className="text-lg mb-3">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

