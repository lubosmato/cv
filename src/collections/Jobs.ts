import type { CollectionConfig } from 'payload'

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  defaultSort: "since",
  fields: [
    {
      name: "since",
      type: "date",
    },
    {
      name: "to",
      type: "date",
      required: false,
    },
    {
      name: "company",
      type: "text",
    },
    {
      name: "position",
      type: "text",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "badges",
      type: "relationship",
      relationTo: "technologies"
    },
  ],
}
