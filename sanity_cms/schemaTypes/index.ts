import {defineType} from "sanity"

const page = defineType({
    name: "page",
    title: "Website Pages",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Page Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Page URL",
        type: "slug",
        options: {
          source: "title",
        },
      },
      {
        name: "heroHeadline",
        title: "Hero Headline", 
        type: "string",
      },
      {
        name: "heroDescription",
        title: "Hero Description",
        type: "text",
      },
      {
        name: "content",
        title: "Page Content",
        type: "text",
      },
    ],
  })

  const post = defineType({
    name: "post", 
    title: "Blog Posts",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "content",
        title: "Content", 
        type: "text",
      },
    ],
  })

  export const schemaTypes = [page, post]
