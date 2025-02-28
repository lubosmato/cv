import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
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
