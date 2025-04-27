import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "master";

export default defineConfig({
	branch,

	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	// Configure media manager to only show images in the assets/images folder
	media: {
		tina: {
			mediaRoot: "assets/images/",
			publicFolder: "src",
		},
	},
	// Simplified schema with single gallery collection
	schema: {
		collections: [
			{
				name: "gallery",
				label: "Galeria zdjęć",
				path: "src/content/gallery",
				format: "md",
				ui: {
					// Show a single gallery
					allowedActions: {
						create: false,
						delete: false,
					},
				},
				fields: [
					{
						type: "string",
						name: "title",
						label: "Tytuł galerii",
						required: true,
					},
					{
						type: "string",
						name: "description",
						label: "Opis galerii",
						ui: {
							component: "textarea",
						},
					},
					{
						type: "object",
						name: "images",
						label: "Zdjęcia w galerii",
						list: true,
						ui: {
							itemProps: (item) => {
								return { label: item?.caption || "Zdjęcie" };
							},
							description:
								"Dodaj zdjęcia do galerii. Wszystkie dodane zdjęcia będą wyświetlane na stronie galerii.",
						},
						fields: [
							{
								type: "image",
								name: "src",
								label: "Zdjęcie",
								required: true,
							},
							{
								type: "string",
								name: "caption",
								label: "Podpis pod zdjęciem",
								description: "Tekst wyświetlany pod zdjęciem",
							},
							{
								type: "string",
								name: "alt",
								label: "Tekst alternatywny",
								description: "Opis zdjęcia dla osób niewidomych (SEO)",
							},
						],
					},
				],
			},
			{
				name: "posts",
				label: "Blog Posts",
				path: "src/content/posts",
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
						description:
							"Zdjęcie wyświetlane w podglądzie artykułu i przy udostępnianiu w mediach społecznościowych",
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
				name: "services",
				label: "Usługi",
				path: "src/content/services",
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
						required: false,
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
		],
	},
});
