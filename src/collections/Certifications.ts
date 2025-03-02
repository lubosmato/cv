import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Certifications: CollectionConfig = {
  slug: 'certifications',
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
      name: "link",
      type: "text",
    }
  ],
}
