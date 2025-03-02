import { Job } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Technologies } from "./Technologies";
import { Card, CardContent } from "./ui/card";
import { PrintPageBreak } from "./PrintPageBreak";

dayjs.extend(relativeTime)

export function JobCard({ job }: { job: Job }) {
  const to = dayjs(job.to ?? dayjs())
  const since = dayjs(job.since)

  const relativeTime = since.to(to, true);

  return (
    <div className="relative break-inside-avoid">
      <div className="absolute left-[-41px] top-5 w-6 h-6 rounded-full border-2 border-primary bg-white z-10 print:sm:block lg:block hidden"></div>
      <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 text-primary font-medium print:sm:block lg:block hidden [writing-mode:vertical-lr] rotate-180">{relativeTime}</div>
      <Card className="shadow-md">
        <CardContent className="p-6">
          <div className="text-gray-400 text-sm mb-1">{since.format("MMM YYYY")} - {job.to ? to.format("MMM YYYY") : "present"}</div>
          <h4 className="text-lg mb-1">{job.company}</h4>
          <h3 className="text-xl font-bold mb-3">{job.position}</h3>
          <RichText className="text-gray-600 mb-4 rich-text" data={job.description} />
          <div className="flex flex-wrap gap-2">
            <Technologies technologies={job.technologies} />
          </div>
        </CardContent>
      </Card>
      <PrintPageBreak />
    </div>
  )
}
