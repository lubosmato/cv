import { Job } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import { PrintPageBreak } from "./PrintPageBreak";
import { Card, CardContent } from "./ui/card";

dayjs.extend(relativeTime)

export function JobCard({ job }: { job: Job }) {
  const to = dayjs(job.to ?? dayjs())
  const since = dayjs(job.since)

  const relativeTime = since.to(to, true);

  return (
    <div className="relative">
      <div className="absolute left-[-41px] top-5 w-6 h-6 rounded-full border-2 border-primary bg-white z-10 lg:block hidden"></div>
      <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 text-primary font-medium lg:block hidden [writing-mode:vertical-lr] rotate-180">{relativeTime}</div>
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="text-gray-400 text-sm mb-1">{since.format("MMM YYYY")} - {to.format("MMM YYYY")}</div>
          <h4 className="text-lg mb-1">{job.company}</h4>
          <h3 className="text-xl font-bold mb-3">{job.position}</h3>
          <RichText className="text-gray-600 mb-4" data={job.description} />
          <div className="flex flex-wrap gap-2">
            {job.technologies?.filter(t => typeof t !== "number").map((technology, technologyIndex) => (
              <span key={technologyIndex} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {technology.label}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <PrintPageBreak />
    </div >
  )
}
