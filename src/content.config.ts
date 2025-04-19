import { defineCollection, reference, z } from "astro:content";
// import { glob } from "astro/loaders";

// other pages
const otherPages = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
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
			canonicalUrl: z.string().optional(),
			noindex: z.boolean().optional(),
			draft: z.boolean().optional(),
		}),
});

// Services collection
const services = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
			date: z.coerce.date().optional(),
			location: z.string().optional(),
			clients: z.array(z.string()).optional(),
			categories: z.array(z.string()).optional(),
			tags: z.array(z.string()).optional(),
			order: z.number().optional(),
			priceRange: z.string().optional(),
			draft: z.boolean().optional(),
		}),
});


export const collections = {
	otherPages,
	posts,
	services,
};
