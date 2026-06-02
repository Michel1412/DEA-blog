import { ValueCard } from '@/components/content/ValueCard'
import type { MinistryLandingContent } from '@/lib/specs/types'

type MinistryLandingValuesProps = {
  values: MinistryLandingContent['values']
}

export function MinistryLandingValues({ values }: MinistryLandingValuesProps) {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          {values.title} <span className="text-primary">{values.titleHighlight}</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.items.map((value) => (
            <ValueCard key={value.title} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
