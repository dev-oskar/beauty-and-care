import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

// Type-check frontmatter using a schema
// portfolios
const portfolios = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/portfolios",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image(),
			clients: z.array(z.string()),
			location: z.string(),
			images: z.array(
				z.array(image()).refine((arr) => [1, 2, 3].includes(arr.length), {
					message: "Each sub-array must contain 1, 2, or 3 items",
				}),
			),
			// Transform string to Date object
			date: z.coerce.date(),
			order: z.number(),
			// SEO fields
			categories: z.array(z.string()).optional(),
			tags: z.array(z.string()).optional(),
			seoTitle: z.string().optional(),
			seoDescription: z.string().optional(),
			canonicalUrl: z.string().optional(),
			noindex: z.boolean().optional(),
			priceRange: z.string().optional(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// testimonials section removed

// other pages
const otherPages = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/otherPages",
	}),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			draft: z.boolean().optional(),
		}),
});

// Blog posts
const posts = defineCollection({
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

export const collections = {
	portfolios,
	otherPages,
	posts,
};