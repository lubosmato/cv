import { Certifications } from "@/components/Certifications"
import { Education } from "@/components/Education"
import { Header } from "@/components/Header"
import { KeyProjects } from "@/components/KeyProjects"
import { Languages } from "@/components/Languages"
import { ProfessionalSummary } from "@/components/ProfessionalSummary"
import { Skills } from "@/components/Skills"
import { WorkExperience } from "@/components/WorkExperience"
import config from '@/payload.config'
import { headers as getHeaders } from "next/headers"
import { getPayload } from "payload"
import { fileURLToPath } from "url"

export default async function CV() {

  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
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

  const professionalSummary =
    "Experienced software engineer with over 8 years of expertise in full-stack development, specializing in React, Node.js, and cloud infrastructure. Proven track record of delivering scalable applications and leading development teams to success. Passionate about clean code, performance optimization, and creating exceptional user experiences."

  const workExperience = [
    {
      date: "Jan 2020 - Present",
      company: "Tech Innovations Inc.",
      title: "Senior Software Engineer",
      description:
        "Led a team of 5 developers to build and maintain a SaaS platform serving 50,000+ users. Architected and implemented microservices using Node.js, Express, and MongoDB. Reduced application load time by 40% through performance optimization techniques.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    },
    {
      date: "Mar 2017 - Dec 2019",
      company: "Digital Solutions LLC",
      title: "Full Stack Developer",
      description:
        "Developed responsive web applications using React, Redux, and TypeScript. Built RESTful APIs with Node.js and Express, integrated with PostgreSQL databases. Collaborated with UX designers and mentored junior developers.",
      skills: ["React", "Redux", "TypeScript", "PostgreSQL"],
    },
    {
      date: "Jun 2015 - Feb 2017",
      company: "WebCraft Studios",
      title: "Junior Web Developer",
      description:
        "Developed and maintained client websites using HTML, CSS, JavaScript, and PHP. Implemented responsive designs and ensured cross-browser compatibility. Assisted in migrating legacy applications to modern frameworks.",
      skills: ["HTML/CSS", "JavaScript", "PHP", "jQuery"],
    },
  ]

  const education = [
    {
      date: "2013 - 2015",
      degree: "Master of Computer Science",
      institution: "Stanford University",
      details: "Specialized in Artificial Intelligence and Machine Learning",
    },
    {
      date: "2009 - 2013",
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of California, Berkeley",
      details: "Graduated with Honors, GPA: 3.8/4.0",
    },
  ]

  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React & React Native", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "SQL & NoSQL Databases", level: 80 },
    { name: "AWS/Cloud Services", level: 75 },
    { name: "Docker & Kubernetes", level: 70 },
    { name: "CI/CD", level: 80 },
  ]

  const languages = [
    { name: "English", level: "Native", proficiency: 100 },
    { name: "Spanish", level: "Fluent", proficiency: 85 },
    { name: "French", level: "Intermediate", proficiency: 60 },
  ]

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
      <Header {...personalInfo} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <ProfessionalSummary summary={professionalSummary} />
          <WorkExperience jobs={workExperience} />
        </div>

        {/* Right Column */}
        <div>
          <Education education={education} />
          <Skills skills={skills} />
          <Languages languages={languages} />
          <Certifications certifications={certifications} />
        </div>
      </div>

      {/* Page break control for printing */}
      <div className="hidden print:block print:page-break-before print:mt-8"></div>

      <KeyProjects projects={keyProjects} />

      {/* Footer */}
      <footer className="mt-8 pt-4 border-t text-center text-gray-500 text-sm print:mt-6">
        <p>References available upon request</p>
      </footer>
    </div>
  )
}

