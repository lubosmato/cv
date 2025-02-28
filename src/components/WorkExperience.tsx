import { Card, CardContent } from "@/components/ui/card"
import { Job } from "@/payload-types"
import { RichText } from '@payloadcms/richtext-lexical/react'
import { PaginatedDocs } from "payload"
import dayjs from "dayjs"
import { PrintPageBreak } from "./PrintPageBreak"
import { JobCard } from "./JobCard"

export async function WorkExperience({ jobs }: { jobs: PaginatedDocs<Job> }) {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Work Experience</h2>

      <div className="relative space-y-6">
        <div className="absolute left-[-30px] top-0 bottom-0 w-0.5 bg-primary lg:block hidden"></div>

        {jobs.docs.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </section>
  )
}

