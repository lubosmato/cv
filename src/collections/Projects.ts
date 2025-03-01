import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "type",
      type: "select",
      options: [
        { label: "Hobby", value: "hobby" },
        { label: "Professional", value: "professional" },
      ],
      required: true,
    },
    {
      name: "technologies",
      type: "relationship",
      relationTo: "technologies",
      hasMany: true,
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "photo",
      type: "relationship",
      relationTo: "media",
    }
  ],
}
