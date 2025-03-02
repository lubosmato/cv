import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  hooks: {
    afterChange: [() => revalidatePath("/")]
  },
  defaultSort: "since",
  fields: [
    {
      name: "since",
      type: "date",
      required: true,
    },
    {
      name: "to",
      type: "date",
    },
    {
      name: "company",
      type: "text",
      required: true,
    },
    {
      name: "position",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "technologies",
      type: "relationship",
      relationTo: "technologies",
      hasMany: true,
      required: true,
    },
  ],
}
