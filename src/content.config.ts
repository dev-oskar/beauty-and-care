import { defineCollection, reference, z } from "astro:content";

// Site settings collection
const settings = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
			business: z.object({
				address: z.string(),
				city: z.string(),
				postalCode: z.string(),
				country: z.string(),
				phone: z.string(),
				email: z.string(),
			}),
			openingHours: z.array(
				z.object({
					days: z.string(),
					hours: z.string(),
				}),
			),
			social: z.object({
				facebook: z.string().optional(),
				instagram: z.string().optional(),
				twitter: z.string().optional(),
				youtube: z.string().optional(),
			}),
			about: z
				.object({
					title: z.string().optional(),
					content: z.string().optional(),
					signature: z.string().optional(),
				})
				.optional(),
		}),
});

// Gallery collection
const gallery = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			coverImage: image().optional(),
			images: z
				.array(
					z.object({
						src: z.string(),
						caption: z.string().optional(),
						alt: z.string().optional(),
						category: z.string().optional(),
					}),
				)
				.optional(),
			order: z.number().optional(),
			featured: z.boolean().optional(),
			// SEO fields
			seoTitle: z.string().optional(),
			seoDescription: z.string().optional(),
			canonicalUrl: z.string().optional(),
			noindex: z.boolean().optional(),
			keywords: z.array(z.string()).optional(),
			draft: z.boolean().optional(),
		}),
});

// Blog posts
const posts = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date().optional(),
			excerpt: z.string().optional(),
			authorName: z.string().optional().default("Beauty and Care Team"),
			categories: z.array(z.string()).optional(),
			tags: z.array(z.string()).optional(),
			featuredImage: image().optional(),
			seoTitle: z.string().optional(),
			seoDescription: z.string().optional(),
			keywords: z.array(z.string()).optional(),
			draft: z.boolean().optional(),
		}),
});

// Zabiegi collection (services)
const zabiegi = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
			date: z.coerce.date().optional(),
			location: z.string().optional(),
			clients: z.array(z.string()).optional(),
			tags: z.array(z.string()).optional(),
			order: z.number().optional(),
			priceRange: z.string().optional(),
			// SEO fields
			seoTitle: z.string().optional(),
			seoDescription: z.string().optional(),
			canonicalUrl: z.string().optional(),
			noindex: z.boolean().optional(),
			keywords: z.array(z.string()).optional(),
			draft: z.boolean().optional(),
		}),
});

// Pricing collection
const pricing = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			categories: z.array(z.string()).optional(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	posts,
	zabiegi,
	gallery,
	settings,
	pricing,
};
