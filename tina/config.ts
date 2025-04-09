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
            type: "string",
            name: "authorName",
            label: "Autor",
            description: "Imię i nazwisko autora artykułu",
            default: "Beauty and Care Team",
          },
          {
            type: "string",
            name: "categories",
            label: "Kategorie",
            description: "Kategorie artykułu (np. Pielęgnacja skóry, Zabiegi)",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "tags",
            label: "Tagi",
            description: "Tagi artykułu (np. nawilżanie, karboksyterapia)",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Zdjęcie wyróżniające",
            description: "Zdjęcie wyświetlane w podglądzie artykułu i przy udostępnianiu w mediach społecznościowych",
          },
          {
            type: "string",
            name: "seoTitle",
            label: "Tytuł SEO",
            description: "Alternatywny tytuł dla wyszukiwarek (opcjonalnie, domyślnie używany jest główny tytuł)",
          },
          {
            type: "string",
            name: "seoDescription",
            label: "Opis SEO",
            description: "Opis dla wyszukiwarek (opcjonalnie, domyślnie używany jest excerpt)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "canonicalUrl",
            label: "URL kanoniczny",
            description: "Pełny URL kanoniczny (tylko jeśli treść występuje również pod innym adresem)",
          },
          {
            type: "boolean",
            name: "noindex",
            label: "Ukryj w wyszukiwarkach",
            description: "Zaznacz, aby ukryć artykuł w wynikach wyszukiwania",
            default: false,
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
            type: "datetime",
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
            type: "string",
            name: "categories",
            label: "Kategorie",
            description: "Kategorie usługi (np. Modelowanie sylwetki, Zabiegi na twarz)",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "tags",
            label: "Tagi",
            description: "Tagi usługi (np. lifting, karboksyterapia)",
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "string",
            name: "seoTitle",
            label: "Tytuł SEO",
            description: "Alternatywny tytuł dla wyszukiwarek (opcjonalnie, domyślnie używany jest główny tytuł)",
          },
          {
            type: "string",
            name: "seoDescription",
            label: "Opis SEO",
            description: "Opis dla wyszukiwarek (opcjonalnie, domyślnie używany jest krótki opis)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "canonicalUrl",
            label: "URL kanoniczny",
            description: "Pełny URL kanoniczny (tylko jeśli treść występuje również pod innym adresem)",
          },
          {
            type: "boolean",
            name: "noindex",
            label: "Ukryj w wyszukiwarkach",
            description: "Zaznacz, aby ukryć usługę w wynikach wyszukiwania",
            default: false,
          },
          {
            type: "string",
            name: "priceRange",
            label: "Przedział cenowy",
            description: "Np. 200-500 zł",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Pełny opis",
            isBody: true,
          },
        ],
      },
      // Testimonials section removed
    ],
  },
});