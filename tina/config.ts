import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data publikacji",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Krótki opis",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Treść",
            isBody: true,
          },
        ],
      },
      {
        name: "service",
        label: "Usługi",
        path: "src/data/portfolios",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł usługi",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Krótki opis",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Zdjęcie główne",
            required: true,
          },
          {
            type: "string",
            name: "date",
            label: "Data wprowadzenia",
          },
          {
            type: "string",
            name: "location",
            label: "Salon",
          },
          {
            type: "string",
            name: "clients",
            label: "Typy zabiegów",
            list: true,
          },
          {
            type: "number",
            name: "order",
            label: "Kolejność",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Pełny opis",
            isBody: true,
          },
        ],
      },
      {
        name: "testimonial",
        label: "Opinie",
        path: "src/data/testimonials",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Imię klienta",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Zdjęcie",
          },
          {
            type: "string",
            name: "quote",
            label: "Opinia",
            ui: {
              component: "textarea",
            },
            required: true,
          },
        ],
      },
    ],
  },
});