import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  hooks: {
    afterChange: [() => revalidatePath("/")]
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    },
    {
      name: "percentage",
      type: "number",
      min: 0,
      max: 100,
      required: true,
    },
  ],
}
