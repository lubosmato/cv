import { Card, CardContent } from "@/components/ui/card"
import { Project } from "@/payload-types"
import { Technologies } from "./Technologies"
import { RichText } from "@payloadcms/richtext-lexical/react"
import clsx from "clsx"
import dayjs from "dayjs"
import Image from "next/image"

export function KeyProjects({ projects }: { projects: Project[] }) {
  return (
    <section>
      <h2 className="text-xl font-bold mt-8 mb-4 pb-1 border-b text-primary">Projects</h2>

      <div className="md:columns-2 columns-1 gap-4 space-y-4">
        {projects.map((project, index) => (
          <Card key={index} className={clsx(
            "shadow-md break-inside-avoid",
            project.type === "professional" && "shadow-sm shadow-primary border-primary",
            project.type === "hobby" && "shadow-gray-200"
          )}
          >

            {typeof project.photo !== "number" && project?.photo?.url && (
              <div className="w-full h-[300px] overflow-hidden rounded-t-xl">
                <Image
                  src={project.photo.url}
                  alt={project.photo.alt}
                  width={530}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            )}

            <CardContent className={clsx("p-6", project.photo && "pt-0")}>

              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                {project.date && (
                  <span className="text-sm text-gray-400">{dayjs(project.date).format("MMM YYYY")}</span>
                )}
              </div>

              <RichText className="text-gray-600 mb-4 rich-text" data={project.description} />
              <div className="flex flex-wrap gap-2">
                <Technologies technologies={project.technologies} />
              </div>

              <div className="mt-4">
                <span className={clsx(
                  "px-3 py-1 text-xs font-medium rounded-full",
                  project.type === "professional"
                    ? "bg-primary/10 text-primary"
                    : "bg-gray-100 text-gray-800"
                )}>
                  {project.type === "professional" ? "Professional Project" : "Personal Project"}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

