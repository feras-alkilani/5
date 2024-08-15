import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    }),
    defineField({
      name: "linkedin",
      title: "Linkedin",
      type: "url"
    }),
    defineField({
      name: "github",
      title: "Github",
      type: "url"
    })
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
});
