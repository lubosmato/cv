import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

export const Profile: GlobalConfig = {
  slug: 'profile',
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
      name: "profession",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "place",
      type: "text",
      required: true,
    },
    {
      name: "githubHandle",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "linkedinHandle",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      type: "richText",
      required: true,
    },
    {
      name: "photo",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "altPhoto",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "altProfession",
      type: "text",
      required: true,
    },
  ],
}
