import { getPayload } from "@/lib/payload"
import { RichText } from "@payloadcms/richtext-lexical/react"

export async function ProfessionalSummary() {

  const payload = await getPayload()
  const profile = await payload.findGlobal({ slug: "profile" })

  return (
    <section className="mb-8 print:mb-6 break-inside-avoid">
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Professional Summary</h2>
      <RichText className="text-gray-700 text-sm sm:text-base rich-text" data={profile.summary} />
    </section>
  )
}

