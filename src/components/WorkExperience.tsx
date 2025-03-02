import { Job } from "@/payload-types"
import { PaginatedDocs } from "payload"
import { JobCard } from "./JobCard"

export async function WorkExperience({ jobs }: { jobs: PaginatedDocs<Job> }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 pb-1 print:mb-2 border-b text-primary">Work Experience</h2>

      <div className="relative space-y-6">
        <div className="absolute left-[-30px] top-0 bottom-0 w-0.5 bg-primary print:sm:block lg:block hidden"></div>

        {jobs.docs.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </section>
  )
}

