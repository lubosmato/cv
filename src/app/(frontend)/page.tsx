import { Certifications } from "@/components/Certifications"
import { Educations } from "@/components/Educations"
import { Header } from "@/components/Header"
import { KeyProjects } from "@/components/KeyProjects"
import { Languages } from "@/components/Languages"
import { ProfessionalSummary } from "@/components/ProfessionalSummary"
import { Skills } from "@/components/Skills"
import { WorkExperience } from "@/components/WorkExperience"
import { getPayload } from "@/lib/payload"

export default async function CV() {
  const payload = await getPayload()

  const jobs = await payload.find({
    collection: "jobs",
    sort: "-since",
    depth: 1,
  })
  const educations = await payload.find({ collection: "educations", pagination: false })
  const skills = await payload.find({ collection: "skills", sort: "-percentage", pagination: false, })
  const languages = await payload.find({ collection: "languages", sort: "-proficiency", pagination: false })
  const certifications = await payload.find({ collection: "certifications", pagination: false })
  const projects = await payload.find({ collection: "projects", sort: ["-type", "-date"], pagination: false })

  return (
    <div className="bg-background text-foreground min-h-screen p-4 sm:p-6 md:p-8 mx-auto print:pl-[1.5cm] print-container max-w-6xl">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 print:sm:grid-cols-3 gap-8 print:gap-6">
        <div className="lg:col-span-2 print:sm:col-span-2">
          <ProfessionalSummary />
          <WorkExperience jobs={jobs} />
        </div>

        <div>
          <Educations educations={educations.docs} />
          <Skills skills={skills.docs} />
          <Languages languages={languages.docs} />
          <Certifications certifications={certifications.docs} />
        </div>
      </div>

      <KeyProjects projects={projects.docs} />

      <footer className="mt-8 pt-4 border-t text-center text-muted-foreground text-sm print:mt-6">
        <p>References available upon request</p>
      </footer>
    </div>
  )
}

