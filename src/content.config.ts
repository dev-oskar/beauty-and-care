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
	// Adding proper loader to read from content/posts
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./content/posts",
	}),
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
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./content/services",
	}),
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

// Portfolios collection (from content directory)
const tinaPortfolios = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./content/portfolios",
	}),
	schema: ({ image }) => 
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
			date: z.coerce.date().optional(),
			location: z.string().optional(),
			clients: z.array(z.string()).optional(),
			order: z.number().optional(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	portfolios,
	tinaPortfolios,
	otherPages,
	posts,
	services,
};