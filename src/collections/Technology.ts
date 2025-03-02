import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  hooks: {
    afterChange: [() => revalidatePath("/")]
  },
  admin: {
    useAsTitle: "label"
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
    }
  ],
}
