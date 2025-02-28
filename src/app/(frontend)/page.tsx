import { Certifications } from "@/components/Certifications"
import { Educations } from "@/components/Education"
import { Header } from "@/components/Header"
import { KeyProjects } from "@/components/KeyProjects"
import { Languages } from "@/components/Languages"
import { PrintPageBreak } from "@/components/PrintPageBreak"
import { ProfessionalSummary } from "@/components/ProfessionalSummary"
import { Skills } from "@/components/Skills"
import { WorkExperience } from "@/components/WorkExperience"
import { getPayload } from "@/lib/payload"
import { headers as getHeaders } from "next/headers"
import { fileURLToPath } from "url"

export default async function CV() {

  const headers = await getHeaders()
  const payload = await getPayload()
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const personalInfo = {
    name: "John Doe",
    title: "Senior Software Engineer",
    contact: {
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe",
    },
  }


  const jobs = await payload.find({
    collection: "jobs",
    sort: "-since",
    depth: 1,
  })
  const educations = await payload.find({ collection: "educations" })
  const skills = await payload.find({ collection: "skills", sort: "-percentage" })

  const languages = await payload.find({ collection: "languages", sort: "-proficiency" })

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Certified Scrum Master",
  ]

  const keyProjects = [
    {
      title: "E-commerce Platform Redesign",
      description:
        "Led the complete redesign and migration of a legacy e-commerce platform to a modern React/Node.js stack.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Developed a real-time analytics dashboard for monitoring system performance and user behavior.",
      technologies: ["D3.js", "WebSockets", "Redis", "Express"],
    },
    {
      title: "Mobile Payment Application",
      description:
        "Built a secure mobile payment application with React Native, integrating with multiple payment gateways.",
      technologies: ["React Native", "Firebase", "Stripe API", "OAuth"],
    },
    {
      title: "DevOps Infrastructure Automation",
      description:
        "Implemented infrastructure as code and automated deployment pipelines, reducing deployment time by 70%.",
      technologies: ["Terraform", "Docker", "Kubernetes", "GitHub Actions"],
    },
  ]

  return (
    <div className="bg-white text-gray-800 min-h-screen p-4 sm:p-6 md:p-8 mx-auto print:p-0 print-container max-w-6xl">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <ProfessionalSummary />
          <WorkExperience jobs={jobs} />
        </div>

        {/* Right Column */}
        <div>
          <Educations educations={educations.docs} />
          <Skills skills={skills.docs} />
          <Languages languages={languages.docs} />
          <Certifications certifications={certifications} />
        </div>
      </div>

      <PrintPageBreak />

      <KeyProjects projects={keyProjects} />

      {/* Footer */}
      <footer className="mt-8 pt-4 border-t text-center text-gray-500 text-sm print:mt-6">
        <p>References available upon request</p>
      </footer>
    </div>
  )
}

