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
				name: "siteSettings",
				label: "Ustawienia Strony",
				path: "src/content/settings",
				format: "md",
				match: {
					include: "site-settings",
				},
				document: "site-settings",
				ui: {
					// Only allow one site settings file
					allowedActions: {
						create: false,
						delete: false,
					},
				},
				fields: [
					{
						type: "string",
						name: "title",
						label: "Tytuł ustawień",
						required: true,
						isTitle: true,
					},
					{
						type: "object",
						name: "business",
						label: "Informacje kontaktowe",
						fields: [
							{
								type: "string",
								name: "address",
								label: "Adres",
								required: true,
							},
							{
								type: "string",
								name: "city",
								label: "Miasto",
								required: true,
							},
							{
								type: "string",
								name: "postalCode",
								label: "Kod pocztowy",
								required: true,
							},
							{
								type: "string",
								name: "country",
								label: "Kraj",
								required: true,
							},
							{
								type: "string",
								name: "phone",
								label: "Telefon",
								required: true,
							},
							{
								type: "string",
								name: "email",
								label: "Email",
								required: true,
							},
						],
					},
					{
						type: "object",
						name: "openingHours",
						label: "Godziny otwarcia",
						list: true,
						ui: {
							itemProps: (item) => {
								return { label: item?.days || "Dzień" };
							},
						},
						fields: [
							{
								type: "string",
								name: "days",
								label: "Dni",
								required: true,
							},
							{
								type: "string",
								name: "hours",
								label: "Godziny",
								required: true,
							},
						],
					},
					{
						type: "object",
						name: "social",
						label: "Media społecznościowe",
						fields: [
							{
								type: "string",
								name: "facebook",
								label: "Facebook URL",
							},
							{
								type: "string",
								name: "instagram",
								label: "Instagram URL",
							},
							{
								type: "string",
								name: "twitter",
								label: "Twitter URL",
							},
							{
								type: "string",
								name: "youtube",
								label: "YouTube URL",
							},
						],
					},
					{
						type: "object",
						name: "about",
						label: "O mnie / O nas",
						description: "Sekcja 'O mnie/O nas' wyświetlana na stronie głównej",
						fields: [
							{
								type: "string",
								name: "title",
								label: "Tytuł sekcji",
								description: "Np. 'O mnie', 'O salonie', 'Nasza misja'",
								default: "O naszym salonie",
							},
							{
								type: "string",
								name: "content",
								label: "Treść",
								ui: {
									component: "textarea",
								},
								description: "Krótki opis dla sekcji 'O mnie/O nas'",
							},
							{
								type: "string",
								name: "signature",
								label: "Podpis",
								description: "Podpis pod tekstem, np. 'Anna Kowalska' lub 'Zespół Beauty and Care'",
								default: "Zespół Beauty and Care",
							},
						],
					},
				],
			},
			{
				name: "pricing",
				label: "Cennik",
				path: "src/content/pricing",
				format: "md",
				ui: {
					// Show a single pricing file
					allowedActions: {
						create: false,
						delete: false,
					},
				},
				fields: [
					{
						type: "string",
						name: "title",
						label: "Tytuł cennika",
						required: true,
						isTitle: true,
					},
					{
						type: "string",
						name: "description",
						label: "Opis cennika",
						ui: {
							component: "textarea",
						},
					},
					{
						type: "string",
						name: "categories",
						label: "Kategorie cennika",
						description: "Kategorie usług (np. Kosmetologia, Pakiety Zabiegowe)",
						list: true,
						ui: {
							component: "tags",
						},
					},
					{
						type: "rich-text",
						name: "body",
						label: "Zawartość cennika",
						isBody: true,
					},
				],
			},
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
					// SEO fields for gallery
					{
						type: "string",
						name: "seoTitle",
						label: "Tytuł SEO",
						description: "Tytuł używany w meta tagu (jeśli inny niż główny tytuł)",
					},
					{
						type: "string",
						name: "seoDescription",
						label: "Opis SEO",
						description: "Opis używany w meta tagu (jeśli inny niż główny opis)",
						ui: {
							component: "textarea",
						},
					},
					{
						type: "string",
						name: "canonicalUrl",
						label: "URL kanoniczny",
						description: "Pełny adres URL, jeśli treść występuje też pod innym adresem",
					},
					{
						type: "boolean",
						name: "noindex",
						label: "Ukryj przed wyszukiwarkami",
						description: "Zaznacz, jeśli strona nie powinna być indeksowana przez wyszukiwarki",
					},
					{
						type: "string",
						name: "keywords",
						label: "Słowa kluczowe",
						description: "Słowa kluczowe dla wyszukiwarek",
						list: true,
						ui: {
							component: "tags",
						},
					},
				],
			},
			{
				name: "posts",
				label: "Posty na bloga",
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
					// SEO fields for posts
					{
						type: "string",
						name: "seoTitle",
						label: "Tytuł SEO",
						description: "Tytuł używany w meta tagu (jeśli inny niż główny tytuł)",
					},
					{
						type: "string",
						name: "seoDescription",
						label: "Opis SEO",
						description: "Opis używany w meta tagu (jeśli inny niż główny opis)",
						ui: {
							component: "textarea",
						},
					},
					{
						type: "string",
						name: "keywords",
						label: "Słowa kluczowe",
						description: "Słowa kluczowe dla wyszukiwarek",
						list: true,
						ui: {
							component: "tags",
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
				name: "zabiegi",
				label: "Zabiegi",
				path: "src/content/zabiegi",
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
						name: "tags",
						label: "Tagi",
						description: "Tagi usługi (np. twarz, ciało)",
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
						type: "string",
						name: "clients",
						label: "Dla kogo",
						description: "Grupy odbiorców dla których usługa jest zalecana",
						list: true,
					},
					// SEO fields
					{
						type: "string",
						name: "seoTitle",
						label: "Tytuł SEO",
						description: "Tytuł używany w meta tagu (jeśli inny niż główny tytuł)",
					},
					{
						type: "string",
						name: "seoDescription",
						label: "Opis SEO",
						description: "Opis używany w meta tagu (jeśli inny niż główny opis)",
						ui: {
							component: "textarea",
						},
					},
					{
						type: "string",
						name: "canonicalUrl",
						label: "URL kanoniczny",
						description: "Pełny adres URL, jeśli treść występuje też pod innym adresem",
					},
					{
						type: "boolean",
						name: "noindex",
						label: "Ukryj przed wyszukiwarkami",
						description: "Zaznacz, jeśli strona nie powinna być indeksowana przez wyszukiwarki",
					},
					{
						type: "string",
						name: "keywords",
						label: "Słowa kluczowe",
						description: "Słowa kluczowe dla wyszukiwarek",
						list: true,
						ui: {
							component: "tags",
						},
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
