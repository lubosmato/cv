import { getPayload } from "@/lib/payload"
import { RichText } from "@payloadcms/richtext-lexical/react"

export async function ProfessionalSummary() {

  const payload = await getPayload()
  const profile = await payload.findGlobal({ slug: "profile" })

  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Professional Summary</h2>
      <div className="rich-text">
        <RichText className="text-gray-700 text-sm sm:text-base" data={profile.summary} />
      </div>
    </section>
  )
}

