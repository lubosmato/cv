import type { CollectionConfig } from 'payload'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
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
