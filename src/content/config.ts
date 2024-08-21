import { defineCollection, z } from "astro:content";

export const collections = {
	posts: defineCollection({
		schema: ({ image }) => z.object({
			images: z.array(image()),
			caption: z.string(),
		}),
	})
}
