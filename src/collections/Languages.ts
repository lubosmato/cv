import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Languages: CollectionConfig = {
  slug: 'languages',
  hooks: {
    afterChange: [() => revalidatePath("/")]
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "level",
      type: "text",
      required: true,
    },
    {
      name: "proficiency",
      type: "number",
      min: 0,
      max: 100,
      required: true,
    },
  ],
}
