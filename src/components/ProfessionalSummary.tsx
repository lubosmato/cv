interface ProfessionalSummaryProps {
  summary: string
}

export function ProfessionalSummary({ summary }: ProfessionalSummaryProps) {
  return (
    <section className="mb-8 print:mb-6">
      <h2 className="text-xl font-bold mb-4 pb-1 border-b text-primary">Professional Summary</h2>
      <p className="text-gray-700 text-sm sm:text-base">{summary}</p>
    </section>
  )
}

