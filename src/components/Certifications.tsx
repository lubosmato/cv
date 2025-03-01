import { Certification } from "@/payload-types"

export function Certifications({ certifications }: { certifications: Certification[] }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Certifications</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
        {certifications.map((cert, index) => (
          <li key={index}>
            {cert.link ? (<a href={cert.link} target="_blank" className="underline truncate">{cert.label}</a>) :
              <>{cert.label}</>
            }
          </li>
        ))}
      </ul>
    </section>
  )
}

