interface CertificationsProps {
  certifications: string[]
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Certifications</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  )
}

