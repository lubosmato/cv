import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Educations: CollectionConfig = {
  slug: 'educations',
  hooks: {
    afterChange: [() => revalidatePath("/")]
  },
  fields: [
    {
      name: "since",
      type: "date",
      required: true,
    },
    {
      name: "to",
      type: "date",
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
  ],
}
