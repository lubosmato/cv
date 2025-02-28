import type { CollectionConfig } from 'payload'

export const Languages: CollectionConfig = {
  slug: 'languages',
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
