import { Card, CardContent } from "@/components/ui/card"

interface Project {
  title: string
  description: string
  technologies: string[]
}

interface KeyProjectsProps {
  projects: Project[]
}

export function KeyProjects({ projects }: KeyProjectsProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Key Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

